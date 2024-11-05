import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsformComponent } from './contactsform.component';

describe('ContactsformComponent', () => {
  let component: ContactsformComponent;
  let fixture: ComponentFixture<ContactsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
