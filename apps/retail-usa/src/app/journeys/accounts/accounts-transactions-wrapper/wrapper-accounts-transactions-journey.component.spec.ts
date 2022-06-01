import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsTransactionsJourneyWrapperComponent } from './wrapper-accounts-transactions-journey.component';
import '@angular/localize/init';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
describe('AccountsTransactionsJourneyWrapperComponent', () => {
  let component: AccountsTransactionsJourneyWrapperComponent;
  let fixture: ComponentFixture<AccountsTransactionsJourneyWrapperComponent>;
  let activatedRoute: ActivatedRoute;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [AccountsTransactionsJourneyWrapperComponent],
      providers: [],
    });
    fixture = TestBed.createComponent(AccountsTransactionsJourneyWrapperComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
