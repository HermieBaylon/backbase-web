import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InitiatePaymentJourneyWrapperComponent } from './initiate-payment-journey.component';

describe('InitiatePaymentJourneyWrapperComponent', () => {
  let initiatePaymentJourneyWrapperComponent: ComponentFixture<InitiatePaymentJourneyWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitiatePaymentJourneyWrapperComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    initiatePaymentJourneyWrapperComponent = TestBed.createComponent(InitiatePaymentJourneyWrapperComponent);
    initiatePaymentJourneyWrapperComponent.detectChanges();
  });
  it('should be created', () => {
    expect(initiatePaymentJourneyWrapperComponent).toBeTruthy();
  });
});
