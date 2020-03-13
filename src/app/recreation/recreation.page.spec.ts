import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecreationPage } from './recreation.page';

describe('RecreationPage', () => {
  let component: RecreationPage;
  let fixture: ComponentFixture<RecreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
