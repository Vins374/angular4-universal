"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AboutComponent = (function () {
    function AboutComponent(meta, title) {
        title.setTitle('My Spiffy Home Page');
        meta.addTags([
            { name: 'author', content: 'Coursetro.com' },
            { name: 'keywords', content: 'angular seo, angular 4 universal, etc' },
            { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.css']
    }),
    __metadata("design:paramtypes", [platform_browser_1.Meta, platform_browser_1.Title])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9YQU1QUC94YW1wcGZpbGVzL2h0ZG9jcy9hbmd1bGFyNC9hbmc0LXNlby9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsInNvdXJjZXMiOlsiL0FwcGxpY2F0aW9ucy9YQU1QUC94YW1wcGZpbGVzL2h0ZG9jcy9hbmd1bGFyNC9hbmc0LXNlby9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCw4REFBd0Q7QUFPeEQsSUFBYSxjQUFjO0lBRXpCLHdCQUFZLElBQVUsRUFBRSxLQUFZO1FBRWxDLEtBQUssQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFJLE9BQU8sRUFBRSxlQUFlLEVBQUM7WUFDN0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBQztZQUNyRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLDZDQUE2QyxFQUFFO1NBQ2hGLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVILHFCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO0tBQ3JDLENBQUM7cUNBR2tCLHVCQUFJLEVBQVMsd0JBQUs7R0FGekIsY0FBYyxDQWlCMUI7QUFqQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWV0YSwgVGl0bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWJvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hYm91dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKG1ldGE6IE1ldGEsIHRpdGxlOiBUaXRsZSkge1xuXG4gICAgdGl0bGUuc2V0VGl0bGUoJ015IFNwaWZmeSBIb21lIFBhZ2UnKTtcblxuICAgIG1ldGEuYWRkVGFncyhbXG4gICAgICB7IG5hbWU6ICdhdXRob3InLCAgIGNvbnRlbnQ6ICdDb3Vyc2V0cm8uY29tJ30sXG4gICAgICB7IG5hbWU6ICdrZXl3b3JkcycsIGNvbnRlbnQ6ICdhbmd1bGFyIHNlbywgYW5ndWxhciA0IHVuaXZlcnNhbCwgZXRjJ30sXG4gICAgICB7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6ICdUaGlzIGlzIG15IEFuZ3VsYXIgU0VPLWJhc2VkIEFwcCwgZW5qb3kgaXQhJyB9XG4gICAgXSk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==