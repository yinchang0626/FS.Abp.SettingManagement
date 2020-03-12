import { async, TestBed } from '@angular/core/testing';
import { FsSettingManagementModule } from './fs-setting-management.module';

describe('FsSettingManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FsSettingManagementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FsSettingManagementModule).toBeDefined();
  });
});
