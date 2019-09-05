(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-landing></app-landing>\n<app-project></app-project>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"../../assets/img/carousel/car_1.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"...\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"...\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing/landing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"landing-page d-flex snap-sini\" id=\"about-comp\">\r\n\t<div class=\"container text-center my-auto cus-max-width\" id=\"about\">\r\n\t\t<img src=\"../../assets/img/carousel/mypic200slaced.jpg\" class=\"cus-gambar margin-bot-1 gambarkeluar\" id=\"gambarku\">\r\n\t\t<h1 class=\"h1 text-secondary margin-bot-1 font-weight-bold cus-shadow\">About Me</h1>\r\n\t\t<p class=\"h5 text-secondary margin-bot-2 font-italic cus-shadow\">Born in Jakarta, I always have been interested in computer related stuff, started with networking as I picked Networking program for my vocational high school.\r\n\t\tThen started my learning programming at college, with pascal and java for my first procedural and object-oriented programming respectively. Since then I focus more on my Java as I created most of my projects with Java.\r\n\t\tAside from Java, I also mingled with Angular, Bootstrap, and Laravel as my interest in web development grows, although Im not as good with it as my Java, I understand their structure and how they worked </p>\r\n\t</div>\r\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top jarak-before justify-content-between\" id=\"navbar_top\">\n        <a class=\"navbar-brand\" href=\"#\">My Portofolio</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n          <ul class=\"navbar-nav ml-auto smooth-scroll\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link active\" href=\"#about-comp\" >About <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" href=\"#project-comp\" >Projects</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Skills</a>\n            </li>\n\t\t\t<li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Contact</a>\n            </li>\n          </ul>\n        </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project/project.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/project.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-page border-top border-secondary pb-5\" id=\"project-comp\">\n\t<h1 class=\"h1 text-center pt-5 pb-3 cus-shadow\">My Project</h1>\n\t<div class=\"card-deck mr-2 ml-2\">\n\t  <div *ngFor=\"let project of projects\" class=\"card border-2 border-danger\">\n\t    <img class=\"card-img-top\" src=\"{{project.gambar}}\" alt=\"Card image cap\">\n\t    <div class=\"card-body\">\n\t      <h5 class=\"card-title text-center mb-3\">{{project.name}}</h5>\n\t      <p class=\"card-text mt-3\">{{project.deskripsi}}</p>\n\t\t  <a href=\"{{project.gitlink}}\">\n\t\t  <p class=\"text-center\"><img src=\"../../assets//img//project//github-logo_32.png\"></p></a>\n\t      <p class=\"card-text mt-4\"><small class=\"text-muted\">Skill yang digunakan : <br><code>{{project.skill}} </code></small></p>\n\t    </div>\n\t  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myportofolio';
        this.$lokasi = 0;
        this.$tigger_nav = 0;
    }
    AppComponent.prototype.dothis = function () {
        this.$lokasi = $(window).scrollTop();
        if (((this.$lokasi) >= 500) && (this.$tigger_nav) == 0) {
            $('#navbar_top').removeClass('jarak-before');
            $('#navbar_top').addClass('berubah');
            this.$tigger_nav = 1;
        }
        if (((this.$lokasi) < 500) && (this.$tigger_nav) == 1) {
            $('#navbar_top').removeClass('berubah');
            ;
            $('#navbar_top').addClass('jarak-before');
            this.$tigger_nav = 0;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("wheel")
    ], AppComponent.prototype, "dothis", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        })
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-page {\r\n  height: 100%;\r\n  background-image: url('nightsky.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.margin-bot-1{\r\n\tmargin-bottom: 1rem!important;\r\n}\r\n.margin-bot-2{\r\n\tmargin-bottom: 3rem!important;\r\n}\r\n.cus-position-text{\r\n\tmax-width:600px;\r\n}\r\n.cus-shadow{\r\n    text-shadow: #000 1px 1px 2px;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n.cus-gambar{\r\n    border-radius: 5.05rem!important;\r\n    border-top-left-radius: 5.05rem !important;\r\n    border-top-right-radius: 5.05rem !important;\r\n    border-bottom-right-radius: 5.05rem !important;\r\n    border-bottom-left-radius: 5.05rem !important;\r\n\t-webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 3s;\r\n}\r\np{\r\n\t-webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\r\n            animation: fadein 4s;\r\n}\r\n/*\r\n#about:hover #gambarku{\r\n\topacity:1;\r\n\ttransition: all 1s ease-in;\r\n}\r\n*/\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n/* Firefox < 16 */\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n/* Internet Explorer */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oscUNBQStEO0VBQy9ELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDBDQUEwQztJQUMxQywyQ0FBMkM7SUFDM0MsOENBQThDO0lBQzlDLDZDQUE2QztDQUNoRCw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFDakMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixpQkFBaUI7WUFDdkMsb0JBQW9CO0FBQ2hDO0FBQ0E7Q0FDQyw0QkFBNEIsRUFBRSxvQ0FBb0MsRUFDakMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixpQkFBaUI7WUFDdkMsb0JBQW9CO0FBQ2hDO0FBQ0E7Ozs7O0NBS0M7QUFDRDtJQUNJLE9BQU8sVUFBVSxFQUFFO0lBQ25CLE9BQU8sVUFBVSxFQUFFO0FBQ3ZCO0FBRUEsaUJBQWlCO0FBTWpCLG9DQUFvQztBQUNwQztJQUNJLE9BQU8sVUFBVSxFQUFFO0lBQ25CLE9BQU8sVUFBVSxFQUFFO0FBQ3ZCO0FBRUEsc0JBQXNCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZy1wYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9jYXJvdXNlbC9uaWdodHNreS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ubWFyZ2luLWJvdC0xe1xyXG5cdG1hcmdpbi1ib3R0b206IDFyZW0haW1wb3J0YW50O1xyXG59XHJcbi5tYXJnaW4tYm90LTJ7XHJcblx0bWFyZ2luLWJvdHRvbTogM3JlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1cy1wb3NpdGlvbi10ZXh0e1xyXG5cdG1heC13aWR0aDo2MDBweDtcclxufVxyXG4uY3VzLXNoYWRvd3tcclxuICAgIHRleHQtc2hhZG93OiAjMDAwIDFweCAxcHggMnB4O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuLmN1cy1nYW1iYXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1LjA1cmVtIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUuMDVyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1LjA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNS4wNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNS4wNXJlbSAhaW1wb3J0YW50O1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gM3M7IC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cclxuICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gM3M7IC8qIEZpcmVmb3ggPCAxNiAqL1xyXG4gICAgICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiAzczsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cclxuICAgICAgICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gM3M7IC8qIE9wZXJhIDwgMTIuMSAqL1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiAzcztcclxufVxyXG5we1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gNHM7IC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cclxuICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gNHM7IC8qIEZpcmVmb3ggPCAxNiAqL1xyXG4gICAgICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiA0czsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cclxuICAgICAgICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gNHM7IC8qIE9wZXJhIDwgMTIuMSAqL1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiA0cztcclxufVxyXG4vKlxyXG4jYWJvdXQ6aG92ZXIgI2dhbWJhcmt1e1xyXG5cdG9wYWNpdHk6MTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbjtcclxufVxyXG4qL1xyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogRmlyZWZveCA8IDE2ICovXHJcbkAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cclxuQC1tcy1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        })
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 768px) {\r\n  .jarak-before {\r\n    top: 10px;\r\n\tright: 20px;\r\n\tleft: 20px;\r\n\tpadding-top:40px;\r\n\tpadding-left:70px;\r\n\tpadding-right:70px;\r\n\tpadding-bottom:40px;\r\n\tbackground-color: transparent;\r\n\ttransition: ease-in 1s;\r\n  }\r\n}\r\n@media only screen and (min-width: 100px) and (max-width: 767.98px) {\r\n  .jarak-before {\r\n    top: 10px;\r\n\tright: 10px;\r\n\tleft: 10px;\r\n\tpadding-top:10px;\r\n\tpadding-left:10px;\r\n\tpadding-right:10px;\r\n\tpadding-bottom:10px;\r\n\tbackground-color: transparent;\r\n\ttransition: all ease-in 1s!important;\r\n\t-moz-transition: all ease-in 1s;\r\n\t-o-transition: all ease-in 1s;\r\n\t-webkit-transition: all ease-in 1s;\r\n  }\r\n}\r\n.fixed-top.scrolled{\r\n\tposition: -webkit-sticky;\r\n\tposition: sticky;\r\n    top: 0!important;\r\n    right: 0!important;\r\n    left: 0!important;\r\n    z-index: 1030;\r\n}\r\n.custom-turun{\r\n    background: rgb(0, 0, 0);\r\n}\r\n.berubah{\r\n\ttop:0px;\r\n\tright:0px;\r\n\tleft:0px;\r\n\tpadding-left: 40px;\r\n\tpadding-right: 40px;\r\n\tpadding-top:15px;\r\n\tpadding-bottom:15px;\r\n\tbackground-color:#343a40;\r\n\ttransition:ease-out 1s;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxTQUFTO0NBQ1osV0FBVztDQUNYLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsNkJBQTZCO0NBQzdCLHNCQUFzQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFNBQVM7Q0FDWixXQUFXO0NBQ1gsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQiw2QkFBNkI7Q0FDN0Isb0NBQW9DO0NBQ3BDLCtCQUErQjtDQUMvQiw2QkFBNkI7Q0FDN0Isa0NBQWtDO0VBQ2pDO0FBQ0Y7QUFDQTtDQUNDLHdCQUFnQjtDQUFoQixnQkFBZ0I7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtDQUNDLE9BQU87Q0FDUCxTQUFTO0NBQ1QsUUFBUTtDQUNSLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQix3QkFBd0I7Q0FDeEIsc0JBQXNCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5qYXJhay1iZWZvcmUge1xyXG4gICAgdG9wOiAxMHB4O1xyXG5cdHJpZ2h0OiAyMHB4O1xyXG5cdGxlZnQ6IDIwcHg7XHJcblx0cGFkZGluZy10b3A6NDBweDtcclxuXHRwYWRkaW5nLWxlZnQ6NzBweDtcclxuXHRwYWRkaW5nLXJpZ2h0OjcwcHg7XHJcblx0cGFkZGluZy1ib3R0b206NDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHR0cmFuc2l0aW9uOiBlYXNlLWluIDFzO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAuamFyYWstYmVmb3JlIHtcclxuICAgIHRvcDogMTBweDtcclxuXHRyaWdodDogMTBweDtcclxuXHRsZWZ0OiAxMHB4O1xyXG5cdHBhZGRpbmctdG9wOjEwcHg7XHJcblx0cGFkZGluZy1sZWZ0OjEwcHg7XHJcblx0cGFkZGluZy1yaWdodDoxMHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOjEwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0dHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMXMhaW1wb3J0YW50O1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMXM7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gMXM7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAxcztcclxuICB9XHJcbn1cclxuLmZpeGVkLXRvcC5zY3JvbGxlZHtcclxuXHRwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAzMDtcclxufVxyXG4uY3VzdG9tLXR1cnVue1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xyXG59XHJcbi5iZXJ1YmFoe1xyXG5cdHRvcDowcHg7XHJcblx0cmlnaHQ6MHB4O1xyXG5cdGxlZnQ6MHB4O1xyXG5cdHBhZGRpbmctbGVmdDogNDBweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5cdHBhZGRpbmctdG9wOjE1cHg7XHJcblx0cGFkZGluZy1ib3R0b206MTVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMzNDNhNDA7XHJcblx0dHJhbnNpdGlvbjplYXNlLW91dCAxcztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.title = 'angular 4 with jquery';
    }
    NavbarComponent.prototype.changenavbar = function () {
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/project-list.ts":
/*!*********************************!*\
  !*** ./src/app/project-list.ts ***!
  \*********************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
var PROJECTS = [
    { id: 1, name: 'Program Bengkel Kendali Motor', deskripsi: 'Program dibuat untuk bengkel yang berfungsi untuk penyetokan barang, transaksi, dan pelaporan(keuntungan dan ketersediaan).', gambar: '../assets/img/project/prog_bengkel.jpg', skill: ['Java', 'Netbeans', 'Jasper Report', 'MariaDB'], gitlink: 'https://github.com/riefkybayu/kendali_motor_bengkel_system' },
    { id: 2, name: 'Aplikasi Penerimaan Siswa Baru SMP 1 PGRI Ciputat', deskripsi: 'Aplikasi berfungsi untuk mengatur penerimaan siswa baru, beserta pendataan pembayaran dan pemberian aksesoris sekolah', gambar: '../assets/img/project/prog_smp.jpg', skill: ['Java', 'Netbeans', 'Jasper Report', 'MariaDB'], gitlink: 'https://github.com/riefkybayu/PenerimaanSiswa' },
    { id: 3, name: 'My Portofolio', deskripsi: 'SinglePage Application yang dibuat untuk melampirkan data pribadi khususnya kemampuan dan projek yang dibuat.', gambar: '../assets/img/project/prog_porto.jpg', skill: ['HTML', 'CSS', 'Javascript', 'Jquery', 'AngularJS', 'Bootstrap'], gitlink: 'https://github.com/riefkybayu/riefkybayu.github.io' },
];


/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-page {\r\n  background-image: url('techback.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.cus-shadow{\r\n    text-shadow: rgb(255, 255, 255) 1px 1px 2px;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBa0U7RUFDbEUsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7QUFDQTtJQUNJLDJDQUEyQztJQUMzQyxtQ0FBbUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5nLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy8vaW1nLy9jYXJvdXNlbC8vdGVjaGJhY2suanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmN1cy1zaGFkb3d7XHJcbiAgICB0ZXh0LXNoYWRvdzogcmdiKDI1NSwgMjU1LCAyNTUpIDFweCAxcHggMnB4O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_project_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/project-list */ "./src/app/project-list.ts");



var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
        this.projects = _app_project_list__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"];
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        })
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\programbayu\xampp56\htdocs\angular\myportofolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map