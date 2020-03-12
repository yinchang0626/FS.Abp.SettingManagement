import { Component, OnInit, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FsSettingManagementState, FsSettingManagementDto, GetSettings, FsSettingManagementParameters } from '@fs/setting-management';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'fs-ng-alain-setting-management-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})

export class MainComponent implements OnInit {
  @Select(FsSettingManagementState.getSettings)
  data$: Observable<FsSettingManagementDto.setting[]>;

  protected _parameters = new FsSettingManagementParameters;

  @Input()
  get parameters(): FsSettingManagementParameters {
    return this._parameters;
  }

  set parameters(value: FsSettingManagementParameters) {
    if (value === this._parameters) return;
    this._parameters = {
      providerKey: (value.providerKey) ? value.providerKey : undefined,
      providerName: (value.providerName) ? value.providerName : 'G',
      visible: (value.visible) ? true : false,
      routerName: (value.routerName) ? value.routerName : null
    }
    if(value.visible) this.loadData();
  }

  valueInput: FsSettingManagementDto.settingKey = {} as FsSettingManagementDto.settingKey;
  isDirty = {};
  menu = [];

  loading: boolean = false;
  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.data$.subscribe(x => {
      this.isDirty = {};
      this.menu = [];
      if(x){
        let splitMenu = x.map(y => {
            return y.name.split(".", 2);
        });
        this.menu =  _.uniqBy(splitMenu, String).map(res => {
          return res[0] + "." + res[1];
        })
      }
    })
  }

  loadData() {
    if(this.parameters.visible){
      this.loading = true;
      this.valueInput.providerName = this.parameters.providerName;
      this.valueInput.providerKey = this.parameters.providerKey;
      this.store
        .dispatch(new GetSettings(this.valueInput))
        .pipe(finalize(() => this.loading = false))
        .subscribe();
    }
  }

  setRouterName(name: string) {
    this.parameters = {
      providerKey: this.parameters.providerKey,
      providerName: this.parameters.providerName,
      visible: this.parameters.visible,
      routerName: name
    };
  }

  setTextColor(key){
    if(this.isDirty == {}) return '';
    let check = false;
    for (let i of  Object.keys(this.isDirty)) {
      if(_.startsWith(i, key)){
        check = true;
      }
    }
    return (check) ? 'textColor' : '';
  }
}
