import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DropDownListComponent } from './smart.dropdownlist';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListItemComponent } from './smart.listitem';
import { ListItemsGroupComponent } from './smart.listitemsgroup';
var DropDownListModule = /** @class */ (function () {
    function DropDownListModule() {
    }
    DropDownListModule = tslib_1.__decorate([
        NgModule({
            declarations: [DropDownListComponent, ListItemComponent, ListItemsGroupComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [DropDownListComponent, ListItemComponent, ListItemsGroupComponent]
        })
    ], DropDownListModule);
    return DropDownListModule;
}());
export { DropDownListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQuZHJvcGRvd25saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtYXJ0LXdlYmNvbXBvbmVudHMtYW5ndWxhci9kcm9wZG93bmxpc3QvIiwic291cmNlcyI6WyJzbWFydC5kcm9wZG93bmxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVFqRTtJQUFBO0lBQWtDLENBQUM7SUFBdEIsa0JBQWtCO1FBTjlCLFFBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO1lBQ3BGLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO1NBQzVFLENBQUM7T0FFVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHJvcERvd25MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5kcm9wZG93bmxpc3QnO1xuaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC5saXN0aXRlbSc7XG5pbXBvcnQgeyBMaXN0SXRlbXNHcm91cENvbXBvbmVudCB9IGZyb20gJy4vc21hcnQubGlzdGl0ZW1zZ3JvdXAnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0Ryb3BEb3duTGlzdENvbXBvbmVudCwgTGlzdEl0ZW1Db21wb25lbnQsIExpc3RJdGVtc0dyb3VwQ29tcG9uZW50XSxcblx0c2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuXHRleHBvcnRzOiBbRHJvcERvd25MaXN0Q29tcG9uZW50LCBMaXN0SXRlbUNvbXBvbmVudCwgTGlzdEl0ZW1zR3JvdXBDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgRHJvcERvd25MaXN0TW9kdWxlIHsgfVxuIl19