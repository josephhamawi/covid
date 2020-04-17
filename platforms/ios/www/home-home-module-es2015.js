(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Covid-19\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollY=\"false\">\n\n<div class=\"container icons\">\n\n    <ion-avatar size=\"small\" (click)=\"flagClick('lebanon')\">\n      <img src=\"../../assets/lebanon.svg\" alt=\"\">\n    </ion-avatar>\n\n    <ion-avatar (click)=\"flagClick('qatar')\">\n      <img src=\"../../assets/qatar.svg\" alt=\"\">\n    </ion-avatar>\n\n    <ion-avatar (click)=\"flagClick('nigeria')\">\n      <img src=\"../../assets/nigeria.svg\" alt=\"\">\n    </ion-avatar>\n\n    <ion-avatar (click)=\"flagClick('world')\">\n      <img src=\"../../assets/world_wide.svg\" alt=\"\">\n    </ion-avatar>\n  </div>\n\n\n<div class=\"info\" *ngFor=\"let result of endlessCoronaArray\">\n  <ion-chip color=\"secondary\" expand=\"full\">\n      <ion-avatar>\n        <!-- <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"> -->\n        <img src=\"../../assets/location.svg\">\n        </ion-avatar>\n    <ion-label ><span>Country Name : </span>{{result.Name}}</ion-label><br>\n  </ion-chip>\n  <ion-chip color=\"secondary\">\n    <ion-avatar>\n      <!-- <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"> -->\n      <img src=\"../../assets/dateup.svg\">\n    </ion-avatar>\n    <ion-label ><span>DateUpdated : </span>{{result.DateUpdate | date}}</ion-label><br>\n  </ion-chip>\n<ion-chip color=\"secondary\">\n  <ion-avatar>\n    <!-- <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"> -->\n    <img src=\"../../assets/cases.svg\">\n  </ion-avatar>\n  <ion-label><span>Total Cases : </span> {{result.Confirmed | number}}</ion-label><br>\n</ion-chip>\n<ion-chip color=\"secondary\">\n  <ion-avatar>\n    <!-- <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"> -->\n    <img src=\"../../assets/cases.svg\">\n  </ion-avatar>\n  <ion-label><span>New Cases : </span> {{result.Confirmed - result.History[1].Confirmed  | number}}</ion-label><br>\n</ion-chip>\n<ion-chip color=\"secondary\">\n  <ion-avatar>\n    <!-- <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"> -->\n    <img src=\"../../assets/death3.svg\">\n  </ion-avatar>\n  <ion-label><span>Total Death : </span> {{result.Deaths  | number}}</ion-label><br>\n  \n</ion-chip>\n<ion-chip color=\"secondary\">\n  <ion-avatar>\n    <!-- <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"> -->\n    <img src=\"../../assets/recovered (1).svg\">\n  </ion-avatar>\n  <ion-label><span>Total Recovered : </span> {{result.Recovered  | number}}</ion-label><br>\n</ion-chip>\n<ion-chip color=\"secondary\">\n  <ion-avatar>\n    <!-- <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"> -->\n    <img src=\"../../assets/popul.svg\">\n  </ion-avatar>\n  <ion-label ><span>Population : </span>{{result.Population  | number}}</ion-label><br>\n</ion-chip>\n</div>\n\n</ion-content>\n<ion-footer>\n  <h6>Developed By ZooZoo</h6>\n</ion-footer>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info {\n  width: 100%;\n  height: 100%;\n  font-style: italic;\n  padding: 3%;\n}\n\n.icons {\n  width: 100%;\n  padding: 5%;\n  margin-bottom: 20px;\n}\n\n.icons ion-avatar {\n  position: relative;\n  float: left;\n  margin-right: 10px;\n}\n\nion-chip {\n  width: 100%;\n  height: 50px;\n  margin: 10px 0;\n  background: #ffbf00;\n  color: #191919;\n}\n\nspan {\n  font-weight: bold;\n}\n\nion-footer {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhoYW1hd2kvRGV2ZWxvcG1lbnQvY292aWQvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURBSTtFQUVJLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLGtCQUFBO0FDQ1A7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNBLGlCQUFBO0FDQ0E7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZve1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgcGFkZGluZzogMyU7XG5cbiAgICB9XG4uaWNvbnN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBpb24tYXZhdGFye1xuICAgIFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxuaW9uLWNoaXB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmJmMDA7XG4gICAgY29sb3I6ICMxOTE5MTk7XG5cbn1cbnNwYW57XG5mb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWZvb3RlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLmluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDMlO1xufVxuXG4uaWNvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNSU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaWNvbnMgaW9uLWF2YXRhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW9uLWNoaXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgYmFja2dyb3VuZDogI2ZmYmYwMDtcbiAgY29sb3I6ICMxOTE5MTk7XG59XG5cbnNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let HomePage = class HomePage {
    constructor(service) {
        this.service = service;
        this.results = this.service.getData('nigeria');
        this.results.subscribe(resp => {
            //console.log('COVID19 Data: ', resp);
            this.endlessCoronaArray = resp;
        });
    }
    flagClick(countryName) {
        this.results = this.service.getData(countryName);
        this.results.subscribe(resp => {
            //console.log('COVID19 Data: ', resp);
            this.endlessCoronaArray = resp;
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
], HomePage);



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
        this.url = 'https://kustom.radio-canada.ca/coronavirus/';
    }
    getData(country) {
        const data = this.http.get(this.url + country);
        return data;
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HomeService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map