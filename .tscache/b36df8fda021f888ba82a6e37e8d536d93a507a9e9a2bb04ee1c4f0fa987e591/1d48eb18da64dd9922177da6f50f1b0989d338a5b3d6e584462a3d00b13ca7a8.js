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
var HomeComponent = (function () {
    function HomeComponent(titleService, metaService, http) {
        var _this = this;
        this.titleService = titleService;
        this.metaService = metaService;
        this.http = http;
        console.log("coming here");
        this.http.get("http://localhost/shoppe/api/v2/home-page-mobile?url_check=" + true, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': '1234567',
            })
        }).subscribe(function (data) {
            console.log(data['meta']);
            var title = data['meta'];
            _this.titleService.setTitle(title.title);
            // this.commonService.fun_change_meta(data['meta']);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, platform_browser_1.Meta, http_1.HttpClient])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL0FwcGxpY2F0aW9ucy9YQU1QUC94YW1wcGZpbGVzL2h0ZG9jcy9hbmd1bGFyNC9hbmc0LXNlby9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvYW5ndWxhcjQvYW5nNC1zZW8vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELDhEQUF3RTtBQUN4RSw2Q0FBK0Q7QUFPL0QsSUFBYSxhQUFhO0lBRXhCLHVCQUFvQixZQUFrQixFQUFVLFdBQWdCLEVBQVMsSUFBZTtRQUF4RixpQkFrQkM7UUFsQm1CLGlCQUFZLEdBQVosWUFBWSxDQUFNO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFXO1FBQ3ZGLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNERBQTRELEdBQUMsSUFBSSxFQUFDO1lBQzdFLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBQyxrQkFBa0I7Z0JBQ2pDLGVBQWUsRUFBRSxTQUFTO2FBQzNCLENBQUM7U0FBQyxDQUNKLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUd4QyxvREFBb0Q7UUFFdEQsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFSCxvQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUNwQyxDQUFDO3FDQUdpQyx3QkFBSyxFQUFzQix1QkFBSSxFQUFjLGlCQUFVO0dBRjdFLGFBQWEsQ0F5QnpCO0FBekJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUsIFRpdGxlLCBNZXRhIH0gIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpdGxlU2VydmljZTpUaXRsZSwgcHJpdmF0ZSBtZXRhU2VydmljZTpNZXRhLHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7XG4gIFx0Y29uc29sZS5sb2coXCJjb21pbmcgaGVyZVwiKTtcblxuICBcdHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0L3Nob3BwZS9hcGkvdjIvaG9tZS1wYWdlLW1vYmlsZT91cmxfY2hlY2s9XCIrdHJ1ZSx7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJzEyMzQ1NjcnLFxuICAgICAgfSl9XG4gICAgKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhWydtZXRhJ10pO1xuICAgICAgbGV0IHRpdGxlID0gZGF0YVsnbWV0YSddO1xuICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodGl0bGUudGl0bGUpOyAgICBcblxuICAgICAgXG4gICAgICAvLyB0aGlzLmNvbW1vblNlcnZpY2UuZnVuX2NoYW5nZV9tZXRhKGRhdGFbJ21ldGEnXSk7XG4gICAgICBcbiAgICB9KTtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19