import { async, TestBed } from '@angular/core/testing';
import { SettingManagementCoreModule } from './core.module';

describe('SettingManagementCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SettingManagementCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SettingManagementCoreModule).toBeDefined();
  });
});
