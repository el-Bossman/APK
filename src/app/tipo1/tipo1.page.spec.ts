import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipo1Page } from './tipo1.page';

describe('Tipo1Page', () => {
  let component: Tipo1Page;
  let fixture: ComponentFixture<Tipo1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipo1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
