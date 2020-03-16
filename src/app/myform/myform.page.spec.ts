import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyformPage } from './myform.page';

describe('MyformPage', () => {
  let component: MyformPage;
  let fixture: ComponentFixture<MyformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
