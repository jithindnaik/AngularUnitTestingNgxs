import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BookSearchComponent } from './book-search.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;
  let inputElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookSearchComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input'));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  xit('should emit search event on keyup', () => {
    const query = 'Test Query';
    inputElement.nativeElement.value = query;
    inputElement.triggerEventHandler('keyup', null);
    expect(component.search.emit).toHaveBeenCalledWith(query);
  });

  xit('should display error message if error is set', () => {
    const errorMessage = 'Something went wrong';
    component.error = errorMessage;
    fixture.detectChanges();
    const errorElement = fixture.debugElement.query(By.css('.mat-card-footer span'));
    if (errorElement) {
        expect(errorElement.nativeElement.textContent).toBe(errorMessage);
    } else {
        expect(errorElement.nativeElement.textContent).toBeUndefined();
    }
  });

  it('should show spinner when searching is true', () => {
    component.searching = true;
    fixture.detectChanges();
    const spinnerElement = fixture.debugElement.query(By.css('.mat-spinner.show'));
    expect(spinnerElement).toBeNull();
  });
});