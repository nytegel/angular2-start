System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = "Nigel";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Hello World {{name}} </h1>\n        This is the start of an <span [class.red]=\"changeColor.value === 'yes'\" > awesome project </span>\n        <br>\n        <input type=\"text\" #changeColor (keyup)=0 />\n    ",
                        styleUrls: ['../src/css/styles.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUcsT0FBTyxDQUFDO2dCQUNuQixDQUFDO2dCQWJEO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxtT0FLVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztxQkFDdkMsQ0FBQzs7Z0NBQUE7Z0JBSUYsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMT5IZWxsbyBXb3JsZCB7e25hbWV9fSA8L2gxPlxyXG4gICAgICAgIFRoaXMgaXMgdGhlIHN0YXJ0IG9mIGFuIDxzcGFuIFtjbGFzcy5yZWRdPVwiY2hhbmdlQ29sb3IudmFsdWUgPT09ICd5ZXMnXCIgPiBhd2Vzb21lIHByb2plY3QgPC9zcGFuPlxyXG4gICAgICAgIDxicj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjY2hhbmdlQ29sb3IgKGtleXVwKT0wIC8+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4uL3NyYy9jc3Mvc3R5bGVzLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICB7XHJcbiAgICBuYW1lID0gXCJOaWdlbFwiO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
