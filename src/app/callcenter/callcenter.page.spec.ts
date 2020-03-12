import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallcenterPage } from './callcenter.page';

describe('CallcenterPage', () => {
  let component: CallcenterPage;
  let fixture: ComponentFixture<CallcenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallcenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallcenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
