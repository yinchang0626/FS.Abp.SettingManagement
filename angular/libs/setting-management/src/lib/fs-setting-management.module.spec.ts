import { async, TestBed } from '@angular/core/testing';
import { SettingManagementModule } from './fs-setting-management.module';

describe('SettingManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SettingManagementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SettingManagementModule).toBeDefined();
  });
});
