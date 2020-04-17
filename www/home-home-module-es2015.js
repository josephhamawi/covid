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
/* harmony default export */ __webpack_exports__["default"] = (".info {\n  width: 100%;\n  height: 100%;\n  font-style: italic;\n  padding: 3%;\n}\n\n.icons {\n  width: 100%;\n  padding: 5%;\n  margin-bottom: 20px;\n}\n\n.icons ion-avatar {\n  position: relative;\n  float: left;\n  margin-right: 10px;\n}\n\nion-chip {\n  width: 100%;\n  height: 50px;\n  margin: 10px 0;\n  background: #ffbf00;\n  color: #191919;\n}\n\nspan {\n  font-weight: bold;\n}\n\nion-footer {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhoYW1hd2kvRGV2ZWxvcG1lbnQvY292aWQxOS9jb3ZpZC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREFJO0VBRUksa0JBQUE7RUFDRCxXQUFBO0VBQ0Esa0JBQUE7QUNDUDs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0EsaUJBQUE7QUNDQTs7QURFQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm97XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBwYWRkaW5nOiAzJTtcblxuICAgIH1cbi5pY29uc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGlvbi1hdmF0YXJ7XG4gICAgXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG5pb24tY2hpcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmYmYwMDtcbiAgICBjb2xvcjogIzE5MTkxOTtcblxufVxuc3BhbntcbmZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tZm9vdGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogMyU7XG59XG5cbi5pY29ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5pY29ucyBpb24tYXZhdGFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tY2hpcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZmZiZjAwO1xuICBjb2xvcjogIzE5MTkxOTtcbn1cblxuc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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
        this.results = this.service.getData('world');
        this.results.subscribe(resp => {
            console.log('COVID19 Data: ', resp);
            this.worldArray = resp;
        });
        this.results = this.service.getData('qatar');
        this.results.subscribe(resp => {
            console.log('COVID19 Data: ', resp);
            this.qatarArray = resp;
        });
        this.results = this.service.getData('nigeria');
        this.results.subscribe(resp => {
            console.log('COVID19 Data: ', resp);
            this.nigeriaArray = resp;
            this.endlessCoronaArray = this.nigeriaArray;
        });
        this.results = this.service.getData('lebanon');
        this.results.subscribe(resp => {
            console.log('COVID19 Data: ', resp);
            this.qlebArray = resp;
        });
    }
    flagClick(countryName) {
        if (countryName == 'world') {
            this.endlessCoronaArray = this.worldArray;
        }
        else if (countryName == 'qatar') {
            this.endlessCoronaArray = this.qatarArray;
        }
        else if (countryName == 'nigeria') {
            this.endlessCoronaArray = this.nigeriaArray;
        }
        else if (countryName == 'lebanon') {
            this.endlessCoronaArray = this.qlebArray;
        }
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