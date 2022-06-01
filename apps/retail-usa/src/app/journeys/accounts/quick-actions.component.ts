import { Component, Input } from '@angular/core';

export type QuickActionLink = {
  menuIcon: string;
  title: string;
  url: string;
  permission?: string;
};
@Component({
  selector: 'bb-quick-actions',
  template: `
    <div class="card d-block p-2">
      <div class="bb-block--sm bb-heading-widget heading-widget pb-0 pt-3 px-3">
        <bb-header-ui
          heading="Quick Actions"
          data-role="quick-actions-header"
          headingType="h2"
          headingClasses="bb-heading-widget__heading"
          i18n-heading="Quick Actions Header|Quick Actions@@accounts.quick-actions.bb-header-ui-heading.quickActions"
        ></bb-header-ui>
      </div>

      <ul class="bb-navigation bb-navigation--link">
        <ng-container *ngFor="let link of links">
          <ng-container
            *ngTemplateOutlet="!!link.permission ? linkBoxWithPermission : linkBox; context: { $implicit: link }"
          >
          </ng-container>
        </ng-container>
      </ul>
    </div>

    <ng-template #linkBoxWithPermission let-link>
      <li *bbIfEntitlements="link.permission" class="bb-navigation-item">
        <ng-container *ngTemplateOutlet="linkElement; context: { $implicit: link }"></ng-container>
      </li>
    </ng-template>

    <ng-template #linkBox let-link>
      <li class="bb-navigation-item">
        <ng-container *ngTemplateOutlet="linkElement; context: { $implicit: link }"></ng-container>
      </li>
    </ng-template>

    <ng-template #linkElement let-link>
      <a class="bb-inline-stack bb-navigation-item__link" [routerLink]="link.url" [attr.aria-label]="link.title">
        <bb-icon-ui
          class="bb-inline-stack__item bb-navigation-item__icon"
          [name]="link.menuIcon"
          size="md"
        ></bb-icon-ui>
        <span class="bb-inline-stack__item bb-navigation-item__title">{{ link.title }}</span>
      </a>
    </ng-template>
  `,
})
export class QuickActionsComponent {
  @Input() links: QuickActionLink[] = [];
}
