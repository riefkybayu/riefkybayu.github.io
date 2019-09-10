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

module.exports = "<app-navbar></app-navbar>\n<app-landing></app-landing>\n<app-project></app-project>\n<app-skill></app-skill>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"../../assets/img/carousel/car_1.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"...\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"...\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>contact works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing/landing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"landing-page d-flex snap-sini border-bottom border-secondary\" id=\"about-comp\">\r\n\t<div class=\"container text-center my-auto cus-max-width\" id=\"about\">\r\n\t\t<img src=\"../../assets/img/carousel/mypic200slaced-edited.png\" class=\"cus-gambar margin-bot-1 gambarkeluar\" id=\"gambarku\">\r\n\t\t<h1 class=\"h1 text-secondary margin-bot-1 font-weight-bold cus-shadow\">About Me</h1>\r\n\t\t<p class=\"h5 text-secondary margin-bot-2 font-italic cus-shadow\">I have always been interested in computer related stuff, started with networking at high school then focusing more on programming at college.\r\n\t\tMy favorite programming language is java as it was my first OOP.</p>\r\n\t</div>\r\n</header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top jarak-before justify-content-between\" id=\"navbar_top\">\n        <a class=\"navbar-brand\" href=\"#\">My Portofolio</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n          <ul class=\"navbar-nav ml-auto smooth-scroll\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link active\" href=\"#about-comp\" >About <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" href=\"#project-comp\" >Projects</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" href=\"#skill-comp\">Skills</a>\n            </li>\n\t\t\t<li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Contact</a>\n            </li>\n          </ul>\n        </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project/project.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/project.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-page border-top border-bottom border-secondary pt-5 pb-5 \" id=\"project-comp\">\n\t<h1 class=\"h1 text-center pt-5 pb-3 cus-shadow\">My Project</h1>\n\t<div class=\"card-deck mr-4 ml-4 box-wrap \">\n\t  <div *ngFor=\"let project of projects\" class=\"card border-2 border-primary box\" id=\"kembali\">\n\t    <img class=\"card-img-top\" src=\"{{project.gambar}}\" alt=\"Card image cap\">\n\t    <div class=\"card-body\">\n\t      <h5 class=\"card-title text-center mb-3\">{{project.name}}</h5>\n\t      <p class=\"card-text mt-3\">{{project.deskripsi}}</p>\n\t\t  <a href=\"{{project.gitlink}}\">\n\t\t  <p class=\"text-center mt-4\"><img src=\"../../assets//img//project//github-logo_32.png\"></p></a>\n\t      <p class=\"card-text mt-2\"><small class=\"text-muted\">Skill yang digunakan : <br><code>{{project.skill}} </code></small></p>\n\t    </div>\n\t  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skill/skill.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skill/skill.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"landing-page pb-5 border-top border-bottom border-secondary text-center\" id=\"skill-comp\">\r\n\t<h1 class=\"h1 pt-5 pb-3 cus-shadow\"> My Skills</h1>\r\n\t<div class =\"sembunyikan-kecil\">\r\n\t\t<app-skillwide></app-skillwide>\r\n\t</div>\r\n\t<div class =\"sembunyikan-besar\">\r\n\t\t<app-skillsmall></app-skillsmall>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skill/skillsmall/computers/computers.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skill/skillsmall/computers/computers.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"accordion\" class=\"mr-4 ml-4 mt-5\" >\n    <div class=\"card\" *ngFor=\"let computer of computers\">\n      <div class=\"card-header warna-grey\" id=\"heading{{computer.id}}\">\n        <h5 class=\"mb-0\">\n          <button class=\"btn btn-link warna-tulisan\" data-toggle=\"collapse\" [attr.data-target]=\"'#tag'+computer.id\" aria-expanded=\"true\" [attr.aria-controls]=\"'collapse'+computer.id\">\n            {{computer.name}}\n          </button>\n        </h5>\n      </div>\n  \n      <div id=\"tag{{computer.id}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n        <div class=\"card-body\">\n            <a id=\"list-item-{{computer.name}}\"></a>\n            <h3 class=\"h3 text-left\"><span class=\"text-muted\">#</span>{{computer.name}}</h3>\n            <img src=\"{{computer.gambar}}\">\n            <div class=\"progress mr-1 ml-1\">\n              <div *ngIf=\"computer.tingkat_str=='Beginner'; else inter\" class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{width:computer.tingkat_int}\" attr.aria-valuenow=\"{{computer.tingkat_int}}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{computer.tingkat_str}}</div>\n              <ng-template #inter>\n                  <div class=\"progress-bar bg-info\" role=\"progressbar\" [ngStyle]=\"{width:computer.tingkat_int}\" attr.aria-valuenow=\"{{computer.tingkat_int}}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{computer.tingkat_str}}</div>\n              </ng-template>\n            </div>\n            <p class=\"text-justify lead ml-1 mr-1 mb-2 mt-2\">{{computer.deskripsi}}</p>\n        </div>\n      </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skill/skillsmall/programs/programs.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skill/skillsmall/programs/programs.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"accordion\" class=\"mr-4 ml-4 mt-5\" >\n    <div class=\"card\" *ngFor=\"let program of programs\">\n      <div class=\"card-header warna-grey\" id=\"heading{{program.id}}\">\n        <h5 class=\"mb-0\">\n          <button class=\"btn btn-link warna-tulisan\" data-toggle=\"collapse\" [attr.data-target]=\"'#tag'+program.id\" aria-expanded=\"true\" [attr.aria-controls]=\"'collapse'+program.id\">\n            {{program.name}}\n          </button>\n        </h5>\n      </div>\n  \n      <div id=\"tag{{program.id}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n        <div class=\"card-body\">\n            <a id=\"list-item-{{program.name}}\"></a>\n            <h3 class=\"h3 text-left\"><span class=\"text-muted\">#</span>{{program.name}}</h3>\n            <img src=\"{{program.gambar}}\">\n            <div class=\"progress mr-1 ml-1\">\n              <div *ngIf=\"program.tingkat_str=='Beginner'; else inter\" class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{width:program.tingkat_int}\" attr.aria-valuenow=\"{{program.tingkat_int}}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{program.tingkat_str}}</div>\n              <ng-template #inter>\n                  <div class=\"progress-bar bg-info\" role=\"progressbar\" [ngStyle]=\"{width:program.tingkat_int}\" attr.aria-valuenow=\"{{program.tingkat_int}}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{program.tingkat_str}}</div>\n              </ng-template>\n            </div>\n            <p class=\"text-justify lead ml-1 mr-1 mb-2 mt-2\">{{program.deskripsi}}</p>\n        </div>\n      </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skill/skillsmall/skillsmall.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skill/skillsmall/skillsmall.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group mr-2 ml-2\" role=\"group\" aria-label=\"Basic example\">\n    <a type=\"button\" class=\"btn btn-secondary btn-outline-dark\" (click)=\"toogletab(1)\">Web Development</a>\n    <a type=\"button\" class=\"btn btn-secondary btn-outline-dark\" (click)=\"toogletab(2)\">Program Development</a>\n    <a type=\"button\" class=\"btn btn-secondary btn-outline-dark\" (click)=\"toogletab(3)\">Computer Related</a>\n</div>\n<div [ngSwitch]=\"trigger\">\n    <div *ngSwitchCase=\"1\"><app-webs></app-webs></div>\n    <div *ngSwitchCase=\"2\"><app-programs></app-programs></div>\n    <div *ngSwitchCase=\"3\"><app-computers></app-computers></div>\n    <div *ngSwitchDefault><app-webs></app-webs></div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skill/skillsmall/webs/webs.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skill/skillsmall/webs/webs.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"accordion\" class=\"mr-4 ml-4 mt-5\" >\n    <div class=\"card\" *ngFor=\"let web of webs\">\n      <div class=\"card-header warna-grey\" id=\"heading{{web.id}}\">\n        <h5 class=\"mb-0\">\n          <button class=\"btn btn-link warna-tulisan\" data-toggle=\"collapse\" [attr.data-target]=\"'#tag'+web.id\" aria-expanded=\"true\" [attr.aria-controls]=\"'collapse'+web.id\">\n            {{web.name}}\n          </button>\n        </h5>\n      </div>\n  \n      <div id=\"tag{{web.id}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n        <div class=\"card-body\">\n            <a id=\"list-item-{{web.name}}\"></a>\n            <h3 class=\"h3 text-left\"><span class=\"text-muted\">#</span>{{web.name}}</h3>\n            <img src=\"{{web.gambar}}\">\n            <div class=\"progress mr-1 ml-1\">\n              <div *ngIf=\"web.tingkat_str=='Beginner'; else inter\" class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{width:web.tingkat_int}\" attr.aria-valuenow=\"{{web.tingkat_int}}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{web.tingkat_str}}</div>\n              <ng-template #inter>\n                  <div class=\"progress-bar bg-info\" role=\"progressbar\" [ngStyle]=\"{width:web.tingkat_int}\" attr.aria-valuenow=\"{{web.tingkat_int}}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{web.tingkat_str}}</div>\n              </ng-template>\n            </div>\n            <p class=\"text-justify lead ml-1 mr-1 mb-2 mt-2\">{{web.deskripsi}}</p>\n        </div>\n      </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skill/skillwide/skillwide.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skill/skillwide/skillwide.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n\t\t  <a type=\"button\" class=\"btn btn-secondary btn-outline-dark\" href=\"#web-dev\">Web Development</a>\n\t\t  <a type=\"button\" class=\"btn btn-secondary btn-outline-dark\" href=\"#program-dev\">Program Development</a>\n\t\t  <a type=\"button\" class=\"btn btn-secondary btn-outline-dark\" href=\"#computer-stuff\">Computer Related</a>\n\t</div>\n\t<a id=\"web-dev\" class=\"anchor\"></a>\n    <h3 class=\"h3 text-left pt-5 ml-5 cus-shadow\"><span class=\"text-muted\">#</span>Web Development</h3>\n\t<div class=\"row  ml-5 mr-5 pt-3 pb-3 mb-4 mt-4 cus-text-background border border-secondary\">\n\t  <div class=\"col-2\">\n\t    <div *ngFor=\"let web of webs\" id=\"list-example\" class=\"list-group\">\n\t\t\t  <a class=\"list-group-item list-group-item-action\" href=\"#list-item-{{web.name}}\" (click)=\"onClick1()\" id=\"button\">{{web.name}}</a>\n\t\t</div>\n\t  </div>\n\t  <div class=\"col-10 cus-text-background-card border border-secondary scroll-pls\">\n\t\t<div *ngFor=\"let web of webs\" data-target=\"#list-example\" >\n\t\t\t  <a id=\"list-item-{{web.name}}\"></a>\n\t\t\t  <h3 class=\"h3 text-left\"><span class=\"text-muted\">#</span>{{web.name}}</h3>\n\t\t\t  <img src=\"{{web.gambar}}\">\n\t\t\t  <div class=\"progress mr-5 ml-5\">\n\t\t\t\t<div *ngIf=\"web.tingkat_str=='Beginner'; else inter\" class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{width:web.tingkat_int}\" attr.aria-valuenow=\"{{web.tingkat_int}}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{web.tingkat_str}}</div>\n\t\t\t\t<ng-template #inter>\n\t\t\t\t    <div class=\"progress-bar bg-info\" role=\"progressbar\" [ngStyle]=\"{width:web.tingkat_int}\" attr.aria-valuenow=\"{{web.tingkat_int}}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{web.tingkat_str}}</div>\n\t\t\t\t</ng-template>\n\t\t\t  </div>\n\t\t\t  \t<p class=\"text-justify lead ml-5 mr-5 mb-5 mt-2\">{{web.deskripsi}}</p>\n\t\t</div>\n\t  </div>\n\t</div>\n\t<a id=\"program-dev\" class=\"anchor\"></a>\n    <h3 class=\"h3 text-left pt-5 ml-5 cus-shadow\"><span class=\"text-muted\">#</span>Program Development</h3>\n\t<div class=\"row  ml-5 mr-5 pt-3 pb-3 mb-4 mt-4 cus-text-background border border-secondary\">\n\t  <div class=\"col-2\">\n\t    <div *ngFor=\"let program of programs\" id=\"list-example\" class=\"list-group\">\n\t\t\t  <a class=\"list-group-item list-group-item-action\" href=\"#list-item-{{program.name}}\" (click)=\"onClick2()\" id=\"button\">{{program.name}}</a>\n\t\t</div>\n\t  </div>\n\t  <div class=\"col-10 cus-text-background-card border border-secondary scroll-pls\">\n\t\t<div *ngFor=\"let program of programs\" data-target=\"#list-example\">\n\t\t\t  <a id=\"list-item-{{program.name}}\"><h3 class=\"h3 text-left\"><span class=\"text-muted\">#</span>{{program.name}}</h3></a>\n\t\t\t  <img src=\"{{program.gambar}}\">\n\t\t\t  <div class=\"progress mr-5 ml-5\">\n\t\t\t\t<div *ngIf=\"program.tingkat_str=='Beginner'; else inter\" class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{width:program.tingkat_int}\" attr.aria-valuenow=\"{{program.tingkat_int}}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{program.tingkat_str}}</div>\n\t\t\t\t<ng-template #inter>\n\t\t\t\t    <div class=\"progress-bar bg-info\" role=\"progressbar\" [ngStyle]=\"{width:program.tingkat_int}\" attr.aria-valuenow=\"{{program.tingkat_int}}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{program.tingkat_str}}</div>\n\t\t\t\t</ng-template>\n\t\t\t  </div>\n\t\t\t  \t<p class=\"text-justify lead ml-5 mr-5 mb-5 mt-2\">{{program.deskripsi}}</p>\n\t\t</div>\n\t  </div>\n\t</div>\n\t<a id=\"computer-stuff\" class=\"anchor\"></a>\n    <h3 class=\"h3 text-left pt-5 ml-5 cus-shadow\"><span class=\"text-muted\">#</span>Computer-Related Skills</h3>\n\t<div class=\"row  ml-5 mr-5 pt-3 pb-3 mb-4 mt-4 cus-text-background border border-secondary\">\n\t  <div class=\"col-2\">\n\t    <div *ngFor=\"let computer of computers\" id=\"list-example\" class=\"list-group\">\n\t\t\t  <a class=\"list-group-item list-group-item-action\" href=\"#list-item-{{computer.name}}\" (click)=\"onClick3()\" id=\"button\">{{computer.name}}</a>\n\t\t</div>\n\t  </div>\n\t  <div class=\"col-10 cus-text-background-card border border-secondary scroll-pls\">\n\t\t<div *ngFor=\"let computer of computers\" data-target=\"#list-example\">\n\t\t\t  <a id=\"list-item-{{computer.name}}\"><h3 class=\"h3 text-left\"><span class=\"text-muted\">#</span>{{computer.name}}</h3></a>\n\t\t\t  <img src=\"{{computer.gambar}}\">\n\t\t\t  <div class=\"progress mr-5 ml-5\">\n\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{width:computer.tingkat_int}\" attr.aria-valuenow=\"{{computer.tingkat_int}}\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{computer.tingkat_str}}</div>\n\t\t\t  </div>\n\t\t\t  \t<p class=\"text-justify lead ml-5 mr-5 mb-5 mt-2\">{{computer.deskripsi}}</p>\n\t\t</div>\n\t  </div>\n\t</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'myportofolio';
        this.$lokasi = 0;
        this.$tigger_nav = 0;
    }
    dothis() {
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skill/skill.component */ "./src/app/skill/skill.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _skill_skillwide_skillwide_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./skill/skillwide/skillwide.component */ "./src/app/skill/skillwide/skillwide.component.ts");
/* harmony import */ var _skill_skillsmall_skillsmall_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./skill/skillsmall/skillsmall.component */ "./src/app/skill/skillsmall/skillsmall.component.ts");
/* harmony import */ var _skill_skillsmall_webs_webs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skill/skillsmall/webs/webs.component */ "./src/app/skill/skillsmall/webs/webs.component.ts");
/* harmony import */ var _skill_skillsmall_programs_programs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./skill/skillsmall/programs/programs.component */ "./src/app/skill/skillsmall/programs/programs.component.ts");
/* harmony import */ var _skill_skillsmall_computers_computers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./skill/skillsmall/computers/computers.component */ "./src/app/skill/skillsmall/computers/computers.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
            _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
            _project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"],
            _skill_skill_component__WEBPACK_IMPORTED_MODULE_9__["SkillComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
            _skill_skillwide_skillwide_component__WEBPACK_IMPORTED_MODULE_11__["SkillwideComponent"],
            _skill_skillsmall_skillsmall_component__WEBPACK_IMPORTED_MODULE_12__["SkillsmallComponent"],
            _skill_skillsmall_webs_webs_component__WEBPACK_IMPORTED_MODULE_13__["WebsComponent"],
            _skill_skillsmall_programs_programs_component__WEBPACK_IMPORTED_MODULE_14__["ProgramsComponent"],
            _skill_skillsmall_computers_computers_component__WEBPACK_IMPORTED_MODULE_15__["ComputersComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-page {\r\n  height: 100%;\r\n  background-image: url('nightsky.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.margin-bot-1{\r\n\tmargin-bottom: 1rem!important;\r\n}\r\n.margin-bot-2{\r\n\tmargin-bottom: 3rem!important;\r\n}\r\n.cus-position-text{\r\n\tmax-width:600px;\r\n}\r\n.cus-shadow{\r\n    text-shadow: #000 1px 1px 2px;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n.cus-gambar{\r\n    border-radius: 5.05rem!important;\r\n    border-top-left-radius: 5.05rem !important;\r\n    border-top-right-radius: 5.05rem !important;\r\n    border-bottom-right-radius: 5.05rem !important;\r\n    border-bottom-left-radius: 5.05rem !important;\r\n\topacity: 0.2;\r\n\ttransition: all 1s ease-out\r\n\t\r\n}\r\np, h1{\r\n\topacity: 0.2;\r\n\ttransition: all 2s ease-out;\r\n}\r\n#about-comp:hover #gambarku{\r\n\topacity:1;\r\n\ttransition: all 1s ease-in;\r\n}\r\n#about-comp:hover h1{\r\n\topacity:1;\r\n\ttransition: all 1.5s ease-in;\r\n}\r\n#about-comp:hover p{\r\n\topacity:1;\r\n\ttransition: all 2s ease-in;\r\n}\r\n/*\r\n#about:hover #gambarku{\r\n\topacity:1;\r\n\ttransition: all 1s ease-in;\r\n}\r\n*/\r\n/*\r\n@keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n@-moz-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n@-webkit-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}/\r\n@-ms-keyframes fadein {\r\n    from { opacity: 0; }\r\n    to   { opacity: 1; }\r\n}\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oscUNBQStEO0VBQy9ELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDBDQUEwQztJQUMxQywyQ0FBMkM7SUFDM0MsOENBQThDO0lBQzlDLDZDQUE2QztDQUNoRCxZQUFZO0NBQ1o7O0FBRUQ7QUFDQTtDQUNDLFlBQVk7Q0FDWiwyQkFBMkI7QUFDNUI7QUFFQTtDQUNDLFNBQVM7Q0FDVCwwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLFNBQVM7Q0FDVCw0QkFBNEI7QUFDN0I7QUFDQTtDQUNDLFNBQVM7Q0FDVCwwQkFBMEI7QUFDM0I7QUFFQTs7Ozs7Q0FLQztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCQyIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmctcGFnZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvY2Fyb3VzZWwvbmlnaHRza3kuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLm1hcmdpbi1ib3QtMXtcclxuXHRtYXJnaW4tYm90dG9tOiAxcmVtIWltcG9ydGFudDtcclxufVxyXG4ubWFyZ2luLWJvdC0ye1xyXG5cdG1hcmdpbi1ib3R0b206IDNyZW0haW1wb3J0YW50O1xyXG59XHJcbi5jdXMtcG9zaXRpb24tdGV4dHtcclxuXHRtYXgtd2lkdGg6NjAwcHg7XHJcbn1cclxuLmN1cy1zaGFkb3d7XHJcbiAgICB0ZXh0LXNoYWRvdzogIzAwMCAxcHggMXB4IDJweDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcbi5jdXMtZ2FtYmFye1xyXG4gICAgYm9yZGVyLXJhZGl1czogNS4wNXJlbSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1LjA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNS4wNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUuMDVyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUuMDVyZW0gIWltcG9ydGFudDtcclxuXHRvcGFjaXR5OiAwLjI7XHJcblx0dHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0XHJcblx0XHJcbn1cclxucCwgaDF7XHJcblx0b3BhY2l0eTogMC4yO1xyXG5cdHRyYW5zaXRpb246IGFsbCAycyBlYXNlLW91dDtcclxufSBcclxuXHJcbiNhYm91dC1jb21wOmhvdmVyICNnYW1iYXJrdXtcclxuXHRvcGFjaXR5OjE7XHJcblx0dHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW47XHJcbn1cclxuI2Fib3V0LWNvbXA6aG92ZXIgaDF7XHJcblx0b3BhY2l0eToxO1xyXG5cdHRyYW5zaXRpb246IGFsbCAxLjVzIGVhc2UtaW47XHJcbn1cclxuI2Fib3V0LWNvbXA6aG92ZXIgcHtcclxuXHRvcGFjaXR5OjE7XHJcblx0dHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW47XHJcbn1cclxuXHJcbi8qXHJcbiNhYm91dDpob3ZlciAjZ2FtYmFya3V7XHJcblx0b3BhY2l0eToxO1xyXG5cdHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluO1xyXG59XHJcbiovXHJcblxyXG5cclxuLypcclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxyXG59L1xyXG5ALW1zLWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuKi8iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html"),
        styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
    })
], LandingComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.title = 'angular 4 with jquery';
    }
    changenavbar() {
    }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    })
], NavbarComponent);



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
const PROJECTS = [
    { id: 1, name: 'Program Bengkel Kendali Motor', deskripsi: 'Program dibuat untuk bengkel yang berfungsi untuk penyetokan barang, transaksi, dan pelaporan(keuntungan dan ketersediaan).', gambar: '../assets/img/project/prog_bengkel.jpg', skill: ['Java', 'Netbeans', 'Jasper Report', 'MariaDB'], gitlink: 'https://github.com/riefkybayu/kendali_motor_bengkel_system' },
    { id: 2, name: 'Aplikasi Penerimaan Siswa Baru SMP 1 PGRI Ciputat', deskripsi: 'Aplikasi berfungsi untuk mengatur penerimaan siswa baru, beserta pendataan pembayaran dan pemberian aksesoris sekolah', gambar: '../assets/img/project/prog_smp.jpg', skill: ['Java', 'Netbeans', 'Jasper Report', 'MariaDB'], gitlink: 'https://github.com/riefkybayu/PenerimaanSiswa' },
    { id: 3, name: 'My Portofolio', deskripsi: 'SinglePage Application yang dibuat untuk melampirkan data projek, skill, dan kontak.', gambar: '../assets/img/project/prog_porto.jpg', skill: ['HTML', 'CSS', 'Javascript', 'Jquery', 'AngularJS', 'Bootstrap'], gitlink: 'https://github.com/riefkybayu/riefkybayu.github.io' },
];


/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-page {\r\n  background-image: url('techback.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.cus-shadow{\r\n    text-shadow: rgb(255, 255, 255) 1px 1px 2px;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n/*.ilang{\r\n\topacity:0;\r\n\ttransition:all 1s ease-out;\r\n}\r\n#project-comp:hover #kembali{\r\n\topacity:1;\r\n\ttransition: all 1s ease-in;\r\n}\r\n*/\r\n.box-wrap{\r\n\topacity:1;\r\n}\r\n.box{\r\n  box-shadow:0 2px 3px 0px rgba(0,0,0,0.25);\r\n  transition:1s all; \r\n  opacity:.5;\r\n  -webkit-filter:blur(3px);\r\n          filter:blur(3px);\r\n}\r\n.box-wrap:hover .box{\r\n  -webkit-filter:blur(3px);\r\n          filter:blur(3px);\r\n  opacity:.5;\r\n  transform: scale(.98);\r\n  box-shadow:none;\r\n}\r\n.box-wrap:hover .box:hover{\r\n  transform:scale(1);\r\n  -webkit-filter:blur(0px);\r\n          filter:blur(0px);\r\n  opacity:1;\r\n  box-shadow:0 8px 20px 0px rgba(0,0,0,0.125);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBa0U7RUFDbEUsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7QUFDQTtJQUNJLDJDQUEyQztJQUMzQyxtQ0FBbUM7QUFDdkM7QUFDQTs7Ozs7Ozs7Q0FRQztBQUNEO0NBQ0MsU0FBUztBQUNWO0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVix3QkFBZ0I7VUFBaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx3QkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULDJDQUEyQztBQUM3QyIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmctcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzLy9pbWcvL2Nhcm91c2VsLy90ZWNoYmFjay5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY3VzLXNoYWRvd3tcclxuICAgIHRleHQtc2hhZG93OiByZ2IoMjU1LCAyNTUsIDI1NSkgMXB4IDFweCAycHg7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG4vKi5pbGFuZ3tcclxuXHRvcGFjaXR5OjA7XHJcblx0dHJhbnNpdGlvbjphbGwgMXMgZWFzZS1vdXQ7XHJcbn1cclxuI3Byb2plY3QtY29tcDpob3ZlciAja2VtYmFsaXtcclxuXHRvcGFjaXR5OjE7XHJcblx0dHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW47XHJcbn1cclxuKi9cclxuLmJveC13cmFwe1xyXG5cdG9wYWNpdHk6MTtcclxufVxyXG4uYm94e1xyXG4gIGJveC1zaGFkb3c6MCAycHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMjUpO1xyXG4gIHRyYW5zaXRpb246MXMgYWxsOyBcclxuICBvcGFjaXR5Oi41O1xyXG4gIGZpbHRlcjpibHVyKDNweCk7XHJcbn1cclxuLmJveC13cmFwOmhvdmVyIC5ib3h7XHJcbiAgZmlsdGVyOmJsdXIoM3B4KTtcclxuICBvcGFjaXR5Oi41O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLjk4KTtcclxuICBib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLmJveC13cmFwOmhvdmVyIC5ib3g6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOnNjYWxlKDEpO1xyXG4gIGZpbHRlcjpibHVyKDBweCk7XHJcbiAgb3BhY2l0eToxO1xyXG4gIGJveC1zaGFkb3c6MCA4cHggMjBweCAwcHggcmdiYSgwLDAsMCwwLjEyNSk7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_project_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/project-list */ "./src/app/project-list.ts");



let ProjectComponent = class ProjectComponent {
    constructor() {
        this.projects = _app_project_list__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"];
    }
    ngOnInit() {
    }
};
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/project.component.html"),
        styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/skill-list.ts":
/*!*******************************!*\
  !*** ./src/app/skill-list.ts ***!
  \*******************************/
/*! exports provided: WEBS, PROGRAMS, COMPUTERS, GENERALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBS", function() { return WEBS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRAMS", function() { return PROGRAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPUTERS", function() { return COMPUTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERALS", function() { return GENERALS; });
const WEBS = [
    { id: 1, name: 'HTML', deskripsi: 'I have clear grasp of how it was structured. I understand how DOM events work and how to use it as well as how HTML works with CSS and Javascript/Jquery. ', gambar: '../assets/img/skilllogo/html5-small.png', tingkat_int: '80%', tingkat_str: 'Intermediate' },
    { id: 2, name: 'CSS', deskripsi: 'I wont say i have full graps of css as it has so many properties, however I know general attributes, selectors, and how it works, at the very least i can make a decent page with it alone(with html of course).', gambar: '../assets/img/skilllogo/css-small.png', tingkat_int: '90%', tingkat_str: 'Intermediate' },
    { id: 3, name: 'JavaScript', deskripsi: 'Javascript is still kinda vague, I can manipulate static data with it, but I prefer to use Jquery to do most of the job, especially when it comes to events.', gambar: '../assets/img/skilllogo/javascript-small.png', tingkat_int: '40%', tingkat_str: 'Beginner' },
    { id: 4, name: 'Jquery', deskripsi: 'Same as Javascript, but at least i use Jquery more often than Javascript, doesnt mean i really get it thought, I can do some event function, or any other simple function, but nothing to advanced.', gambar: '../assets/img/skilllogo/jquery-small.png', tingkat_int: '40%', tingkat_str: 'Beginner' },
    { id: 5, name: 'Bootstrap', deskripsi: 'Bootstrap is probably what made me interested in web development. I mean, i did touch html, and css beforehand, but its so much of chore to do everything by myself. I havent use all it has to over, but the core concept like layout, and utilites are well understood. ', gambar: '../assets/img/skilllogo/bootstrap-small.png', tingkat_int: '80%', tingkat_str: 'Intermediate' },
    { id: 6, name: 'Angular', deskripsi: 'Angular really makes things tiddy, i like it this way, no messy codes splattered all over the place. Easy routing, nice parent/child relation, good structure, easy to understand DI... just great to use, Im not expert at angular yet at the moment. Stuff like directives, lifecycle hooks, RxJS, and many more are still confusing to me.', gambar: '../assets/img/skilllogo/angular-small.png', tingkat_int: '40%', tingkat_str: 'Beginner' },
];
const PROGRAMS = [
    { id: 1, name: 'Java', deskripsi: 'Java is my first OOP, it was fairly hard to grasp at first after learning procedural programming like pascal. However OOP architecture offers so much advantages, such as maintanable program, reusable code, inheritance, clean system design, and easy troubleshooting. ', gambar: '../assets/img/skilllogo/java-small.png', tingkat_int: '90%', tingkat_str: 'Intermediate' },
    { id: 2, name: 'NetBeans', deskripsi: 'Netbeans is IDE to use when it comes to developing java program. It was easy to use, clean interface, and provides lots of great plugins. While i also use eclipse for web development, netbeans is still my go to for java.', gambar: '../assets/img/skilllogo/netbeans-small.png', tingkat_int: '90%', tingkat_str: 'Intermediate' },
    { id: 3, name: 'MariaDB', deskripsi: 'MariaDB is a fork from MySQL, which is compatible to each other of the same version. MySQL was replaced by MariaDB in xampp package version 5.5.30, since then I have been using  it. There is no difference in querries so it helps a lot.', gambar: '../assets/img/skilllogo/mariadb-small.png', tingkat_int: '80%', tingkat_str: 'Intermediate' },
    { id: 4, name: 'Git', deskripsi: 'Git is version control system that I use. I dont have much experience with it for community project as I only have one community project. Despite that im confident i know how it works, and how to use it in a community. To use git, i prefer using git bash as it also includes bash shell.', gambar: '../assets/img/skilllogo/git-small.png', tingkat_int: '40%', tingkat_str: 'Beginner' },
    { id: 5, name: 'GitHub', deskripsi: 'Github is a service that let you host your repositories online, what it means is that you can work on a project without having to be in local network where local repositories exist. Same with git, I only use it once for community project for my internship project. ', gambar: '../assets/img/skilllogo/github-small.png', tingkat_int: '40%', tingkat_str: 'Beginner' },
    { id: 6, name: 'NodeJS', deskripsi: 'NodeJS can do lots of thing, unfortunately I dont really use it that much aside from its package manager.', gambar: '../assets/img/skilllogo/nodejs-small.png', tingkat_int: '20%', tingkat_str: 'Beginner' },
];
const COMPUTERS = [
    { id: 1, name: 'Computer Hardware', deskripsi: 'Im not expert at it, nor do i following the hardware tech closely. However i know the general trend and understand how to use as well as troubleshooting them. Now, I can do troubleshoot and make things works if there are spare parts or no component need to be replaced, however soldering and fixing the board or the elecrity are beyond me. ', gambar: '../assets/img/skilllogo/computer-small.png', tingkat_int: '70%', tingkat_str: 'Intermediate' },
    { id: 2, name: 'Windows', deskripsi: 'I know how windows works, well not too deep anyway. I can troubleshoot it, and fix most problem. But when windows is so corrupt its just beyond repair, I prefer backing up the data in the partition to another computer then reinstall the OS.', gambar: '../assets/img/skilllogo/windows-small.png', tingkat_int: '80%', tingkat_str: 'Intermediate' },
    { id: 3, name: 'Ms. Word, Excel, and Powerpoint', deskripsi: 'I am very familiar with Word and Powerpoint as I use it a lot for assignment, while I dont touch Excel too much, I know how to do formula, and general stuff with it. ', gambar: '../assets/img/skilllogo/office-small.png', tingkat_int: '80%', tingkat_str: 'Intermediate' },
    { id: 4, name: 'Networking', deskripsi: 'Networking is my basic before college where I turn to programming. I have the general knowledge regarding it, I can set up local network(lan/man/wan) either with wire or wireless, I can set up a server(file server, web server), and I can work with linux-based VPS as well.', gambar: '../assets/img/skilllogo/networking-small.png', tingkat_int: '60%', tingkat_str: 'Intermediate' },
];
const GENERALS = [
    { id: 1, name: 'P123', deskripsi: 'deksprs1', gambar: '../assets/img/skilllogo/angular.png', tingkat_int: '80%', tingkat_str: 'Intermediate' },
];


/***/ }),

/***/ "./src/app/skill/skill.component.css":
/*!*******************************************!*\
  !*** ./src/app/skill/skill.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-page {\r\n  background-image: url('blocky.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.cus-shadow{\r\n    text-shadow: rgb(255, 255, 255) 1px 1px 2px;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n.cus-text-background{\r\n\tbackground-image: url('grey.jpg')\r\n}\r\n.cus-text-background-card{\r\n\tbackground-color:aliceblue;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n  .sembunyikan-kecil{\r\n\tdisplay : none;\r\n  }\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  .sembunyikan-besar{\r\n\tdisplay : none;\r\n  }\r\n}\r\n.scroll-pls{\r\n\theight:300px;\r\n\tposition: relative;\r\n\toverflow-y: scroll;\r\n\tscroll-behavior: smooth;\r\n}\r\n.text-lebar{\r\n\twidth: 40%;\r\n\tposition:relative;\r\n}\r\n.row {\r\n  display: flex;/* equal height of the children */\r\n}\r\n.col {\r\n  flex: 1; /* additionally, equal width */\r\n  padding: 1em;\r\n  border: solid;\r\n}\r\nh3 span{ \r\n  padding-top: 40px;\r\n  margin-top: -40px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\na.anchor {\r\n    display: block;\r\n    position: relative;\r\n    top: -50px;\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwvc2tpbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFpRTtFQUNqRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4QjtBQUNBO0lBQ0ksMkNBQTJDO0lBQzNDLG1DQUFtQztBQUN2QztBQUNBO0NBQ0M7QUFDRDtBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCO0FBRUE7RUFDRTtDQUNELGNBQWM7RUFDYjtBQUNGO0FBQ0E7RUFDRTtDQUNELGNBQWM7RUFDYjtBQUNGO0FBQ0M7Q0FDQSxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7QUFDbEI7QUFDQTtFQUNFLGFBQWEsQ0FBQyxpQ0FBaUM7QUFDakQ7QUFFQTtFQUNFLE9BQU8sRUFBRSw4QkFBOEI7RUFDdkMsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9za2lsbC9za2lsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmctcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzLy9pbWcvL2Nhcm91c2VsLy8vYmxvY2t5LmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5jdXMtc2hhZG93e1xyXG4gICAgdGV4dC1zaGFkb3c6IHJnYigyNTUsIDI1NSwgMjU1KSAxcHggMXB4IDJweDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcbi5jdXMtdGV4dC1iYWNrZ3JvdW5ke1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy8vaW1nLy9jYXJvdXNlbC8vZ3JleS5qcGdcIilcclxufVxyXG4uY3VzLXRleHQtYmFja2dyb3VuZC1jYXJke1xyXG5cdGJhY2tncm91bmQtY29sb3I6YWxpY2VibHVlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNlbWJ1bnlpa2FuLWtlY2lse1xyXG5cdGRpc3BsYXkgOiBub25lO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNlbWJ1bnlpa2FuLWJlc2Fye1xyXG5cdGRpc3BsYXkgOiBub25lO1xyXG4gIH1cclxufVxyXG4gLnNjcm9sbC1wbHN7XHJcblx0aGVpZ2h0OjMwMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuLnRleHQtbGViYXJ7XHJcblx0d2lkdGg6IDQwJTtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4Oy8qIGVxdWFsIGhlaWdodCBvZiB0aGUgY2hpbGRyZW4gKi9cclxufVxyXG5cclxuLmNvbCB7XHJcbiAgZmxleDogMTsgLyogYWRkaXRpb25hbGx5LCBlcXVhbCB3aWR0aCAqL1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBib3JkZXI6IHNvbGlkO1xyXG59XHJcbmgzIHNwYW57IFxyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbmEuYW5jaG9yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/skill/skill.component.ts":
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillComponent = class SkillComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skill',
        template: __webpack_require__(/*! raw-loader!./skill.component.html */ "./node_modules/raw-loader/index.js!./src/app/skill/skill.component.html"),
        styles: [__webpack_require__(/*! ./skill.component.css */ "./src/app/skill/skill.component.css")]
    })
], SkillComponent);



/***/ }),

/***/ "./src/app/skill/skillsmall/computers/computers.component.css":
/*!********************************************************************!*\
  !*** ./src/app/skill/skillsmall/computers/computers.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warna-grey{\r\n    background-color: lightgray;\r\n}\r\n.warna-tulisan{\r\n    color: darkslategray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwvc2tpbGxzbWFsbC9jb21wdXRlcnMvY29tcHV0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NraWxsL3NraWxsc21hbGwvY29tcHV0ZXJzL2NvbXB1dGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcm5hLWdyZXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuLndhcm5hLXR1bGlzYW57XHJcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/skill/skillsmall/computers/computers.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/skill/skillsmall/computers/computers.component.ts ***!
  \*******************************************************************/
/*! exports provided: ComputersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputersComponent", function() { return ComputersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_skill_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/skill-list */ "./src/app/skill-list.ts");



let ComputersComponent = class ComputersComponent {
    constructor() {
        this.computers = src_app_skill_list__WEBPACK_IMPORTED_MODULE_2__["COMPUTERS"];
    }
    ngOnInit() {
    }
};
ComputersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-computers',
        template: __webpack_require__(/*! raw-loader!./computers.component.html */ "./node_modules/raw-loader/index.js!./src/app/skill/skillsmall/computers/computers.component.html"),
        styles: [__webpack_require__(/*! ./computers.component.css */ "./src/app/skill/skillsmall/computers/computers.component.css")]
    })
], ComputersComponent);



/***/ }),

/***/ "./src/app/skill/skillsmall/programs/programs.component.css":
/*!******************************************************************!*\
  !*** ./src/app/skill/skillsmall/programs/programs.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warna-grey{\r\n    background-color: lightgray;\r\n}\r\n.warna-tulisan{\r\n    color: darkslategray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwvc2tpbGxzbWFsbC9wcm9ncmFtcy9wcm9ncmFtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9za2lsbC9za2lsbHNtYWxsL3Byb2dyYW1zL3Byb2dyYW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmEtZ3JleXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4ud2FybmEtdHVsaXNhbntcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/skill/skillsmall/programs/programs.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/skill/skillsmall/programs/programs.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsComponent", function() { return ProgramsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_skill_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/skill-list */ "./src/app/skill-list.ts");



let ProgramsComponent = class ProgramsComponent {
    constructor() {
        this.programs = src_app_skill_list__WEBPACK_IMPORTED_MODULE_2__["PROGRAMS"];
    }
    ngOnInit() {
    }
};
ProgramsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-programs',
        template: __webpack_require__(/*! raw-loader!./programs.component.html */ "./node_modules/raw-loader/index.js!./src/app/skill/skillsmall/programs/programs.component.html"),
        styles: [__webpack_require__(/*! ./programs.component.css */ "./src/app/skill/skillsmall/programs/programs.component.css")]
    })
], ProgramsComponent);



/***/ }),

/***/ "./src/app/skill/skillsmall/skillsmall.component.css":
/*!***********************************************************!*\
  !*** ./src/app/skill/skillsmall/skillsmall.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxsL3NraWxsc21hbGwvc2tpbGxzbWFsbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/skill/skillsmall/skillsmall.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/skill/skillsmall/skillsmall.component.ts ***!
  \**********************************************************/
/*! exports provided: SkillsmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsmallComponent", function() { return SkillsmallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsmallComponent = class SkillsmallComponent {
    constructor() {
        this.trigger = 1;
    }
    ngOnInit() {
    }
    toogletab(attribut) {
        this.trigger = attribut;
        return this.trigger;
    }
};
SkillsmallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skillsmall',
        template: __webpack_require__(/*! raw-loader!./skillsmall.component.html */ "./node_modules/raw-loader/index.js!./src/app/skill/skillsmall/skillsmall.component.html"),
        styles: [__webpack_require__(/*! ./skillsmall.component.css */ "./src/app/skill/skillsmall/skillsmall.component.css")]
    })
], SkillsmallComponent);



/***/ }),

/***/ "./src/app/skill/skillsmall/webs/webs.component.css":
/*!**********************************************************!*\
  !*** ./src/app/skill/skillsmall/webs/webs.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warna-grey{\r\n    background-color: lightgray;\r\n}\r\n.warna-tulisan{\r\n    color: darkslategray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwvc2tpbGxzbWFsbC93ZWJzL3dlYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvc2tpbGwvc2tpbGxzbWFsbC93ZWJzL3dlYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuYS1ncmV5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbi53YXJuYS10dWxpc2Fue1xyXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skill/skillsmall/webs/webs.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/skill/skillsmall/webs/webs.component.ts ***!
  \*********************************************************/
/*! exports provided: WebsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsComponent", function() { return WebsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_skill_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/skill-list */ "./src/app/skill-list.ts");



let WebsComponent = class WebsComponent {
    constructor() {
        this.webs = src_app_skill_list__WEBPACK_IMPORTED_MODULE_2__["WEBS"];
    }
    ngOnInit() {
    }
};
WebsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-webs',
        template: __webpack_require__(/*! raw-loader!./webs.component.html */ "./node_modules/raw-loader/index.js!./src/app/skill/skillsmall/webs/webs.component.html"),
        styles: [__webpack_require__(/*! ./webs.component.css */ "./src/app/skill/skillsmall/webs/webs.component.css")]
    })
], WebsComponent);



/***/ }),

/***/ "./src/app/skill/skillwide/skillwide.component.css":
/*!*********************************************************!*\
  !*** ./src/app/skill/skillwide/skillwide.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cus-shadow{\r\n    text-shadow: rgb(255, 255, 255) 1px 1px 2px;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n.cus-text-background{\r\n\tbackground-image: url('grey.jpg')\r\n}\r\n.cus-text-background-card{\r\n\tbackground-color:aliceblue;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n  .sembunyikan-kecil{\r\n\tdisplay : none;\r\n}\r\n}\r\n.scroll-pls{\r\n\theight:300px;\r\n\tposition: relative;\r\n\toverflow-y: scroll;\r\n\tscroll-behavior: smooth;\r\n}\r\n.text-lebar{\r\n\twidth: 40%;\r\n\tposition:relative;\r\n}\r\n.row {\r\n  display: flex;/* equal height of the children */\r\n}\r\n.col {\r\n  flex: 1; /* additionally, equal width */\r\n  padding: 1em;\r\n  border: solid;\r\n}\r\nh3 span{ \r\n  padding-top: 40px;\r\n  margin-top: -40px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\na.anchor {\r\n    display: block;\r\n    position: relative;\r\n    top: -50px;\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGwvc2tpbGx3aWRlL3NraWxsd2lkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkNBQTJDO0lBQzNDLG1DQUFtQztBQUN2QztBQUNBO0NBQ0M7QUFDRDtBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCO0FBRUE7RUFDRTtDQUNELGNBQWM7QUFDZjtBQUNBO0FBQ0M7Q0FDQSxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7QUFDbEI7QUFDQTtFQUNFLGFBQWEsQ0FBQyxpQ0FBaUM7QUFDakQ7QUFFQTtFQUNFLE9BQU8sRUFBRSw4QkFBOEI7RUFDdkMsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9za2lsbC9za2lsbHdpZGUvc2tpbGx3aWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzLXNoYWRvd3tcclxuICAgIHRleHQtc2hhZG93OiByZ2IoMjU1LCAyNTUsIDI1NSkgMXB4IDFweCAycHg7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG4uY3VzLXRleHQtYmFja2dyb3VuZHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvL2ltZy8vY2Fyb3VzZWwvL2dyZXkuanBnXCIpXHJcbn1cclxuLmN1cy10ZXh0LWJhY2tncm91bmQtY2FyZHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOmFsaWNlYmx1ZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zZW1idW55aWthbi1rZWNpbHtcclxuXHRkaXNwbGF5IDogbm9uZTtcclxufVxyXG59XHJcbiAuc2Nyb2xsLXBsc3tcclxuXHRoZWlnaHQ6MzAwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG4udGV4dC1sZWJhcntcclxuXHR3aWR0aDogNDAlO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7LyogZXF1YWwgaGVpZ2h0IG9mIHRoZSBjaGlsZHJlbiAqL1xyXG59XHJcblxyXG4uY29sIHtcclxuICBmbGV4OiAxOyAvKiBhZGRpdGlvbmFsbHksIGVxdWFsIHdpZHRoICovXHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJvcmRlcjogc29saWQ7XHJcbn1cclxuaDMgc3BhbnsgXHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuYS5hbmNob3Ige1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/skill/skillwide/skillwide.component.ts":
/*!********************************************************!*\
  !*** ./src/app/skill/skillwide/skillwide.component.ts ***!
  \********************************************************/
/*! exports provided: SkillwideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillwideComponent", function() { return SkillwideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _skill_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../skill-list */ "./src/app/skill-list.ts");



let SkillwideComponent = class SkillwideComponent {
    constructor() {
        this.webs = _skill_list__WEBPACK_IMPORTED_MODULE_2__["WEBS"];
        this.programs = _skill_list__WEBPACK_IMPORTED_MODULE_2__["PROGRAMS"];
        this.computers = _skill_list__WEBPACK_IMPORTED_MODULE_2__["COMPUTERS"];
    }
    ngOnInit() {
    }
    onClick1() {
        setTimeout(function () {
            $('html, body').animate({ scrollTop: $("#web-dev").offset().top }, 0);
        }, 1000);
    }
    onClick2() {
        setTimeout(function () {
            $('html, body').animate({ scrollTop: $("#program-dev").offset().top }, 0);
        }, 1000);
    }
    onClick3() {
        setTimeout(function () {
            $('html, body').animate({ scrollTop: $("#computer-stuff").offset().top }, 0);
        }, 1000);
    }
};
SkillwideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skillwide',
        template: __webpack_require__(/*! raw-loader!./skillwide.component.html */ "./node_modules/raw-loader/index.js!./src/app/skill/skillwide/skillwide.component.html"),
        styles: [__webpack_require__(/*! ./skillwide.component.css */ "./src/app/skill/skillwide/skillwide.component.css")]
    })
], SkillwideComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ProgramBayu\xampp56\htdocs\angular\myportofolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map