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
var http_1 = require("@angular/common/http");
var AppComponent = (function () {
    // 
    function AppComponent(titleService, metaService, http) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.http = http;
        this.title = 'app';
        console.log("coming here");
        // this.http.get("http://localhost/shoppe/api/v2/home-page-mobile?url_check="+true,{
        //    headers: new HttpHeaders({
        //      'Content-Type':'application/json',
        //      'Authorization': '1234567',
        //    })}
        //  ).subscribe(data => {
        //    console.log(data['meta']);
        //    let title = data['meta'];
        //    this.titleService.setTitle(title.title);    
        //    // this.commonService.fun_change_meta(data['meta']);
        //  });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, platform_browser_1.Meta, http_1.HttpClient])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9YQU1QUC94YW1wcGZpbGVzL2h0ZG9jcy9hbmd1bGFyNC9hbmc0LXNlby9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvYW5ndWxhcjQvYW5nNC1zZW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLDhEQUF3RTtBQUN4RSw2Q0FBK0Q7QUFPL0QsSUFBYSxZQUFZO0lBR3ZCLEdBQUc7SUFFSCxzQkFBb0IsWUFBa0IsRUFBVSxXQUFnQixFQUFTLElBQWU7UUFBcEUsaUJBQVksR0FBWixZQUFZLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQUFTLFNBQUksR0FBSixJQUFJLENBQVc7UUFKeEYsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUtiLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFJM0Isb0ZBQW9GO1FBQ3BGLGdDQUFnQztRQUNoQywwQ0FBMEM7UUFDMUMsbUNBQW1DO1FBQ25DLFNBQVM7UUFDVCx5QkFBeUI7UUFDekIsZ0NBQWdDO1FBQ2hDLCtCQUErQjtRQUMvQixrREFBa0Q7UUFHbEQsMERBQTBEO1FBRTFELE9BQU87SUFFUixDQUFDO0lBRUgsbUJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDbkMsQ0FBQztxQ0FNaUMsd0JBQUssRUFBc0IsdUJBQUksRUFBYyxpQkFBVTtHQUw3RSxZQUFZLENBMkJ4QjtBQTNCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSwgVGl0bGUsIE1ldGEgfSAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdhcHAnO1xuXG4gIC8vIFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGl0bGVTZXJ2aWNlOlRpdGxlLCBwcml2YXRlIG1ldGFTZXJ2aWNlOk1ldGEscHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpIHtcbiAgXHRjb25zb2xlLmxvZyhcImNvbWluZyBoZXJlXCIpO1xuICBcdFxuXG5cbiAgXHQvLyB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdC9zaG9wcGUvYXBpL3YyL2hvbWUtcGFnZS1tb2JpbGU/dXJsX2NoZWNrPVwiK3RydWUse1xuICAgLy8gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgIC8vICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxuICAgLy8gICAgICAnQXV0aG9yaXphdGlvbic6ICcxMjM0NTY3JyxcbiAgIC8vICAgIH0pfVxuICAgLy8gICkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgLy8gICAgY29uc29sZS5sb2coZGF0YVsnbWV0YSddKTtcbiAgIC8vICAgIGxldCB0aXRsZSA9IGRhdGFbJ21ldGEnXTtcbiAgIC8vICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHRpdGxlLnRpdGxlKTsgICAgXG5cbiAgICAgIFxuICAgLy8gICAgLy8gdGhpcy5jb21tb25TZXJ2aWNlLmZ1bl9jaGFuZ2VfbWV0YShkYXRhWydtZXRhJ10pO1xuICAgICAgXG4gICAvLyAgfSk7XG5cbiAgfVxuXG59XG4iXX0=