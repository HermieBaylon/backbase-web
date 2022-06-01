import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { QuickActionsComponent } from './quick-actions.component';

describe('QuickActionsComponent', () => {
  let quickActionsComponent: ComponentFixture<QuickActionsComponent>;
  let router: Router;
  let component;
  let activatedRoute: ActivatedRoute;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickActionsComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    quickActionsComponent = TestBed.createComponent(QuickActionsComponent);
    component = quickActionsComponent.componentInstance;
    quickActionsComponent.detectChanges();
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });
  it('should be created', () => {
    expect(quickActionsComponent).toBeTruthy();
  });
});
