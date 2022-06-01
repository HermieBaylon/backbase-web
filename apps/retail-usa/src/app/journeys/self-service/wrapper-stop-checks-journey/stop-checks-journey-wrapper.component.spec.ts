import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StopChecksJourneyWrapperComponent } from './stop-checks-journey-wrapper.component';

describe('StopChecksJourneyWrapperComponent', () => {
  let stopChecksJourneyWrapperComponent: ComponentFixture<StopChecksJourneyWrapperComponent>;
  let router: Router;
  let component;
  let activatedRoute: ActivatedRoute;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StopChecksJourneyWrapperComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    stopChecksJourneyWrapperComponent = TestBed.createComponent(StopChecksJourneyWrapperComponent);
    component = stopChecksJourneyWrapperComponent.componentInstance;
    stopChecksJourneyWrapperComponent.detectChanges();
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });
  it('should be created', () => {
    expect(stopChecksJourneyWrapperComponent).toBeTruthy();
  });

  it('should navigate to list', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateToForm();
    expect(navigateSpy).toHaveBeenCalledWith(['list', 'form'], { relativeTo: activatedRoute });
  });
});
