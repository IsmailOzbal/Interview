import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BreadcrumbmenuComponent } from './breadcrumbmenu/breadcrumbmenu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BreadcrumbmenuComponent
      ],
      imports: [ RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'InterviewTestProject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('InterviewTestProject');
  });


});
