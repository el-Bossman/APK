import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipo2Page } from './tipo2.page';

describe('Tipo2Page', () => {
  let component: Tipo2Page;
  let fixture: ComponentFixture<Tipo2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipo2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
