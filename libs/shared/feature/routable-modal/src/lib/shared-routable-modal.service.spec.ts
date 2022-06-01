import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedRoutableModalService } from './shared-routable-modal.service';

describe('SharedRoutableModalService', () => {
  let service: SharedRoutableModalService;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    router = TestBed.inject(Router);

    activatedRoute = TestBed.inject(ActivatedRoute);
    service = TestBed.inject(SharedRoutableModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('open modal', () => {
    const navigateSpy = spyOn(router, 'navigate');
    service.openModal('test');
    expect(navigateSpy).toHaveBeenCalledWith([], {
      queryParams: { ['openedModal']: 'test' },
      queryParamsHandling: 'merge',
    });
  });

  it('Should not call open modal', () => {
    const navigateSpy = spyOn(router, 'navigate');
    service.openModal('');
    expect(navigateSpy).not.toHaveBeenCalledWith([], {
      queryParams: { ['openedModal']: 'test' },
      queryParamsHandling: 'merge',
    });
  });

  it('closeModal', () => {
    const navigateSpy = spyOn(router, 'navigate');
    service.closeModal();
    expect(navigateSpy).toHaveBeenCalledWith([{ outlets: { ['routable-modal-content']: [] } }], {
      queryParams: { ['openedModal']: undefined },
      queryParamsHandling: 'merge',
    });
  });
});
