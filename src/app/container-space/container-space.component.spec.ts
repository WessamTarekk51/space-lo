import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSpaceComponent } from './container-space.component';

describe('ContainerSpaceComponent', () => {
  let component: ContainerSpaceComponent;
  let fixture: ComponentFixture<ContainerSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
