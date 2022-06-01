import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { PageTitleService } from './page-title.service';

describe('PageTitleService', () => {
  let service: PageTitleService;
  let router: Router;
  const routerEvent$ = new BehaviorSubject<RouterEvent>(null);
  let activatedRoute: ActivatedRoute;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            outlet: 'primary',
            firstChild: {
              snapshot: {
                data: {},
              },
              outlet: 'primary',
            } as ActivatedRoute,
            snapshot: {
              data: {
                title: 'test',
              },
            },
          },
        },
      ],
    });
    router = TestBed.inject(Router);
    (<any>router).events = routerEvent$.asObservable();
    activatedRoute = TestBed.inject(ActivatedRoute);
    (<any>router).events = routerEvent$.asObservable();
    service = TestBed.inject(PageTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open NotificationSettings', () => {
    routerEvent$.next(new NavigationEnd(1, '/someroute', '/'));
    service.run();
    expect(service['titleService'].getTitle()).toEqual('test');
  });
});
