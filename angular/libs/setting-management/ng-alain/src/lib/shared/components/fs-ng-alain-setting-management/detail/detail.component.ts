import { Component, OnInit, ViewChild, ChangeDetectorRef, Input, EventEmitter, Output } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { FormGroup, FormBuilder } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { FsSettingManagementDto, FsSettingManagementStateService, UpdateSettings, FsSettingManagementParameters, FsSettingManagementState, GetSettings } from '@fs/setting-management';
import * as _ from 'lodash';
import { NzNotificationService } from 'ng-zorro-antd';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd';
import { FsNgAlainTreeComponent } from '@fs/ng-alain/basic';
import { Observable } from 'rxjs';

@Component({
  selector: 'fs-ng-alain-setting-management-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  @ViewChild(FsNgAlainTreeComponent, {static: false}) fsNgAlainTreeComponent: FsNgAlainTreeComponent;
  public jsonData = {};

  @Select(FsSettingManagementState.getSettings)
  data$: Observable<FsSettingManagementDto.setting[]>;

  protected _parameters = new FsSettingManagementParameters;

  @Input()
  get parameters(): FsSettingManagementParameters {
    return this._parameters;
  }

  set parameters(value: FsSettingManagementParameters) {
    console.log(value)
    if (value === this._parameters) return;
    this._parameters = {
      providerKey: (value.providerKey) ? value.providerKey : undefined,
      providerName: (value.providerName) ? value.providerName : 'G',
      visible: (value.visible) ? true : false,
      routerName: (value.routerName) ? value.routerName : null
    }
    if (value.routerName) this.loadData();
  }

  protected _isEdit = {};

  @Input()
  get isEdit(): object {
    return this._isEdit;
  }

  set isEdit(value: object) {
    if (value === this._isEdit) return;
    if (value != {}) {
      this._isEdit = value;
      this.isEditChange.emit(value);
    } else {
      this._isEdit = {};
      this.isEditChange.emit({});
    }
  }

  @Output() readonly isEditChange = new EventEmitter<object>();

  rawsData: FsSettingManagementDto.setting[];
  valueInput: FsSettingManagementDto.settingKey = {} as FsSettingManagementDto.settingKey;
  settingsDatas = [];
  loading: boolean = false;
  form: FormGroup;
  level: number = null;

  data = [];
  treeData = [];
  treeValue = [];
  openSelect = [];
  expandedKeys = [];
  isSeletedItem: string = "";
  isExpanded: boolean = false;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private fsSettingManagementStateService: FsSettingManagementStateService,
    private changeDetectorRef: ChangeDetectorRef,
    private notification: NzNotificationService,
    private nzContextMenuService: NzContextMenuService,
  ) {
  }

  ngOnInit() {
    this.data$.subscribe(x => {
      this.nzContextMenuService.close();
      this.data = [];
      this.treeData = [];
      this.treeValue = [];
      this.openSelect = [];
      this.settingsDatas = [];
      this.isSeletedItem = "";
      this.jsonData = {};
      this.isExpanded = false;
      if(x){
        this.rawsData = this.fsSettingManagementStateService.filterByRoute(this.parameters.routerName);
        if (this.rawsData) {
          this.data = this.settingsDatas = this.loadDetail(this.rawsData);
          this.expandedKeys = this.settingsDatas.filter(x => x.parentId == null).map(y => y.id);
          this.level = (this.settingsDatas.length <= 0) ? 0 : _.maxBy(this.settingsDatas, function(o){
            return o.id.split('.').length;
          }).id.split('.').length - 2;
          for(let i = 0; i < this.level; i++){
              this.treeData.push((i == 0) ? this.settingsDatas.filter(x => x.parentId === null) : []);
              this.treeValue.push({});
              this.openSelect.push((i == 0) ? true : false);
          }
          this.buildForm();
          this.init();
        }
      }
    });
  }

  loadData() {
    if(this.parameters.routerName){
      this.loading = true;
      this.valueInput.providerName = this.parameters.providerName;
      this.valueInput.providerKey = this.parameters.providerKey;
      this.store
        .dispatch(new GetSettings(this.valueInput))
        .pipe(finalize(() => this.loading = false))
        .subscribe();
    }
  }

  init(){
    this.changeDetectorRef.detectChanges();
    this.fsNgAlainTreeComponent.init();
  }

  loadDetail(data) {
    let result = [];
    data.forEach(x => {
      result = result.concat(this.splitName(x));
    })
    return _.uniqBy(result, 'id');
  }

  splitName(x?){
    let result = [];
    let code = x.name.split('.', x.name.split('.').length - 1);
    code.splice(0, 2);
    if(code.length > 0){
      code.forEach((y,i) => {
        result.push({
          id: (i === 0) ? this.parameters.routerName : result[i - 1].id + '.' + y,
          parentId: (i === 0) ? null : result[i - 1].id,
          displayName: (i === 0) ? this.parameters.routerName : y
        });
      });
    }
    x.id = x.name;
    x.parentId = (code.length > 0) ? result[result.length - 1].id : null;
    result.push(x);
    this.createJsonData(result.slice(-1)[0]);
    return result;
  }

  createJsonData(x?) {
    let typeIsListOrNotNull = !x.properties.Type || _.startsWith(x.properties.Type, "List");
    if (typeIsListOrNotNull) {
      var isListValue = _.startsWith(x.value, '[');
      isListValue ? this.jsonData[x.name] = JSON.parse(x.value) : this.jsonData[x.name] = x.value;
    } else {
      this.jsonData[x.name] = x.value;
    }
  }

  buildForm() {
    let data = {};
    for (let i of  Object.keys(this.jsonData)) {
      data[i] = [(this.isEdit[i]) ? this.isEdit[i] : this.jsonData[i]];
    }
    this.form = this.fb.group(data);
    this.form.valueChanges.subscribe(x => {
      Object.keys(x).forEach((key) => {
        let raw = this.rawsData.filter(x => x.name === key)[0];
        let rd = (typeof (x[key]) != "string") ? JSON.stringify(x[key]) : x[key];
        if(raw.value !== rd){
          this.isEdit[key] = x[key];
        } else {
          delete this.isEdit[key];
        }
      });
      this.changeDetectorRef.detectChanges();
    });
  }

  save() {
    let updateInput: FsSettingManagementDto.settingUpdateInput = {} as FsSettingManagementDto.settingUpdateInput;
    updateInput.data = {};
    updateInput.providerName = this.parameters.providerName;
    updateInput.providerKey = this.parameters.providerKey;
    updateInput.forceToSet = false;
    Object.keys(this.isEdit).forEach((key) => {
      updateInput.data[key] = (typeof (this.isEdit[key]) != "string") ? JSON.stringify(this.isEdit[key]) : this.isEdit[key];;
    })
    this.loading = true;
    this.store
      .dispatch(new UpdateSettings(updateInput))
      .pipe(finalize(() => {
        this.loading = false;
        this.notification.create(
          'success',
          '成功',
          '資料更新完成'
        );
      }))
      .subscribe(() => {
        this.isEdit = {};
        this.loadData();
      }, (error) => {
      });
  }

  clickItem(node){
    this.nzContextMenuService.close();
    if(node.isLeaf){
      if(this.isSeletedItem === node.key){
        this.isSeletedItem = "";
      } else {
        this.isSeletedItem = node.key;
      }
    }
  }

  searchColor(node){
    if(!this.fsNgAlainTreeComponent || !this.fsNgAlainTreeComponent.searchValue) return node.title;
    var regStr = "";
    var extraText = "~!@#$%^&*()_+=-|\\?/.,<>'\";:[]{}";
    var searchArr = this.fsNgAlainTreeComponent.searchValue.split("");
    searchArr.forEach(x => {
      if(extraText.includes(x)){
        regStr += "\\" + x;
      }else{
        regStr += x;
      }
    });
    var reg = new RegExp(regStr);
    var addClass = "<span class='font-highlight'>" + this.fsNgAlainTreeComponent.searchValue + "</span>";
    var newTitle = node.title.replace(reg, addClass);
    return newTitle;
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent, node: any): void {
    this.nzContextMenuService.create($event, menu);
  }

  loadValue(lvl: number){
    let l = lvl + 2;
    if(!this.treeValue[lvl]) {
      let v = (lvl !== 0) ? this.treeValue[lvl - 1]['id'] : null;
      this.treeValue[lvl] = [];
      if(l < this.level){
        this.treeValue[lvl + 1] = this.treeData[lvl + 1] = [];
        this.openSelect[lvl + 1] = false;
      }
      this.treeData[lvl] = this.settingsDatas.filter(x => x.parentId === v).sort((a, b) => parseInt(a.no) - parseInt(b.no));
    } else {
        if(l < this.level){
          this.treeData[lvl + 1] = this.settingsDatas.filter(x => x.parentId === this.treeValue[lvl]['id']).sort((a, b) => parseInt(a.no) - parseInt(b.no));
          this.openSelect[lvl + 1] = (l !== this.level) ? true : false;
        }
    }
    if(l < this.level){
        for(let i = lvl + 2; i < this.treeData.length; i++){
            this.openSelect[i] = false;
            this.treeData[i] = [];
            this.treeValue[i] = [];
        }
    }
  }

  search(){
    this.nzContextMenuService.close();
    this.data = [];
    this.isSeletedItem = "";
    let value = [];
    for(let index = 0; index < this.treeValue.length; index++){
      value.push([]);
      if(this.treeValue[index]['id']){
          value[index][0] = this.treeValue[index];
          this.data = this.data.concat(this.treeValue[index]);
      } else {
          if(index === 0){
              let v = this.settingsDatas.filter(y => y.parentId === null).sort((a, b) => parseInt(a.no) - parseInt(b.no));
              value[index] = v;
              this.data = this.data.concat(v);
          } else {
              value[index - 1].forEach((x) => {
                  let v = (x['id']) ? this.settingsDatas.filter(y => y.parentId === x['id']).sort((a, b) => parseInt(a.no) - parseInt(b.no)) : [];
                  value[index] = value[index].concat(v);
                  this.data = this.data.concat(v);
              })
          }
      }
    }
    this.init();
  }

  cancel(){
    this.isEdit = {};
    this.notification.create(
      'success',
      '成功',
      '資料更新完成'
    );
    this.loadData();
  }

  treeStatusChange(type: string, status: boolean = false){
    this.isExpanded = status;
    this.fsNgAlainTreeComponent.treeStatusChange(type, status);
  }
}
