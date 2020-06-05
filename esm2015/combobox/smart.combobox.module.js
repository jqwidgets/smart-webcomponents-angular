import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ComboBoxComponent } from './smart.combobox';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListItemComponent } from './smart.listitem';
import { ListItemsGroupComponent } from './smart.listitemsgroup';
let ComboBoxModule = class ComboBoxModule {
};
ComboBoxModule = tslib_1.__decorate([
    NgModule({
        declarations: [ComboBoxComponent, ListItemComponent, ListItemsGroupComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [ComboBoxComponent, ListItemComponent, ListItemsGroupComponent]
    })
], ComboBoxModule);
export { ComboBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuY29tYm9ib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21hcnQtd2ViY29tcG9uZW50cy1hbmd1bGFyL2NvbWJvYm94LyIsInNvdXJjZXMiOlsic21hcnQuY29tYm9ib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVFqRSxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUksQ0FBQTtBQUFsQixjQUFjO0lBTjFCLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO1FBQ2hGLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO0tBQ3hFLENBQUM7R0FFVyxjQUFjLENBQUk7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbWJvQm94Q29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5jb21ib2JveCc7XG5pbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NtYXJ0Lmxpc3RpdGVtJztcbmltcG9ydCB7IExpc3RJdGVtc0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5saXN0aXRlbXNncm91cCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQ29tYm9Cb3hDb21wb25lbnQsIExpc3RJdGVtQ29tcG9uZW50LCBMaXN0SXRlbXNHcm91cENvbXBvbmVudF0sXG5cdHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcblx0ZXhwb3J0czogW0NvbWJvQm94Q29tcG9uZW50LCBMaXN0SXRlbUNvbXBvbmVudCwgTGlzdEl0ZW1zR3JvdXBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tYm9Cb3hNb2R1bGUgeyB9XG4iXX0=