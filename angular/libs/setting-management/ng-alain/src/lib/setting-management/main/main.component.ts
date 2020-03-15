import { Component, OnInit } from '@angular/core';
import { SettingManagementParameters } from '@fs/setting-management';

@Component({
  selector: 'fs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  parameters = new SettingManagementParameters;
  constructor() {
    this.parameters = {
      providerKey: undefined,
      providerName: undefined,
      visible: true,
      routerName: null
    };
  }

  ngOnInit() {
  }
}
