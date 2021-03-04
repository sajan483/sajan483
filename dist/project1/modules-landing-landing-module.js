(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/login/login.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/login/login.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid backgroundimage\">\n\t<div class=\"bagroundblure\">\n\t\t<div class=\"extraimg\">\n\t\t\t<img src=\"/assets/images/lanterns.png\" alt=\"\">\n\t\t</div>\n\t\t<div class=\"row m-0\" id=\"loginDiv\">\n\t\t\t<div class=\"pt60 col-md-8 col-lg-6 col-xl-4 col-12 pl-0 pr-0\" style=\"margin: auto;\">\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<img src=\"/assets/images/logo.png\" class=\"logoimg\" alt=\"\">\n\t\t\t\t</div>\n\t\t\t\t<h3 class=\"logtext\">LOGIN TO CONTINUE</h3>\n\t\t\t\t<div class=\"relativepos\">\n\t\t\t\t\t<div class=\"topimagepos\">\n\t\t\t\t\t\t<img src=\"/assets/images/login-box-top-right-bg.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bottomingpos\">\n\t\t\t\t\t\t<img src=\"/assets/images/login-box-bottom-left-bg.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body p60\">\n\t\t\t\t\t\t\t<form [formGroup]=\"frmSignup\" (submit)=\"submit()\">\n\t\t\t\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><img src=\"/assets/images/username-icon.png\" alt=\"\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"username\" type=\"text\" formControlName=\"username\" placeholder=\"Phone Number\" class=\"form-control\" maxlength=\"15\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><img src=\"/assets/images/password-icon.png\" alt=\"\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row align-items-center remember\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-6 p-0 \">\n\t\t\t\t\t\t\t\t\t\t<mat-checkbox [(checked)]=\"rememberme\" (change)=\"setBoolean()\" >Remember me</mat-checkbox>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-6 p-0 textend mb11\">\n\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#forgotPasswordPopup\" class=\"frgtpsswrd\"href=\"#\">Forgot Password...?</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"submit\" value=\"LOGIN\" class=\"login_btn\" >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-center links\">\n\t\t\t\t\t\t\t\t\tDon't have an account...?<a class=\"signupc\" (click)=\"navigatesignup();\">Create Now</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex justify-content-around mt45\" >\n\t\t\t\t\t<div class=\"smallcenter\" style=\"width: 205px;\">\n\t\t\t\t\t\t<div class=\"emailicon\">\n\t\t\t\t\t\t\t<img style=\"margin-top: 2px;\" src=\"/assets/images/email-icon.png\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p class=\"textemailphone\">Email Us</p>\n\t\t\t\t\t\t\t<p class=\"textemailphone\">info@akbarumrah.com</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style=\"width: 158px;\" class=\"smallcenter\">\n\t\t\t\t\t\t<div class=\"emailicon\">\n\t\t\t\t\t\t\t<img src=\"/assets/images/call-us-icon.png\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p class=\"textemailphone\">Call Us</p>\n\t\t\t\t\t\t\t<p class=\"textemailphone\">022-4903 7000</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"hight\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal\" id=\"forgotPasswordPopup\">\n    <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{'Enter Phone Number' | translate}}</h4>\n        <button id=\"ibanClose\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n            <div class=\"modal-body\" style=\"font-size: 12px;\">\n            <div class=\"col-md-12\">\n                <div class=\"col-md-12 pb-1 pl-0\"><strong style=\"color: red;\">*</strong> {{'Phone Number' | translate}}:</div>\n\t\t\t\t<div class=\"form-group\" style=\"margin-bottom: 0px;font-size: 15px \">\n\t\t\t\t\t<select name=\"\" id=\"\" class=\"countrycode\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"countrycode1\">\n\t\t\t\t\t\t<option *ngFor=\"let item of countries\" [value]=\"item.code\">{{item.code}} ({{item.iso_code}})</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<input id=\"phnnumber\" placeholder=\"Enter Phone Number\"  type=\"text\" [(ngModel)]=\"phoneNumber\" style=\"padding-left: 105px;color: gray !important;\"\n\t\t\t\t\tclass=\"form-control\" numberOnly maxlength=\"15\">\n\t\t\t\t</div>\n            </div>\n            </div>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\" >\n\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"onSendOtpButtonClicked()\" [disabled]=\"!hidebutton()\"\n\t\t[class.hidenormalbutton]=\"!hidebutton()\" data-dismiss=\"modal\">{{'Send OTP'|translate}}</button>\n\t\t<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#changePasswordPopup\">Open Modal</button>\n        </div>    \n    </div>\n    </div>\n</div>\n\n<div class=\"modal\" id=\"changePasswordPopup\">\n    <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{'Enter Password' | translate}}</h4>\n        <button id=\"forgotClose\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n            <div class=\"modal-body\" style=\"font-size: 12px;\">\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"col-md-12 pb-1 pl-0\"><strong style=\"color: red;\">*</strong> {{'Phone Number' | translate}}:</div>\n\t\t\t\t\t<div class=\"form-group\" style=\"margin-bottom: 0px;font-size: 15px \">\n\t\t\t\t\t\t<select name=\"\" id=\"\" class=\"countrycode\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"countrycode2\">\n\t\t\t\t\t\t\t<option *ngFor=\"let item of countries\" [value]=\"item.code\">{{item.code}} ({{item.iso_code}})</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<input id=\"phnnumber\" placeholder=\"Enter Phone Number\"  type=\"text\" [(ngModel)]=\"rePhoneNumber\" style=\"padding-left: 105px;color: gray !important;\"\n\t\t\t\t\t\tclass=\"form-control\" numberOnly maxlength=\"15\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n            <div class=\"col-md-12 m-0 p-0\">\n                <div class=\"col-md-12 pb-1\"><strong style=\"color: red;\">*</strong> {{'OTP' | translate}}:</div>\n                <div class=\"col-md-12\"><input type=\"text\" placeholder=\"Enter OTP\" class=\"form-control\" id=\"auth_code\" [(ngModel)]=\"otp\" ></div>\n\t\t\t </div>\n\t\t\t <div class=\"col-md-12 m-0 p-0\">\n                <div class=\"col-md-12 pb-1\"><strong style=\"color: red;\">*</strong> {{'Password' | translate}}:</div>\n                <div class=\"col-md-12\"><input type=\"text\" placeholder=\"Enter Password\" class=\"form-control\" id=\"auth_code\" [(ngModel)]=\"ePassword\" ></div>\n             </div><div class=\"col-md-12 m-0 p-0\">\n                <div class=\"col-md-12 pb-1\"><strong style=\"color: red;\">*</strong> {{'Confirm Password' | translate}}:</div>\n                <div class=\"col-md-12\"><input type=\"text\" placeholder=\"Confirm Password\" class=\"form-control\" id=\"auth_code\" [(ngModel)]=\"cPassword\" ></div>\n             </div>\n            </div>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\" >\n\t\t\t<p>OTP will expire in {{timeLeft}}</p> \n        <button [disabled]=\"!hideForgotPssBtn()\"\n\t\t[class.hidenormalbutton]=\"!hideForgotPssBtn()\" type=\"button\" class=\"btn btn-danger\" (click)=\"onChangePasswordBtnClicked()\" data-dismiss=\"modal\">{{'Submit'|translate}}</button>\n        </div>    \n    </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/signup/signup.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/signup/signup.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container-fluid bg\">\n    <div class=\"text-center pt30\">\n        <img src=\"/assets/images/logo.png\" class=\"logoimg\" alt=\"\">\n    </div>\n    <div class=\"extraimg\">\n        <img src=\"/assets/images/lanterns.png\" alt=\"\">\n    </div>\n    <h3 class=\"logtext\">TRAVEL AGENCY REGISTRATION</h3>\n    <section class=\"row\">\n        \n        <form class=\"form-container\" [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n                \n                <div class=\"row\">\n                    <div class=\"col-md-6 pl-3 pr-3\">\n                        <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"cmpnynamelbl\">Travel Agency Name</label>\n                            <input id=\"cmpnyname\" formControlName=\"cmpnyname\" placeholder=\"Enter Travel Agency Name\" type=\"text\" (keypress)=\"omit_special_char($event)\"\n                            class=\"form-control text-capitalize\" [ngClass]=\"{ 'is-invalid': submitted && f.cmpnyname.errors }\">\n                            <div *ngIf=\"submitted && f.cmpnyname.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.cmpnyname.errors.required\">Travel Agency Name is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 pl-3 pr-3\">\n                        <!-- <div class=\"form-group col-md-4 pr-2\" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"cntrycodelbl\">Contry Code</label>\n                            <select id=\"cntrycode\" placeholder=\"Contry Code\" type=\"text\" formControlName=\"cntrycode\"\n                            class=\"form-control\"[ngClass]=\"{ 'is-invalid': submitted && f.cntrycode.errors }\">\n                                <option value=\"\" disabled selected>Contry Code</option>\n                                <option value=\"+91\">india(+91)</option>\n                                <option value=\"+002\">pakistan(+002)</option>\n                            </select>\n                            <div *ngIf=\"submitted && f.cntrycode.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.cntrycode.errors.required\">Contry Code is required</div>\n                            </div>\n                        </div> -->\n                        <div class=\"form-group\" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"phnnumberlbl\">Phone Number</label>\n                            <select name=\"\" id=\"\" class=\"countrycode\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"countrycode1\" (change)=\"changecntry($event.target.value)\">\n                                <option *ngFor=\"let item of countries\" [value]=\"item.code\">{{item.code}} ({{item.iso_code}})</option>\n                            </select>\n                            <input id=\"phnnumber\" max=\"10\" placeholder=\"Enter Phone Number\"  type=\"text\" maxlength=\"15\" formControlName=\"phnnumber\" style=\"padding-left: 105px;\"\n                            class=\"form-control\"[ngClass]=\"{ 'is-invalid': submitted && f.phnnumber.errors }\" numberOnly>\n                            <div *ngIf=\"submitted && f.phnnumber.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.phnnumber.errors.required\">Phone Number is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 pl-3 pr-3\">\n                        <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"emaillbl\">Email</label>\n                            <input id=\"email\" placeholder=\"Enter Email\" type=\"text\" formControlName=\"email\" \n                            class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 pl-3 pr-3\">\n                        <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"cmpnyadresslbl\">Address</label>\n                            <input id=\"cmpnyadress\" placeholder=\"Enter Company Address\" type=\"text\" formControlName=\"cmpnyadress\"\n                            class=\"form-control\"[ngClass]=\"{ 'is-invalid': submitted && f.cmpnyadress.errors }\">\n                            <div *ngIf=\"submitted && f.cmpnyadress.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.cmpnyadress.errors.required\">Company Address is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 row pl-3 pr-3\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 15px \">\n                                <label id=\"citylbl\">City</label>\n                                <input id=\"city\" placeholder=\"Enter city\" type=\"text\" formControlName=\"city\"\n                                class=\"form-control\"[ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\">\n                                <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.city.errors.required\">City is required</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 pl10\">\n                            <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 15px \">\n                                <label id=\"statelbl\">State</label>\n                                <input id=\"state\" placeholder=\"Enter state\" type=\"text\" formControlName=\"state\"\n                                class=\"form-control\"[ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\">\n                                <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.state.errors.required\">State is required</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"col-md-6 pl-3 pr-3\">\n                        <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"contrylbl\">Country </label>\n                            <!-- <input id=\"country\" placeholder=\"Enter Country\" type=\"text\" formControlName=\"country\"\n                            class=\"form-control\"[ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\">\n                            <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.country.errors.required\">Country is required</div>\n                            </div> -->\n                            <select name=\"\" id=\"\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"slctcntry\" (change)=\"changecntrycode($event.target.value)\">\n                                <option *ngFor=\"let item of countries;let i = index\" [value]=\"item.name\">{{item.name}}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 pl-3 pr-3\">\n                        <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"cnamelbl\">Contact Person Name</label>\n                            <input id=\"cname\" placeholder=\"Enter Contact person Name\" type=\"text\" formControlName=\"cname\"\n                            class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.cname.errors }\">\n                            <div *ngIf=\"submitted && f.cname.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.cname.errors.required\">Contact person Name is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 pl-3 pr-3\">\n                        <!-- <div class=\"form-group col-md-4 pr-2\" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"cntrycodeplbl\">Contry Code</label>\n                            <select id=\"cntrycodep\" placeholder=\"Contry Code\" type=\"text\" formControlName=\"cntrycodep\"\n                            class=\"form-control\"[ngClass]=\"{ 'is-invalid': submitted && f.cntrycodep.errors }\">\n                                <option value=\"\" disabled selected>Contry Code</option>\n                                <option value=\"+91\">india(+91)</option>\n                                <option value=\"+002\">pakistan(+002)</option>\n                            </select>\n                            <div *ngIf=\"submitted && f.cntrycodep.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.cntrycodep.errors.required\">Contry Code is required</div>\n                            </div>\n                        </div> -->\n                        <div class=\"form-group\" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"phnnumberlbl\">Contact Person Number</label>\n                            <select name=\"\" id=\"\" class=\"countrycode\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"countrycode1\" (change)=\"changecntry($event.target.value)\">\n                                <option *ngFor=\"let item of countries\" [value]=\"item.code\">{{item.code}} ({{item.iso_code}})</option>\n                            </select>\n                            <input id=\"phnnumberp\" placeholder=\"Enter Contact person Number\"  type=\"text\" formControlName=\"phnnumberp\" style=\"padding-left: 105px;\"\n                            class=\"form-control\"[ngClass]=\"{ 'is-invalid': submitted && f.phnnumberp.errors }\" numberOnly maxlength=\"15\">\n                            <div *ngIf=\"submitted && f.phnnumberp.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.phnnumberp.errors.required\">Contact person Number is required</div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 pl-3 pr-3\">\n                        <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"passwordlbl\">Password</label>\n                            <input id=\"password\" placeholder=\"Enter Password\" type=\"password\" formControlName=\"password\"\n                            class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 pl-3 pr-3\">\n                        <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"cnfrmpasswrdlbl\">Confirm Password</label>\n                            <input id=\"cnfrmpasswrd\" placeholder=\"Confirm Password\" type=\"password\" formControlName=\"cnfrmpasswrd\"\n                            class=\"form-control\"[ngClass]=\"{ 'is-invalid': submitted && f.cnfrmpasswrd.errors }\">\n                            <div *ngIf=\"submitted && f.cnfrmpasswrd.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.cnfrmpasswrd.errors.required\">Confirm Password is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12 pl-3 pr-3 pt-3\">\n                        <div class=\"d-flex flex-row\">\n                            <div class=\"pr-3 areu\">\n                                Are you a License Agent ? \n                            </div>\n                            \n                            <div class=\"form-check-inline pr-3 \">\n                                <label class=\"form-check-label cursr\" for=\"radio1\" (click)=\"licenseyes()\">\n                                  <input type=\"radio\" class=\"form-check-input\" id=\"radio1\" name=\"optradio\" value=\"option1\" >Yes\n                                </label>\n                              </div>\n                              <div class=\"form-check-inline \">\n                                <label class=\"form-check-label cursr\" for=\"radio2\" (click)=\"licenseno()\">\n                                  <input type=\"radio\" class=\"form-check-input\" id=\"radio2\" name=\"optradio\" value=\"option2\">No\n                                </label>\n                              </div>\n                            <!-- <mat-radio-group aria-label=\"Select an option\">\n                                <mat-radio-button value=\"1\" class=\"pr-3\" (change)=\"licenseyes();\">Yes</mat-radio-button>\n                                <mat-radio-button value=\"2\" (change)=\"licenseno();\">No</mat-radio-button>\n                            </mat-radio-group>                           -->\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 pl-3 pr-3\" *ngIf=\"licensefield\">\n                        <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 15px \">\n                            <label id=\"Licenseilbl\" >License number of the Ministry of Hajj and Umrah</label>\n                            <input id=\"license\" placeholder=\"Enter License number\" type=\"text\" (keypress)=\"omit_special_char($event)\" \n                            class=\"form-control text-uppercase\" formControlName=\"license\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 pl-3 pr-3\" *ngIf=\"licensefield\">\n                        <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 15px \" >\n                            <label id=\"ibanlbl\" >IBAN</label>\n                            <input id=\"iban\" formControlName=\"iban\" placeholder=\"Enter IBAN Number\" type=\"text\" \n                            class=\"form-control text-uppercase\" (keypress)=\"omit_special_char($event)\">\n                        </div>\n                    </div>\n                    \n                </div>\n                \n                \n                <div class=\"d-flex justify-content-center mt20\" *ngIf=\"bttnshow\">\n                    <button  class=\"btnn\" type=\"submit\">CREATE ACCOUNT</button>\n                </div>\n                \n                <div class=\"d-flex justify-content-center mt10\">\n                    <p class=\"createreg\">Already have an account..? <strong (click)=\"navigatelogin()\"> Login Now</strong></p>\n                </div>\n        </form>\n    </section>\n    <div class=\"d-flex justify-content-center mb50 textcentr\">\n        <div class=\"smallcenter\" style=\"width: 205px;\">\n            <div class=\"emailicon\">\n                <img style=\"margin-top: 2px;\" src=\"/assets/images/email-icon.png\" alt=\"\">\n            </div>\n            <div>\n                <p class=\"textemailphone\">Email Us</p>\n                <p class=\"textemailphone\">info@akbarumrah.com</p>\n            </div>\n        </div>\n        <div style=\"width: 158px;\">\n            <div class=\"emailicon\">\n                <img src=\"/assets/images/call-us-icon.png\" alt=\"\">\n            </div>\n            <div>\n                <p class=\"textemailphone\">Call Us</p>\n                <p class=\"textemailphone\">022-4903 7000</p>\n            </div>\n        </div>\n    </div>\n    <ngx-spinner  bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\"> \n        \n      </ngx-spinner>\n</section>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/upload-docs/upload-docs.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/upload-docs/upload-docs.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"postionabs\">\n  <div class=\"container-fluid backgroundimage\">\n    <div class=\"extraimg\">\n\t\t\t<img src=\"/assets/images/lanterns.png\" alt=\"\">\n\t\t</div>\n    <div class=\"container pt50\">\n      <div class=\"text-center\">\n        <img src=\"/assets/images/logo.png\" alt=\"\">\n      </div>\n      <div class=\"text-center pt30\">\n        <h4 class=\"animtion\" *ngIf = \"isProcess\">Please wait we are under processing...</h4>\n        <h4 class=\"animtion\" *ngIf = \"!isProcess\">PLEASE UPLOAD DOCUMENTS..!!\n        </h4>\n      </div>\n      <div class=\"borderof mt30\">\n        <h5 class=\"agencyname\">{{profile?.name}}</h5>\n        <div class=\"row agencydetails\">\n          <div class=\"col-md-4 brdright p15\">\n            <div class=\"text-center\">\n              <img src=\"/assets/images/call-us-icon2.png\" alt=\"\">\n              <p>{{profile?.phone_number}}</p>\n            </div>\n          </div>\n          <div class=\"col-md-4 brdright p15\">\n            <div class=\"text-center\">\n              <img src=\"/assets/images/email-icon1.png\" alt=\"\">\n              <p>{{profile?.email}}</p>\n            </div>\n          </div>\n          <div class=\"col-md-4 p15\">\n            <div class=\"text-center\">\n              <img src=\"/assets/images/address-icon.png\" alt=\"\">\n              <p>{{profile?.address}},{{profile?.city}},</p>\n              <p style=\"margin-top: 0;\">{{profile?.state}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"bottombrdr\">\n           <img class=\"personimg\" src=\"/assets/images/personal-details-icoin.png\" alt=\"\">\n           <span class=\"prflname\">{{profile?.primary_contact.name}}</span>\n           <span class=\"brdrsmall hide-xs\"></span>\n           <span class=\"newline\">{{profile?.primary_contact.email}}</span>\n           <span class=\"brdrsmall hide-xs\"></span>\n           <span class=\"newline\">{{profile?.primary_contact.phone_number}}</span>\n        </div>\n      </div>\n    \n      <div class=\"borderof mt30 p30\" *ngIf=\"isiban\">\n        <div class=\"row wdth80\">\n          <div class=\"col-md-6 pl-3 pr-3\">\n            <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 13px \">\n                <label id=\"cmpnynamelbl\">Signatory Name</label>\n                <input  placeholder=\"Enter Signatory Name\" type=\"text\" class=\"form-control\" id=\"signatory_nameid\">\n            </div>\n          </div>\n          <div class=\"col-md-6 pl-3 pr-3\">\n            <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 13px \">\n              <label id=\"cmpnynamelbl\">Passport Number</label>\n              <input  placeholder=\" Enter Passport Number\" type=\"text\" class=\"form-control\" id=\"passport_numberid\">\n            </div>\n          </div>\n          <div class=\"col-md-6 pl-3 pr-3\">\n            <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 13px \">\n              <label id=\"cmpnynamelbl\">IATA License Number</label>\n              <input  placeholder=\" Enter IATA License Number\" type=\"text\" class=\"form-control\" id=\"iata_licenseid\">\n            </div>\n          </div>\n          <div class=\"col-md-6 pl-3 pr-3\">\n            <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 13px \">\n              <label id=\"cmpnynamelbl\">Mobile Number</label>\n              <select name=\"\" id=\"\" class=\"countrycode\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"countrycode\">\n                <option *ngFor=\"let item of country\" [value]=\"item.code\">{{item.code}} ({{item.iso_code}})</option>\n              </select>\n              <input  placeholder=\" Enter Mobile Number\" type=\"text\" class=\"form-control\" id=\"mobileid\" style=\"padding-left: 105px;\" numberOnly maxlength=\"15\">\n            </div>\n          </div>\n          <div class=\"col-md-6 pl-3 pr-3\">\n            <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 13px \">\n              <label id=\"cmpnynamelbl\">Commercial Regno</label>\n              <input  placeholder=\" Enter Commercial Regno\" type=\"text\" class=\"form-control\" id=\"commercial_regnoid\">\n            </div>\n          </div>\n          <div class=\"col-md-6 pl-3 pr-3\">\n            <div class=\"form-group \" style=\"margin-bottom: 0px;font-size: 13px \">\n              <label id=\"cmpnynamelbl\">Request Text</label>\n              <input  placeholder=\" Enter Request Text\" type=\"text\" class=\"form-control\" id=\"request_textid\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"d-flex justify-content-center\">\n          <h5 class=\"mydoc\"><img src=\"/assets/images/documents-upolad-icon.png\" alt=\"\"> My Documents</h5>\n        </div>\n\n        <div class=\"uploadfield\">\n          <div class=\"row\">\n            <div class=\"col-md-8 col-12 mtmb10\">\n              Copy of the Valid passport who will sign the contract:\n            </div>\n            <div class=\"col-md-4 col-12 mtmb10\">\n              <div class=\"file uploadbttn\">\n                CHOOSE FILE\n                <input type=\"file\" class=\"fileinput\" id=\"myFile\" (change)=\"passportfile($event);\" name=\"filename2\">\n              </div>\n              <div class=\"tickmark\" *ngIf=\"passport\">\n                <img src=\"/assets/images/check_mark.svg\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-md-8 col-12 mtmb10\">\n              copy of 200,000 SR Bank Guarantee Letter or 200,000 SR Cash Guarantee:\n            </div>\n            <div class=\"col-md-4 col-12 mtmb10\">\n              <div class=\"file uploadbttn\">\n                CHOOSE FILE\n                <input type=\"file\" class=\"fileinput\" id=\"myFile\" (change)=\"Bankletter($event);\" name=\"filename2\">\n              </div>\n              <div class=\"tickmark\" *ngIf=\"bank\">\n                <img src=\"/assets/images/check_mark.svg\" alt=\"\">\n              </div>\n            </div>\n            <div class=\"col-md-8 col-12 mtmb10\">\n              Sign and Stamp the Addendum of Contract:\n            </div>\n            <div class=\"col-md-4 col-12 mtmb10\">\n              <div class=\"file uploadbttn\">\n                CHOOSE FILE\n                <input type=\"file\" class=\"fileinput\" id=\"myFile\" (change)=\"Contract($event);\" name=\"filename2\">\n              </div>\n              <div class=\"tickmark\" *ngIf=\"sign\">\n                <img src=\"/assets/images/check_mark.svg\" alt=\"\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- <table class=\"table table-borderless uploadfield\">\n          <tbody>\n            <tr>\n              <td>Copy of the Valid passport who will sign the contract:</td>\n              <td>\n                <div class=\"file uploadbttn\">\n                  CHOOSE FILE\n                  <input type=\"file\" class=\"fileinput\" id=\"myFile\" (change)=\"passportfile($event);\" name=\"filename2\">\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>copy of 200,000 SR Bank Guarantee Letter or 200,000 SR Cash Guarantee:</td>\n              <td>\n                <div class=\"file uploadbttn\">\n                  CHOOSE FILE\n                  <input type=\"file\" class=\"fileinput\" id=\"myFile\" (change)=\"Bankletter($event);\" name=\"filename2\">\n                </div>\n              </td> \n            </tr>\n            <tr>\n              <td>Sign and Stamp the Addendum of Contract:</td>\n              <td>\n                <div class=\"file uploadbttn\">\n                  CHOOSE FILE\n                  <input type=\"file\" class=\"fileinput\" id=\"myFile\" (change)=\"Contract($event);\" name=\"filename2\">\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table> -->\n        \n        <div class=\"pddn d-flex justify-content-center mb-3\">\n            <button class=\"btnn\" (click)=\"uploaddoc()\">Submit</button>\n        </div>\n        <div class=\"d-flex justify-content-center\">\n          <p class=\"backlog\" (click)=\"navigatelogin();\">Back to Login</p>\n        </div>\n      </div>\n\n      <div class=\"d-flex justify-content-center mbmt textcentr\">\n        <div class=\"smallcenter\" style=\"width: 205px;\">\n            <div class=\"emailicon\">\n                <img style=\"margin-top: 2px;\" src=\"/assets/images/email-icon.png\" alt=\"\">\n            </div>\n            <div>\n                <p class=\"textemailphone\">Email Us</p>\n                <p class=\"textemailphone\">info@akbarumrah.com</p>\n            </div>\n        </div>\n        <div style=\"width: 158px;\">\n            <div class=\"emailicon\">\n                <img src=\"/assets/images/call-us-icon.png\" alt=\"\">\n            </div>\n            <div>\n                <p class=\"textemailphone\">Call Us</p>\n                <p class=\"textemailphone\">022-4903 7000</p>\n            </div>\n        </div>\n      </div>\n       \n    </div>\n  </div>\n  \n</div>\n\n<ngx-spinner id=\"hotelSpinner\" bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\"> \n  <div>\n    <img style=\"height: 303px;\" src=\"assets/images/giphy.webp\" alt=\"\">\n  </div>\n</ngx-spinner>\n");

/***/ }),

/***/ "./src/app/components/landing/login/login.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/landing/login/login.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 768px) {\n  .card {\n    margin-top: 100px;\n    margin-bottom: auto;\n    width: 86% !important;\n    margin-left: 7%;\n  }\n\n  .logoimg {\n    height: 68px !important;\n  }\n\n  .smallcenter {\n    text-align: center;\n  }\n\n  .emailicon {\n    float: none !important;\n    padding-right: 0 !important;\n    margin-bottom: 10px;\n  }\n\n  .bottomingpos {\n    bottom: -27px !important;\n    left: 1px !important;\n  }\n  .bottomingpos img {\n    height: 150px !important;\n  }\n\n  .backgroundimage {\n    overflow-x: hidden;\n  }\n\n  .p60 {\n    padding: 15px !important;\n  }\n\n  .extraimg {\n    display: none;\n  }\n\n  .pt60 {\n    padding-top: 10px !important;\n  }\n\n  .logtext {\n    margin-top: 10px !important;\n  }\n\n  .topimagepos {\n    right: 1px !important;\n    top: -17px !important;\n  }\n  .topimagepos img {\n    height: 92px !important;\n  }\n}\nhtml, body {\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  font-family: \"Numans\", sans-serif;\n}\n.card {\n  margin-top: 22px;\n  margin-bottom: auto;\n  background-color: white !important;\n  border-radius: unset;\n  box-shadow: 0 0 21px 0 #d4d6fe;\n  border-radius: 3px !important;\n}\n.relativepos {\n  position: relative;\n}\n.social_icon span {\n  font-size: 60px;\n  margin-left: 10px;\n  color: #FFC312;\n}\n.social_icon span:hover {\n  color: white;\n  cursor: pointer;\n}\n.card-header h3 {\n  color: white;\n}\n.social_icon {\n  position: absolute;\n  right: 20px;\n  top: -45px;\n}\n.input-group-prepend span {\n  width: 50px;\n  background-color: #ffffff;\n  color: black;\n}\n.input-group-prepend span img {\n  margin: auto;\n}\ninput:focus {\n  outline: 0 0 0 0 !important;\n  box-shadow: 0 0 0 0 !important;\n}\n.remember {\n  color: #525252;\n  font-size: 13px;\n  margin: 0;\n}\n.remember input {\n  margin-right: 5px;\n}\n.login_btn {\n  color: white;\n  width: 100%;\n  background-image: linear-gradient(to right, #027be9, #03c0f0);\n  outline: none;\n  border: none;\n  margin-top: 21px;\n  border-radius: 17px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 14px;\n  padding: 10px;\n}\n.links {\n  color: black;\n  font-weight: 500;\n  font-size: 14px;\n  margin-top: 25px;\n}\n.links a {\n  margin-left: 8px;\n}\n.textend {\n  text-align: end;\n}\n.frgtpsswrd {\n  color: #027ce9;\n  text-decoration: underline;\n}\n.frgtpsswrd:hover {\n  color: #027ce9;\n}\n.backgroundimage {\n  background: url(/assets/images/main-bg.png) no-repeat 100% center;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n}\n.bagroundblure {\n  margin-left: -15px;\n  margin-right: -15px;\n  min-height: 100vh;\n}\n.signupc {\n  color: #d50901;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.signupc:hover {\n  color: #d50901;\n}\n.pt60 {\n  padding-top: 60px;\n}\n.logtext {\n  text-align: center;\n  font-size: 21px;\n  margin-top: 23px;\n  color: #027ee9;\n  font-weight: 500;\n}\n.p60 {\n  padding: 60px;\n}\n.topimagepos {\n  position: absolute;\n  right: -38px;\n  top: -35px;\n}\n.topimagepos img {\n  height: 122px;\n}\n.bottomingpos {\n  position: absolute;\n  bottom: -41px;\n  left: -28px;\n}\n.bottomingpos img {\n  height: 220px;\n}\n.emailicon {\n  float: left;\n  padding-right: 15px;\n}\n.emailicon img {\n  height: 32px;\n}\n.textemailphone {\n  font-size: 13px;\n  color: #000;\n  margin-bottom: 0;\n}\n.mt45 {\n  margin-top: 45px;\n}\n.extraimg {\n  position: absolute;\n  left: 22%;\n}\n.mb11 {\n  margin-bottom: 11px;\n}\n.width500 {\n  width: 500px;\n  margin: auto;\n}\n.hight {\n  height: 50px;\n}\n#loginDiv input::-webkit-input-placeholder {\n  color: black;\n}\n#loginDiv input::-moz-placeholder {\n  color: black;\n}\n#loginDiv input::-ms-input-placeholder {\n  color: black;\n}\n#loginDiv input::placeholder {\n  color: black;\n}\n.logoimg {\n  height: 80px;\n}\n.btn {\n  background-image: linear-gradient(to right, #027be9, #03c0f0);\n  border: none;\n}\n.countrycode {\n  top: 32px;\n  font-size: 13px;\n  position: absolute;\n  left: 25px;\n  border: none;\n  background-color: #eeeeee;\n}\n.hidenormalbutton {\n  background-color: gray;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhYmVlbC9EZXNrdG9wL25ldy11bXJhaC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0VDQ0Y7O0VEQ0E7SUFDRSx1QkFBQTtFQ0VGOztFREFBO0lBQ0Usa0JBQUE7RUNHRjs7RUREQTtJQUNFLHNCQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtFQ0lGOztFREZBO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQ0tGO0VESkU7SUFDRSx3QkFBQTtFQ01KOztFREhBO0lBQ0Usa0JBQUE7RUNNRjs7RURKQTtJQUNFLHdCQUFBO0VDT0Y7O0VETEE7SUFDRSxhQUFBO0VDUUY7O0VETkE7SUFDRSw0QkFBQTtFQ1NGOztFRFBBO0lBQ0UsMkJBQUE7RUNVRjs7RURSQTtJQUNFLHFCQUFBO0lBQ0EscUJBQUE7RUNXRjtFRFZFO0lBQ0UsdUJBQUE7RUNZSjtBQUNGO0FEVEE7RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FDV0Y7QURUQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQ1lGO0FEVkE7RUFDRSxrQkFBQTtBQ2FGO0FEWEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDY0Y7QURaQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDZUY7QURiRTtFQUNBLFlBQUE7QUNnQkY7QURiRTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNnQkY7QURiRTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNnQkY7QURmRTtFQUNFLFlBQUE7QUNpQko7QURiRTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNnQkY7QURaRTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ2VGO0FEWkU7RUFFQSxpQkFBQTtBQ2NGO0FEWEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDY0o7QURWRTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2FGO0FEVkU7RUFDQSxnQkFBQTtBQ2FGO0FEWEU7RUFDRSxlQUFBO0FDY0o7QURaRTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQ2VKO0FEYkU7RUFDRSxjQUFBO0FDZ0JKO0FEZEU7RUFDRSxpRUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDRiwwQkFBQTtFQUNBLDRCQUFBO0FDaUJGO0FEZkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNrQkY7QURoQkE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDbUJGO0FEakJBO0VBQ0UsY0FBQTtBQ29CRjtBRGxCQTtFQUNFLGlCQUFBO0FDcUJGO0FEbkJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNzQkY7QURwQkE7RUFDRSxhQUFBO0FDdUJGO0FEckJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3dCRjtBRHZCRTtFQUNFLGFBQUE7QUN5Qko7QUR0QkE7RUFDRSxrQkFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDeUJKO0FEeEJJO0VBQ0UsYUFBQTtBQzBCTjtBRHZCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQzBCRjtBRHpCRTtFQUNFLFlBQUE7QUMyQko7QUR4QkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDMkJGO0FEekJBO0VBQ0UsZ0JBQUE7QUM0QkY7QUQxQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUM2QkY7QUQzQkE7RUFDRSxtQkFBQTtBQzhCRjtBRDVCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDK0JGO0FEN0JBO0VBQ0UsWUFBQTtBQ2dDRjtBRDVCRTtFQUNFLFlBQUE7QUMrQko7QURoQ0U7RUFDRSxZQUFBO0FDK0JKO0FEaENFO0VBQ0UsWUFBQTtBQytCSjtBRGhDRTtFQUNFLFlBQUE7QUMrQko7QUQzQkE7RUFDRSxZQUFBO0FDOEJGO0FEM0JBO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0FDOEJGO0FENUJBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUMrQkY7QUQ1QkE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FDK0JGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIHdpZHRoOiA4NiUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gIH1cbiAgLmxvZ29pbWd7XG4gICAgaGVpZ2h0OiA2OHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNtYWxsY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfSAgXG4gIC5lbWFpbGljb257XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuYm90dG9taW5ncG9ze1xuICAgIGJvdHRvbTogLTI3cHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAxcHggIWltcG9ydGFudDtcbiAgICBpbWd7XG4gICAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5iYWNrZ3JvdW5kaW1hZ2V7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG4gIC5wNjB7XG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5leHRyYWltZ3tcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wdDYwe1xuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnRcbiAgfVxuICAubG9ndGV4dHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRvcGltYWdlcG9zIHtcbiAgICByaWdodDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAtMTdweCAhaW1wb3J0YW50O1xuICAgIGltZ3tcbiAgICAgIGhlaWdodDogOTJweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuaHRtbCxib2R5e1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcbn1cbi5jYXJke1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiB1bnNldDtcbiAgYm94LXNoYWRvdzogMCAwIDIxcHggMCByZ2IoMjEyIDIxNCAyNTQpO1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbn1cbi5yZWxhdGl2ZXBvc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNvY2lhbF9pY29uIHNwYW57XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjRkZDMzEyO1xufVxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSAgXG4gIC5jYXJkLWhlYWRlciBoM3tcbiAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuc29jaWFsX2ljb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogLTQ1cHg7XG4gIH1cbiAgXG4gIC5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW57XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogYmxhY2s7XG4gIGltZ3tcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXN7XG4gIG91dGxpbmU6IDAgMCAwIDAgICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcbiAgXG4gIH1cbiAgXG4gIC5yZW1lbWJlcntcbiAgY29sb3I6ICM1MjUyNTI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAucmVtZW1iZXIgaW5wdXRcbiAge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICBcbiAgLmxvZ2luX2J0bntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDI3YmU5LCAjMDNjMGYwKTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBcbiAgXG4gIC5saW5rc3tcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbiAgXG4gIC5saW5rcyBhe1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIC50ZXh0ZW5ke1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgfVxuICAuZnJndHBzc3dyZHtcbiAgICBjb2xvcjogIzAyN2NlOTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAuZnJndHBzc3dyZDpob3ZlcntcbiAgICBjb2xvcjogIzAyN2NlOTtcbiAgfVxuICAuYmFja2dyb3VuZGltYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbWFpbi1iZy5wbmcpIG5vLXJlcGVhdCAxMDAlIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cbi5iYWdyb3VuZGJsdXJle1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLnNpZ251cGN7XG4gIGNvbG9yOiAjZDUwOTAxO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZ251cGM6aG92ZXJ7XG4gIGNvbG9yOiAjZDUwOTAxO1xufVxuLnB0NjB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuLmxvZ3RleHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW4tdG9wOiAyM3B4O1xuICBjb2xvcjogIzAyN2VlOTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wNjB7XG4gIHBhZGRpbmc6IDYwcHg7XG59XG4udG9waW1hZ2Vwb3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zOHB4O1xuICB0b3A6IC0zNXB4O1xuICBpbWd7XG4gICAgaGVpZ2h0OiAxMjJweDtcbiAgfVxufVxuLmJvdHRvbWluZ3Bvc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTQxcHg7XG4gICAgbGVmdDogLTI4cHg7XG4gICAgaW1ne1xuICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICB9XG59XG4uZW1haWxpY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGltZ3tcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cbn1cbi50ZXh0ZW1haWxwaG9uZXtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tdDQ1e1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuLmV4dHJhaW1ne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIyJTtcbn1cbi5tYjExe1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxuLndpZHRoNTAwe1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5oaWdodHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jbG9naW5EaXZ7XG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5cbi5sb2dvaW1ne1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5idG57XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAyN2JlOSwgIzAzYzBmMCk7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jb3VudHJ5Y29kZXtcbiAgdG9wOiAzMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XG59XG5cbi5oaWRlbm9ybWFsYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICB3aWR0aDogODYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICB9XG5cbiAgLmxvZ29pbWcge1xuICAgIGhlaWdodDogNjhweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNtYWxsY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZW1haWxpY29uIHtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmJvdHRvbWluZ3BvcyB7XG4gICAgYm90dG9tOiAtMjdweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDFweCAhaW1wb3J0YW50O1xuICB9XG4gIC5ib3R0b21pbmdwb3MgaW1nIHtcbiAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYmFja2dyb3VuZGltYWdlIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cblxuICAucDYwIHtcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZXh0cmFpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucHQ2MCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sb2d0ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudG9waW1hZ2Vwb3Mge1xuICAgIHJpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgICB0b3A6IC0xN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRvcGltYWdlcG9zIGltZyB7XG4gICAgaGVpZ2h0OiA5MnB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmh0bWwsIGJvZHkge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bWFuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICBib3gtc2hhZG93OiAwIDAgMjFweCAwICNkNGQ2ZmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xufVxuXG4ucmVsYXRpdmVwb3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zb2NpYWxfaWNvbiBzcGFuIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICNGRkMzMTI7XG59XG5cbi5zb2NpYWxfaWNvbiBzcGFuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWhlYWRlciBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNvY2lhbF9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAtNDVweDtcbn1cblxuLmlucHV0LWdyb3VwLXByZXBlbmQgc3BhbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogYmxhY2s7XG59XG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFuIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwIDAgMCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcbn1cblxuLnJlbWVtYmVyIHtcbiAgY29sb3I6ICM1MjUyNTI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucmVtZW1iZXIgaW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmxvZ2luX2J0biB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAyN2JlOSwgIzAzYzBmMCk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMjFweDtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmxpbmtzIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5saW5rcyBhIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnRleHRlbmQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5mcmd0cHNzd3JkIHtcbiAgY29sb3I6ICMwMjdjZTk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZnJndHBzc3dyZDpob3ZlciB7XG4gIGNvbG9yOiAjMDI3Y2U5O1xufVxuXG4uYmFja2dyb3VuZGltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL21haW4tYmcucG5nKSBuby1yZXBlYXQgMTAwJSBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmJhZ3JvdW5kYmx1cmUge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2lnbnVwYyB7XG4gIGNvbG9yOiAjZDUwOTAxO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lnbnVwYzpob3ZlciB7XG4gIGNvbG9yOiAjZDUwOTAxO1xufVxuXG4ucHQ2MCB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4ubG9ndGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW4tdG9wOiAyM3B4O1xuICBjb2xvcjogIzAyN2VlOTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnA2MCB7XG4gIHBhZGRpbmc6IDYwcHg7XG59XG5cbi50b3BpbWFnZXBvcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zOHB4O1xuICB0b3A6IC0zNXB4O1xufVxuLnRvcGltYWdlcG9zIGltZyB7XG4gIGhlaWdodDogMTIycHg7XG59XG5cbi5ib3R0b21pbmdwb3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTQxcHg7XG4gIGxlZnQ6IC0yOHB4O1xufVxuLmJvdHRvbWluZ3BvcyBpbWcge1xuICBoZWlnaHQ6IDIyMHB4O1xufVxuXG4uZW1haWxpY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4uZW1haWxpY29uIGltZyB7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLnRleHRlbWFpbHBob25lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm10NDUge1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuXG4uZXh0cmFpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIyJTtcbn1cblxuLm1iMTEge1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxuXG4ud2lkdGg1MDAge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmhpZ2h0IHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jbG9naW5EaXYgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubG9nb2ltZyB7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAyN2JlOSwgIzAzYzBmMCk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvdW50cnljb2RlIHtcbiAgdG9wOiAzMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuXG4uaGlkZW5vcm1hbGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/landing/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/landing/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/notification.service */ "./src/app/common/services/notification.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_stores_app_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/stores/app.store */ "./src/app/stores/app.store.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _common_services_common_api_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/services/common-api-services */ "./src/app/common/services/common-api-services.ts");












//import {} from '../../../helpers/'
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, translate, appStore, fb, notifyService, commonApiService, cookie) {
        this.http = http;
        this.router = router;
        this.translate = translate;
        this.appStore = appStore;
        this.fb = fb;
        this.notifyService = notifyService;
        this.commonApiService = commonApiService;
        this.cookie = cookie;
        this.countrycode1 = '91';
        this.countrycode2 = '91';
        this.invalidPhn = false;
        this.timeLeft = 0;
        this.rememberme = false;
        this.token = localStorage.getItem('accesstoken');
        this.submit = function () {
            var _this = this;
            if ((this.username == null) || (this.password == null)) {
                alert("Fields can not be empty");
                return;
            }
            else {
                if (this.rememberme) {
                    this.setDataForCoockies();
                }
                var body = { 'username': this.username, 'password': this.password };
                this.http.post('https://b2b.betatest.akbarumrah.com/apis/staff/login/', body).subscribe(function (data) {
                    _this.access = data.access;
                    _this.etype = data.staff.employer_type;
                    localStorage.setItem('accesstoken', data.access);
                    if (_this.rememberme) {
                        localStorage.setItem('isTouched', 'true');
                    }
                    if (!_this.rememberme) {
                        localStorage.setItem('isTouched', null);
                        _this.cookie.set("userName", null);
                        _this.cookie.set("password", null);
                    }
                    localStorage.setItem('empId', data.staff.employer_id);
                    if (localStorage.getItem('accesstoken') != null) {
                        if (_this.etype == 'branch') {
                            _this.notifyService.showSuccess(_this.translate.instant('success !!'));
                            _this.appStore.currentUser = _this.etype;
                            localStorage.setItem('currentUser', _this.etype);
                            _this.router.navigate(["firstpage/"]);
                        }
                        if (_this.etype == 'agency') {
                            if (data.staff.is_approved == 'False') {
                                _this.notifyService.showWarning(_this.translate.instant('processing !!'));
                                _this.router.navigate(["upload", data.staff.employer_id]);
                            }
                            else {
                                _this.notifyService.showSuccess(_this.translate.instant('success !!'));
                                _this.appStore.currentUser = _this.etype;
                                localStorage.setItem('currentUser', _this.etype);
                                _this.router.navigate(["first/"]);
                            }
                        }
                    }
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: _this.translate.instant('Invalid Username or Password'),
                    });
                });
            }
        };
        this.frmSignup = fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonApiService.getCountries().subscribe(function (res) {
            _this.countries = res;
        });
        this.checkTokenExists();
    };
    LoginComponent.prototype.rememberMe = function (evt) {
        if (evt.checked) {
            this.rememberme = true;
        }
        else {
            this.rememberme = false;
        }
    };
    LoginComponent.prototype.checkTokenExists = function () {
        if (localStorage.getItem("accesstoken") != null) {
            if (localStorage.getItem("isTouched") == 'true') {
                this.username = this.cookie.get("userName");
                this.password = this.cookie.get("password");
                this.rememberme = true;
            }
        }
    };
    LoginComponent.prototype.setDataForCoockies = function () {
        this.cookie.set("userName", this.username);
        this.cookie.set("password", this.password);
    };
    LoginComponent.prototype.setBoolean = function () {
        this.rememberme = !this.rememberme;
    };
    LoginComponent.prototype.ngAfterViewChecked = function () {
        this.translate.use(this.appStore.langCode);
        if (this.appStore.langCode == "ar-AE") {
            document.getElementById("body").classList.add('mirror_css');
        }
        else {
            document.getElementById("body").classList.remove('mirror_css');
        }
    };
    LoginComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    LoginComponent.prototype.navigatesignup = function () {
        this.router.navigate(["/signup"]);
    };
    LoginComponent.prototype.onSendOtpButtonClicked = function () {
        var _this = this;
        var data = { "phone_number": this.countrycode1 + this.phoneNumber, "phn_country_code": this.countrycode1 };
        this.commonApiService.getOtp(data).subscribe(function (res) {
            if (res.status == 'success') {
                _this.timeLeft = res.validity_in_minutes * 60;
                document.getElementById("openModalButton").click();
                _this.startTimer();
            }
            if (res.status == 'failure') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: _this.translate.instant(res.errors),
                });
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: _this.translate.instant('Something went wrong'),
            });
        });
    };
    LoginComponent.prototype.onChangePasswordBtnClicked = function () {
        var _this = this;
        var data = {
            "phone_number": this.countrycode2 + this.rePhoneNumber,
            "otp": this.otp,
            "password": this.ePassword,
            "confirmation_password": this.cPassword
        };
        this.commonApiService.changePassword(data).subscribe(function (res) {
            if (res.status == 'success') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    icon: 'success',
                    title: 'Success',
                    text: _this.translate.instant(res.message),
                });
            }
            if (res.status == 'failure') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    icon: 'error',
                    title: 'Ooops',
                    text: _this.translate.instant(res.errors[0]),
                });
            }
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: _this.translate.instant('Something went wrong'),
            });
        });
    };
    LoginComponent.prototype.hidebutton = function () {
        if (this.phoneNumber == null || this.phoneNumber == "") {
            return false;
        }
        return true;
    };
    LoginComponent.prototype.hideForgotPssBtn = function () {
        if (this.rePhoneNumber == null || this.rePhoneNumber == "") {
            return false;
        }
        if (this.otp == null || this.otp == "") {
            return false;
        }
        if (this.ePassword == null || this.ePassword == "") {
            return false;
        }
        if (this.cPassword == null || this.cPassword == "") {
            return false;
        }
        if (this.ePassword != this.cPassword) {
            return false;
        }
        return true;
    };
    LoginComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else if (_this.timeLeft == 0) {
                document.getElementById("forgotClose").click();
                clearInterval(_this.interval);
            }
        }, 1000);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: src_app_stores_app_store__WEBPACK_IMPORTED_MODULE_7__["AppStore"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _common_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
        { type: _common_services_common_api_services__WEBPACK_IMPORTED_MODULE_10__["CommonApiService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/login/login.component.html")).default,
            providers: [_common_services_common_api_services__WEBPACK_IMPORTED_MODULE_10__["CommonApiService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/landing/login/login.component.scss")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/signup/signup.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/landing/signup/signup.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n}\n\n@media only screen and (max-width: 768px) {\n  .logtext {\n    margin-top: 10px !important;\n  }\n\n  .btnn {\n    width: 60% !important;\n  }\n\n  .logoimg {\n    height: 68px !important;\n  }\n\n  .form-container {\n    margin-top: 15px !important;\n  }\n\n  .pt30 {\n    padding-top: 10px !important;\n  }\n\n  .form-container {\n    width: 93% !important;\n  }\n\n  .emailicon {\n    float: none !important;\n    padding-right: 0 !important;\n    margin-bottom: 10px;\n  }\n\n  .extraimg {\n    display: none;\n  }\n\n  .form-container {\n    padding: 10px !important;\n  }\n\n  .pl10 {\n    padding-left: 0 !important;\n  }\n\n  .areu {\n    font-size: 12px !important;\n    margin-top: 3px !important;\n  }\n\n  .textcentr {\n    text-align: center;\n  }\n}\n\n.pl10 {\n  padding-left: 10px;\n}\n\n.bg {\n  background: url(/assets/images/main-bg.png) no-repeat 100% center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n}\n\n.form-container {\n  width: 60%;\n  padding: 30px;\n  border-radius: 3px;\n  box-shadow: 0 0 21px 0 #d4d6fe;\n  margin: 26px auto;\n  background-color: #ffffff;\n  z-index: 9;\n}\n\n.form-group label {\n  margin-left: 6px;\n  font-size: 13px;\n}\n\n.row {\n  display: flex;\n  justify-content: center;\n}\n\n.btnn {\n  width: 50%;\n  height: 40px;\n  margin-top: 10px;\n  border-radius: 20px;\n  background-image: linear-gradient(to right, #027be9, #03c0f0);\n  color: #fff;\n  outline: none;\n  border: none;\n  font-weight: 600;\n}\n\n#username {\n  margin-top: 20px;\n}\n\n#input1 {\n  padding-left: 10px;\n}\n\n#input2 {\n  padding-left: 10px;\n}\n\n.positionicon {\n  position: absolute;\n  right: 10px;\n  top: 5px;\n  z-index: 99;\n}\n\n.frgt {\n  text-align: end;\n  color: #d23921;\n  font-weight: 400;\n  cursor: pointer;\n}\n\n.createreg {\n  padding-top: 10px;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.createreg strong {\n  color: #d50901;\n  text-decoration: underline;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.mt20 {\n  margin-top: 20px;\n}\n\n.mt10 {\n  margin-top: 10px;\n}\n\n.form-control {\n  padding-left: 10px;\n  font-size: 13px;\n}\n\n.form-group {\n  margin-top: 7px;\n}\n\n.areu {\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.extraimg {\n  top: 0;\n  position: absolute;\n  left: 22%;\n}\n\n.pt30 {\n  padding-top: 70px;\n}\n\n.logtext {\n  text-align: center;\n  font-size: 20px;\n  margin-top: 23px;\n  color: #027ee9;\n  font-weight: 500;\n}\n\n.emailicon {\n  float: left;\n  padding-right: 15px;\n}\n\n.emailicon img {\n  height: 32px;\n}\n\n.textemailphone {\n  font-size: 13px;\n  color: #000;\n  margin-bottom: 0;\n}\n\n.smallcenter {\n  margin-right: 35px;\n}\n\n.mb50 {\n  margin-bottom: 80px;\n}\n\n.logoimg {\n  height: 80px;\n}\n\n.countrycode {\n  top: 38px;\n  font-size: 13px;\n  position: absolute;\n  left: 25px;\n  border: none;\n  background-color: #eeeeee;\n}\n\n.countrycode:focus {\n  border: none;\n  outline: none;\n}\n\n.mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #027ee9 !important;\n}\n\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #027ee9 !important;\n}\n\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #027ee9 !important;\n}\n\n.cursr {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhYmVlbC9EZXNrdG9wL25ldy11bXJhaC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQUo7O0FERUU7RUFDQztJQUNFLDJCQUFBO0VDQ0g7O0VEQ0M7SUFDRSxxQkFBQTtFQ0VIOztFREFDO0lBQ0UsdUJBQUE7RUNHSDs7RUREQztJQUNFLDJCQUFBO0VDSUg7O0VERkU7SUFDRSw0QkFBQTtFQ0tKOztFREhFO0lBQ0UscUJBQUE7RUNNSjs7RURKRTtJQUNFLHNCQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtFQ09KOztFRExFO0lBQ0UsYUFBQTtFQ1FKOztFRE5FO0lBQ0Usd0JBQUE7RUNTSjs7RURQRTtJQUNFLDBCQUFBO0VDVUo7O0VEUkU7SUFDRSwwQkFBQTtJQUNBLDBCQUFBO0VDV0o7O0VEVEU7SUFDRSxrQkFBQTtFQ1lKO0FBQ0Y7O0FEVkU7RUFDRSxrQkFBQTtBQ1lKOztBRFZFO0VBQ0UsaUVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNhSjs7QURWRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDYUo7O0FEVkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNhTjs7QURWRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ2FKOztBRFZFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2FKOztBRFZFO0VBQ0UsZ0JBQUE7QUNhSjs7QURWRTtFQUNFLGtCQUFBO0FDYUo7O0FEVkU7RUFDRSxrQkFBQTtBQ2FKOztBRFhFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNjSjs7QURaRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDZUo7O0FEYkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2dCSjs7QURmSTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2lCTjs7QURkRTtFQUNFLGdCQUFBO0FDaUJKOztBRGZFO0VBQ0UsZ0JBQUE7QUNrQko7O0FEaEJFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDbUJKOztBRGpCRTtFQUNFLGVBQUE7QUNvQko7O0FEakJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDb0JKOztBRGxCRTtFQUNFLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNxQko7O0FEbkJFO0VBQ0UsaUJBQUE7QUNzQko7O0FEcEJFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN1Qko7O0FEckJFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDd0JKOztBRHZCSTtFQUNFLFlBQUE7QUN5Qk47O0FEdEJFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3lCSjs7QUR2QkU7RUFDRSxrQkFBQTtBQzBCSjs7QUR4QkU7RUFDRSxtQkFBQTtBQzJCSjs7QUR6QkU7RUFDRSxZQUFBO0FDNEJKOztBRDFCRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDNkJKOztBRDNCRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDOEJKOztBRDVCRTtFQUNFLG9DQUFBO0FDK0JKOztBRDdCQTtFQUNJLGdDQUFBO0FDZ0NKOztBRDlCQTtFQUNFLG9DQUFBO0FDaUNGOztBRC9CQTtFQUNFLGVBQUE7QUNrQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzowO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgLmxvZ3RleHR7XG4gICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgIH1cbiAgIC5idG5ue1xuICAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG4gICB9XG4gICAubG9nb2ltZ3tcbiAgICAgaGVpZ2h0OiA2OHB4ICFpbXBvcnRhbnQ7XG4gICB9XG4gICAuZm9ybS1jb250YWluZXJ7XG4gICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgIH1cbiAgICAucHQzMHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mb3JtLWNvbnRhaW5lcntcbiAgICAgIHdpZHRoOiA5MyUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmVtYWlsaWNvbntcbiAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAuZXh0cmFpbWd7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuZm9ybS1jb250YWluZXJ7XG4gICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wbDEwe1xuICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5hcmV1IHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC50ZXh0Y2VudHJ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIC5wbDEwe1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuYmd7XG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL21haW4tYmcucG5nKSBuby1yZXBlYXQgMTAwJSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICB9XG4gIFxuICAuZm9ybS1jb250YWluZXJ7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjFweCAwIHJnYigyMTIgMjE0IDI1NCk7XG4gICAgbWFyZ2luOiAyNnB4IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB6LWluZGV4OiA5O1xuICB9XG4gIC5mb3JtLWdyb3Vwe1xuICAgIGxhYmVse1xuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cbiAgLnJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuYnRubntcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDI3YmU5LCAjMDNjMGYwKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIFxuICAjdXNlcm5hbWV7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgI2lucHV0MXtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgXG4gICNpbnB1dDJ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5wb3NpdGlvbmljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNXB4O1xuICAgIHotaW5kZXg6IDk5O1xuICB9XG4gIC5mcmd0e1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBjb2xvcjogI2QyMzkyMTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuY3JlYXRlcmVne1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHN0cm9uZ3tcbiAgICAgIGNvbG9yOiAjZDUwOTAxO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuICAubXQyMHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC5tdDEwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLmZvcm0tY29udHJvbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgfVxuICBcbiAgLmFyZXV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLmV4dHJhaW1ne1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjIlO1xuICB9XG4gIC5wdDMwe1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICB9XG4gIC5sb2d0ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjNweDtcbiAgICBjb2xvcjogIzAyN2VlOTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5lbWFpbGljb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgaW1ne1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIH1cbiAgfVxuICAudGV4dGVtYWlscGhvbmV7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLnNtYWxsY2VudGVye1xuICAgIG1hcmdpbi1yaWdodDogMzVweDtcbiAgfVxuICAubWI1MHtcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICB9XG4gIC5sb2dvaW1ne1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuICAuY291bnRyeWNvZGV7XG4gICAgdG9wOiAzOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xuICB9XG4gIC5jb3VudHJ5Y29kZTpmb2N1c3tcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyN2VlOSAhaW1wb3J0YW50O1xuICB9XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6ICMwMjdlZTkgIWltcG9ydGFudDtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGV7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjdlZTkgIWltcG9ydGFudDtcbn1cbi5jdXJzcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9ndGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bm4ge1xuICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sb2dvaW1nIHtcbiAgICBoZWlnaHQ6IDY4cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0MzAge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MyUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5lbWFpbGljb24ge1xuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuZXh0cmFpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wbDEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcmV1IHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC50ZXh0Y2VudHIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLnBsMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9tYWluLWJnLnBuZykgbm8tcmVwZWF0IDEwMCUgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDAgMjFweCAwICNkNGQ2ZmU7XG4gIG1hcmdpbjogMjZweCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiA5O1xufVxuXG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRubiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDI3YmU5LCAjMDNjMGYwKTtcbiAgY29sb3I6ICNmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI3VzZXJuYW1lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI2lucHV0MSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuI2lucHV0MiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnBvc2l0aW9uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNXB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmZyZ3Qge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiAjZDIzOTIxO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jcmVhdGVyZWcge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNyZWF0ZXJlZyBzdHJvbmcge1xuICBjb2xvcjogI2Q1MDkwMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm10MjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubXQxMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5hcmV1IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZXh0cmFpbWcge1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjIlO1xufVxuXG4ucHQzMCB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xufVxuXG4ubG9ndGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyM3B4O1xuICBjb2xvcjogIzAyN2VlOTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmVtYWlsaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLmVtYWlsaWNvbiBpbWcge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi50ZXh0ZW1haWxwaG9uZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zbWFsbGNlbnRlciB7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cblxuLm1iNTAge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4ubG9nb2ltZyB7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmNvdW50cnljb2RlIHtcbiAgdG9wOiAzOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuXG4uY291bnRyeWNvZGU6Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjdlZTkgIWltcG9ydGFudDtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogIzAyN2VlOSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyN2VlOSAhaW1wb3J0YW50O1xufVxuXG4uY3Vyc3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/landing/signup/signup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/landing/signup/signup.component.ts ***!
  \***************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _common_services_common_api_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/services/common-api-services */ "./src/app/common/services/common-api-services.ts");







var SignupComponent = /** @class */ (function () {
    function SignupComponent(common, router, formBuilder, spinner) {
        this.common = common;
        this.router = router;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.submitted = false;
        this.licensefield = false;
        this.bttnshow = false;
        this.slctcntry = 'India';
        this.countrycode1 = '91';
        this.signupForm = formBuilder.group({
            cmpnyname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phnnumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            cmpnyadress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phnnumberp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            cnfrmpasswrd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    Object.defineProperty(SignupComponent.prototype, "f", {
        get: function () { return this.signupForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.common.getCountries().subscribe(function (res) {
            console.log(res);
            _this.countries = res;
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("1");
        this.spinner.show();
        this.submitted = true;
        if (this.signupForm.invalid) {
            console.log("2");
            this.spinner.hide();
            return;
        }
        if (this.licensefield) {
            console.log("3");
            if (document.getElementById("license").value == "") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please enter License Number',
                });
                this.spinner.hide();
                return;
            }
            if (document.getElementById("iban").value == "") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please enter IBAN Number',
                });
                this.spinner.hide();
                return;
            }
        }
        if (this.signupForm.value.password != this.signupForm.value.cnfrmpasswrd) {
            console.log("4");
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password and Confirm Password is not match',
            });
            return;
        }
        else {
            console.log("5");
            if (this.licensefield) {
                var body = {
                    "name": this.signupForm.value.cmpnyname,
                    "iban": document.getElementById("iban").value,
                    "licence_no": document.getElementById("license").value,
                    "address": this.signupForm.value.cmpnyadress,
                    "city": this.signupForm.value.city,
                    "state": this.signupForm.value.state,
                    "country": this.slctcntry,
                    "phn_country_code": this.countrycode1,
                    "phone_number": this.signupForm.value.phnnumber,
                    "email": this.signupForm.value.email,
                    "primary_contact": {
                        "phn_country_code": this.countrycode1,
                        "phone_number": this.signupForm.value.phnnumberp,
                        "name": this.signupForm.value.cname,
                        "password": this.signupForm.value.password,
                        "confirmation_password": this.signupForm.value.cnfrmpasswrd
                    }
                };
                console.log(body);
                this.common.signup(body).subscribe(function (data) {
                    console.log(data);
                    _this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: true,
                    }).then(function (result) {
                        if (result.value) {
                            _this.router.navigate(["/login"]);
                        }
                    });
                }, function (error) {
                    _this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Contact person phone number already exist',
                    });
                });
            }
            else {
                var body = {
                    "name": this.signupForm.value.cmpnyname,
                    "iban": "",
                    "licence_no": "",
                    "address": this.signupForm.value.cmpnyadress,
                    "city": this.signupForm.value.city,
                    "state": this.signupForm.value.state,
                    "country": this.slctcntry,
                    "phn_country_code": this.countrycode1,
                    "phone_number": this.signupForm.value.phnnumber,
                    "email": this.signupForm.value.email,
                    "primary_contact": {
                        "phn_country_code": this.countrycode1,
                        "phone_number": this.signupForm.value.phnnumberp,
                        "name": this.signupForm.value.cname,
                        "password": this.signupForm.value.password,
                        "confirmation_password": this.signupForm.value.cnfrmpasswrd
                    }
                };
                console.log(body);
                this.common.signup(body).subscribe(function (data) {
                    console.log(data);
                    _this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: true,
                    }).then(function (result) {
                        if (result.value) {
                            _this.router.navigate(["/login"]);
                        }
                    });
                }, function (error) {
                    _this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Contact person phone number already exist',
                    });
                });
            }
        }
    };
    SignupComponent.prototype.navigatelogin = function () {
        this.router.navigate(["/login"]);
    };
    SignupComponent.prototype.licenseyes = function () {
        this.bttnshow = true;
        this.licensefield = true;
    };
    SignupComponent.prototype.licenseno = function () {
        this.licensefield = false;
        this.bttnshow = true;
    };
    SignupComponent.prototype.changecntry = function (newObj) {
        var _this = this;
        this.countries.forEach(function (obj) {
            if (obj.code == newObj) {
                console.log(obj);
                _this.slctcntry = obj.name;
            }
        });
    };
    SignupComponent.prototype.changecntrycode = function (newObj) {
        var _this = this;
        this.countries.forEach(function (obj) {
            if (obj.name == newObj) {
                console.log(obj);
                _this.countrycode1 = obj.code;
            }
        });
    };
    SignupComponent.prototype.omit_special_char = function (event) {
        var k;
        k = event.charCode; //         k = event.keyCode;  (Both can be used)
        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _common_services_common_api_services__WEBPACK_IMPORTED_MODULE_6__["CommonApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/signup/signup.component.html")).default,
            providers: [_common_services_common_api_services__WEBPACK_IMPORTED_MODULE_6__["CommonApiService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/components/landing/signup/signup.component.scss")).default]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/upload-docs/upload-docs.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/landing/upload-docs/upload-docs.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 768px) {\n  .pt50 {\n    padding-top: 10px !important;\n  }\n\n  .extraimg {\n    display: none;\n  }\n\n  .animtion {\n    font-size: 18px !important;\n  }\n\n  .pt30 {\n    padding-top: 15px !important;\n  }\n\n  .mt30 {\n    margin-top: 20px !important;\n  }\n\n  .agencyname {\n    font-size: 20px !important;\n    padding-top: 20px !important;\n  }\n\n  .hide-xs {\n    display: none !important;\n  }\n\n  .newline {\n    display: block;\n    padding-left: 40px;\n  }\n\n  .bottombrdr {\n    padding: 12px !important;\n  }\n\n  .p30 {\n    padding: 10px !important;\n  }\n\n  .wdth80 {\n    width: 100% !important;\n  }\n\n  .btnn {\n    width: 60% !important;\n  }\n\n  .textcentr {\n    text-align: center;\n  }\n\n  .emailicon {\n    float: none !important;\n    padding-right: 0 !important;\n    margin-bottom: 10px;\n  }\n}\n.postionabs {\n  overflow: auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 1059;\n}\n.pt50 {\n  padding-top: 50px;\n}\n.extraimg {\n  position: absolute;\n  left: 22%;\n}\n.pt30 {\n  padding-top: 30px;\n}\n.mt30 {\n  margin-top: 30px;\n}\n.borderof {\n  box-shadow: 0 0 21px 0 rgba(0, 0, 0, 0.17);\n  background-color: white;\n  position: relative;\n  border-radius: 3px;\n}\n.agencyname {\n  text-align: center;\n  font-size: 25px;\n  text-transform: capitalize;\n  padding-top: 30px;\n}\n.agencydetails {\n  margin: 0;\n  padding: 20px 0;\n}\n.agencydetails .brdright {\n  border-right: 1px solid #e6e6e6;\n}\n.agencydetails .p15 {\n  padding: 15px;\n}\n.agencydetails p {\n  margin-top: 10px;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.bottombrdr {\n  padding: 12px 30px;\n  background-color: #ebebeb;\n  font-size: 13px;\n}\n.bottombrdr .brdrsmall {\n  border-right: 1px solid;\n  height: 17px;\n  margin: 0 14px;\n}\n.bottombrdr .personimg {\n  height: 25px;\n  margin-right: 14px;\n  margin-bottom: 5px;\n}\n.bottombrdr .prflname {\n  font-size: 17px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.p30 {\n  padding: 20px;\n}\n.form-group label {\n  margin: 15px 5px 5px 10px;\n}\n.wdth80 {\n  width: 80%;\n  margin: auto;\n}\n.form-control {\n  font-size: 13px;\n}\n.mydoc {\n  margin-top: 40px;\n  text-transform: capitalize;\n  font-size: 22px;\n}\n.mydoc img {\n  height: 47px;\n}\n.mtmb10 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.uploadbttn {\n  float: right;\n  font-weight: bold;\n  position: relative;\n  overflow: hidden;\n  border: 2px solid #58a9ef;\n  font-size: 14px;\n  padding: 2px 27px;\n  width: 150px;\n  border-radius: 20px;\n  color: #027ce9;\n  cursor: pointer;\n}\n.tickmark {\n  position: absolute;\n  top: -4px;\n}\n.tickmark img {\n  height: 35px;\n}\n.fileinput {\n  position: absolute;\n  font-size: 50px;\n  opacity: 0;\n  left: 0;\n  top: 0;\n  height: 25px;\n  width: 144px;\n  cursor: pointer;\n}\n.uploadfield {\n  width: 90%;\n  margin: auto;\n  margin-top: 30px;\n  font-size: 14px;\n}\n.btnn {\n  text-transform: uppercase;\n  font-weight: 600;\n  width: 30%;\n  height: 40px;\n  margin-top: 10px;\n  border-radius: 20px;\n  background-image: linear-gradient(to right, #027be9, #03c0f0);\n  color: #fff;\n  outline: none;\n  border: none;\n}\n.backlog {\n  color: #d50901;\n  font-size: 18px;\n  text-decoration: underline;\n  font-weight: 500;\n  cursor: pointer;\n}\n.smallcenter {\n  margin-right: 35px;\n}\n.emailicon {\n  float: left;\n  padding-right: 15px;\n}\n.emailicon img {\n  height: 32px;\n}\n.textemailphone {\n  font-size: 13px;\n  color: #000;\n  margin-bottom: 0;\n}\n.mbmt {\n  padding-top: 30px;\n  padding-bottom: 40px;\n}\n.bordr {\n  margin-top: 30px;\n  border: 1px solid gray;\n  min-height: 50px;\n  box-shadow: 0px 0px 17px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  overflow: hidden;\n}\n.backgroundimage {\n  background: url(/assets/images/main-bg.png) no-repeat 100% center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-attachment: fixed;\n}\n.format {\n  text-align: center;\n  font-weight: 300;\n  font-size: 14px;\n  margin-top: 12px;\n}\n.pddn {\n  margin-top: 25px;\n}\n.animtion {\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 21px;\n  color: white;\n  -webkit-animation-name: plswait;\n          animation-name: plswait;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes plswait {\n  from {\n    color: white;\n  }\n  to {\n    color: #027ee9;\n  }\n}\n@keyframes plswait {\n  from {\n    color: white;\n  }\n  to {\n    color: #027ee9;\n  }\n}\n.agencyhead {\n  text-align: center;\n  font-size: 18px;\n  text-decoration: underline;\n}\n.ibandetails {\n  margin-top: 30px;\n  background-color: white;\n  border: 1px solid #d8d7d7;\n  box-shadow: 0 10px 6px -6px #777;\n}\n.topborder {\n  background-color: white;\n  border: 1px solid #d8d7d7;\n  box-shadow: 0 10px 6px -6px #777;\n}\n#hotelSpinner .la-ball-spin-clockwise {\n  display: none;\n}\n#hotelSpinner .loader_message {\n  padding: 36px 72px;\n  background-color: #ffffff;\n  border-radius: 6px;\n  text-align: center;\n}\n#hotelSpinner .loader_message p {\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n#hotelSpinner .overlay {\n  position: absolute;\n  z-index: 1010;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 100%;\n  height: 100%;\n}\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #027ce9;\n  margin: -4px 0 0 -4px;\n}\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n.lds-roller div:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n.lds-roller div:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n.lds-roller div:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n.lds-roller div:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n.lds-roller div:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n.lds-roller div:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n.lds-roller div:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n.lds-roller div:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.hotel-loader {\n  background-image: url(/assets/images/hotel.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 35px;\n}\n.countrycode {\n  top: 48px;\n  font-size: 13px;\n  position: absolute;\n  left: 25px;\n  border: none;\n  background-color: #eeeeee;\n}\n.countrycode:focus {\n  border: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhYmVlbC9EZXNrdG9wL25ldy11bXJhaC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy91cGxvYWQtZG9jcy91cGxvYWQtZG9jcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3VwbG9hZC1kb2NzL3VwbG9hZC1kb2NzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSw0QkFBQTtFQ0NGOztFRENBO0lBQ0UsYUFBQTtFQ0VGOztFREFBO0lBQ0UsMEJBQUE7RUNHRjs7RUREQTtJQUNFLDRCQUFBO0VDSUY7O0VERkE7SUFDRSwyQkFBQTtFQ0tGOztFREhBO0lBQ0UsMEJBQUE7SUFDQSw0QkFBQTtFQ01GOztFREpBO0lBQ0Usd0JBQUE7RUNPRjs7RURMQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQ1FGOztFRE5BO0lBQ0Usd0JBQUE7RUNTRjs7RURQQTtJQUNFLHdCQUFBO0VDVUY7O0VEUkE7SUFDRSxzQkFBQTtFQ1dGOztFRFRBO0lBQ0UscUJBQUE7RUNZRjs7RURWQTtJQUNFLGtCQUFBO0VDYUY7O0VEWEE7SUFDRSxzQkFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7RUNjRjtBQUNGO0FEWkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQ2NGO0FEWkE7RUFDRSxpQkFBQTtBQ2VGO0FEYkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNnQkY7QURkQTtFQUNFLGlCQUFBO0FDaUJGO0FEZkE7RUFDRSxnQkFBQTtBQ2tCRjtBRGhCQTtFQUNFLDBDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbUJGO0FEakJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ29CRjtBRGxCQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FDcUJGO0FEcEJFO0VBQ0UsK0JBQUE7QUNzQko7QURwQkU7RUFDRSxhQUFBO0FDc0JKO0FEcEJFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNzQko7QURuQkE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ3NCRjtBRHJCRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUN1Qko7QURyQkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3VCSjtBRHJCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDdUJKO0FEcEJBO0VBQ0UsYUFBQTtBQ3VCRjtBRHBCRTtFQUNFLHlCQUFBO0FDdUJKO0FEcEJBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUN1QkY7QURyQkE7RUFDRSxlQUFBO0FDd0JGO0FEdEJBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUN5QkY7QUR4QkU7RUFDRSxZQUFBO0FDMEJKO0FEdkJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQzBCRjtBRHhCQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDMkJGO0FEekJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDNEJGO0FEM0JFO0VBQ0UsWUFBQTtBQzZCSjtBRDFCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQzZCRjtBRDNCQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDOEJGO0FENUJBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDK0JGO0FEN0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2dDRjtBRDlCQTtFQUNFLGtCQUFBO0FDaUNGO0FEL0JBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDa0NGO0FEakNFO0VBQ0UsWUFBQTtBQ21DSjtBRGhDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNtQ0Y7QURqQ0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDb0NGO0FEakNBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBR0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDb0NKO0FEbENBO0VBQ0UsaUVBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNxQ0Y7QURuQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDc0NKO0FEcENBO0VBQ0ksZ0JBQUE7QUN1Q0o7QURyQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUN3Q0Y7QUR0Q0E7RUFLSTtJQUFNLFlBQUE7RUNzQ1I7RURyQ0U7SUFBSSxjQUFBO0VDd0NOO0FBQ0Y7QUQvQ0E7RUFLSTtJQUFNLFlBQUE7RUNzQ1I7RURyQ0U7SUFBSSxjQUFBO0VDd0NOO0FBQ0Y7QUR2Q0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ3lDSjtBRHZDQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUdLLGdDQUFBO0FDMENUO0FEeENBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUdLLGdDQUFBO0FDMkNUO0FEdENDO0VBQ0UsYUFBQTtBQ3lDSDtBRHZDQztFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDeUNIO0FEeENHO0VBQ0Qsa0JBQUE7RUFDQSxlQUFBO0FDMENGO0FEdkNDO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3lDSDtBRHRDRTtFQUNELHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3lDRDtBRHZDRTtFQUNELHdFQUFBO1VBQUEsZ0VBQUE7RUFDQSwyQkFBQTtBQzBDRDtBRHhDRTtFQUNELFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQzJDRDtBRHpDRTtFQUNELGdDQUFBO1VBQUEsd0JBQUE7QUM0Q0Q7QUQxQ0U7RUFDRCxTQUFBO0VBQ0EsVUFBQTtBQzZDRDtBRDNDRTtFQUNELGdDQUFBO1VBQUEsd0JBQUE7QUM4Q0Q7QUQ1Q0U7RUFDRCxTQUFBO0VBQ0EsVUFBQTtBQytDRDtBRDdDRTtFQUNELGdDQUFBO1VBQUEsd0JBQUE7QUNnREQ7QUQ5Q0U7RUFDRCxTQUFBO0VBQ0EsVUFBQTtBQ2lERDtBRC9DRTtFQUNELGdDQUFBO1VBQUEsd0JBQUE7QUNrREQ7QURoREU7RUFDRCxTQUFBO0VBQ0EsVUFBQTtBQ21ERDtBRGpERTtFQUNELCtCQUFBO1VBQUEsdUJBQUE7QUNvREQ7QURsREU7RUFDRCxTQUFBO0VBQ0EsVUFBQTtBQ3FERDtBRG5ERTtFQUNELGdDQUFBO1VBQUEsd0JBQUE7QUNzREQ7QURwREU7RUFDRCxTQUFBO0VBQ0EsVUFBQTtBQ3VERDtBRHJERTtFQUNELGdDQUFBO1VBQUEsd0JBQUE7QUN3REQ7QUR0REU7RUFDRCxTQUFBO0VBQ0EsVUFBQTtBQ3lERDtBRHZERTtFQUNELGdDQUFBO1VBQUEsd0JBQUE7QUMwREQ7QUR4REU7RUFDRCxTQUFBO0VBQ0EsVUFBQTtBQzJERDtBRHpERTtFQUNEO0lBQ0UsdUJBQUE7RUM0REQ7RUQxREQ7SUFDRSx5QkFBQTtFQzRERDtBQUNGO0FEbEVFO0VBQ0Q7SUFDRSx1QkFBQTtFQzRERDtFRDFERDtJQUNFLHlCQUFBO0VDNEREO0FBQ0Y7QUQxREU7RUFDRCwrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQzRERDtBRHhEQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDMkRGO0FEekRBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUM0REYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvdXBsb2FkLWRvY3MvdXBsb2FkLWRvY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgLnB0NTB7XG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICAuZXh0cmFpbWd7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYW5pbXRpb257XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0MzB7XG4gICAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgfVxuICAubXQzMHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFnZW5jeW5hbWV7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuICAuaGlkZS14c3tcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5ld2xpbmV7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB9XG4gIC5ib3R0b21icmRye1xuICAgIHBhZGRpbmc6IDEycHggIWltcG9ydGFudDtcbiAgfVxuICAucDMwe1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICAud2R0aDgwe1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJ0bm57XG4gICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xuICB9XG4gIC50ZXh0Y2VudHJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5lbWFpbGljb257XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuLnBvc3Rpb25hYnN7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA1OTtcbn1cbi5wdDUwe1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5leHRyYWltZ3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMiU7XG59XG4ucHQzMHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ubXQzMHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5ib3JkZXJvZntcbiAgYm94LXNoYWRvdzogMCAwIDIxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uYWdlbmN5bmFtZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5hZ2VuY3lkZXRhaWxze1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6MjBweCAwO1xuICAuYnJkcmlnaHR7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U2ZTZlNjtcbiAgfVxuICAucDE1e1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgcHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uYm90dG9tYnJkcntcbiAgcGFkZGluZzogMTJweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC5icmRyc21hbGx7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIG1hcmdpbjogMCAxNHB4O1xuICB9XG4gIC5wZXJzb25pbWd7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLnByZmxuYW1le1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG59XG4ucDMwe1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmZvcm0tZ3JvdXB7XG4gIGxhYmVse1xuICAgIG1hcmdpbjogMTVweCA1cHggNXB4IDEwcHg7XG4gIH1cbn1cbi53ZHRoODB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5mb3JtLWNvbnRyb2wge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubXlkb2N7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDIycHg7XG4gIGltZ3tcbiAgICBoZWlnaHQ6IDQ3cHg7XG4gIH1cbn1cbi5tdG1iMTB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udXBsb2FkYnR0bntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNThhOWVmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDJweCAyN3B4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjMDI3Y2U5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGlja21hcmt7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBpbWd7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG59XG4uZmlsZWlucHV0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAxNDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnVwbG9hZGZpZWxke1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5idG5ue1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAyN2JlOSwgIzAzYzBmMCk7XG4gIGNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG4uYmFja2xvZ3tcbiAgY29sb3I6ICNkNTA5MDE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zbWFsbGNlbnRlcntcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuLmVtYWlsaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBpbWd7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG59XG4udGV4dGVtYWlscGhvbmV7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubWJtdHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uYm9yZHJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE3cHggLTFweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE3cHggLTFweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxN3B4IC0xcHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJhY2tncm91bmRpbWFnZSB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9tYWluLWJnLnBuZykgbm8tcmVwZWF0IDEwMCUgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cbi5mb3JtYXR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG4ucGRkbntcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmFuaW10aW9ue1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHBsc3dhaXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBwbHN3YWl0IHtcbiAgICAvLyAwJSAgIHtjb2xvcjogcmVkO31cbiAgICAvLyAyNSUgICB7Y29sb3I6IGJsYWNrO31cbiAgICAvLyA1MCUgIHtjb2xvcjogcmVkO31cbiAgICAvLyAxMDAlICAge2NvbG9yOiBibGFjazt9XG4gICAgZnJvbSB7Y29sb3I6IHdoaXRlO31cbiAgICB0byB7Y29sb3I6ICMwMjdlZTk7fVxuICB9XG4uYWdlbmN5aGVhZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmliYW5kZXRhaWxze1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNiwgMjE1LCAyMTUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcbiAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xufVxuLnRvcGJvcmRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE2LCAyMTUsIDIxNSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xuICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XG59XG5cbi8vIGxvYWRlclxuI2hvdGVsU3Bpbm5lcntcblx0LmxhLWJhbGwtc3Bpbi1jbG9ja3dpc2Uge1xuXHQgIGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LmxvYWRlcl9tZXNzYWdle1xuXHQgIHBhZGRpbmc6IDM2cHggNzJweDtcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHQgIGJvcmRlci1yYWRpdXM6IDZweDtcblx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCAgcHtcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHQgIH1cblx0fVxuXHQub3ZlcmxheSB7XG5cdCAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgIHotaW5kZXg6IDEwMTA7XG5cdCAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuXHQgIHdpZHRoOiAxMDAlO1xuXHQgIGhlaWdodDogMTAwJTtcblx0fVxuICB9XG4gIC5sZHMtcm9sbGVyIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2IHtcblx0YW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcblx0dHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjphZnRlciB7XG5cdGNvbnRlbnQ6IFwiIFwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogN3B4O1xuXHRoZWlnaHQ6IDdweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kOiAjMDI3Y2U5O1xuXHRtYXJnaW46IC00cHggMCAwIC00cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcblx0dG9wOiA2M3B4O1xuXHRsZWZ0OiA2M3B4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG5cdHRvcDogNjhweDtcblx0bGVmdDogNTZweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuXHR0b3A6IDcxcHg7XG5cdGxlZnQ6IDQ4cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcblx0dG9wOiA3MnB4O1xuXHRsZWZ0OiA0MHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcblx0dG9wOiA3MXB4O1xuXHRsZWZ0OiAzMnB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XG5cdHRvcDogNjhweDtcblx0bGVmdDogMjRweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuXHR0b3A6IDYzcHg7XG5cdGxlZnQ6IDE3cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcblx0dG9wOiA1NnB4O1xuXHRsZWZ0OiAxMnB4O1xuICB9XG4gIEBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG5cdDAlIHtcblx0ICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMDAlIHtcblx0ICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHR9XG4gIH1cbiAgLmhvdGVsLWxvYWRlcntcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2hvdGVsLnN2Zyk7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1zaXplOiAzNXB4O1xuICB9XG4vLyBcblxuLmNvdW50cnljb2Rle1xuICB0b3A6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcbn1cbi5jb3VudHJ5Y29kZTpmb2N1c3tcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufSIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnB0NTAge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZXh0cmFpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYW5pbXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB0MzAge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXQzMCB7XG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFnZW5jeW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaGlkZS14cyB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5ld2xpbmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgfVxuXG4gIC5ib3R0b21icmRyIHtcbiAgICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucDMwIHtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAud2R0aDgwIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bm4ge1xuICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50ZXh0Y2VudHIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5lbWFpbGljb24ge1xuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbi5wb3N0aW9uYWJzIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDU5O1xufVxuXG4ucHQ1MCB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uZXh0cmFpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIyJTtcbn1cblxuLnB0MzAge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLm10MzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYm9yZGVyb2Yge1xuICBib3gtc2hhZG93OiAwIDAgMjFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmFnZW5jeW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uYWdlbmN5ZGV0YWlscyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLmFnZW5jeWRldGFpbHMgLmJyZHJpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U2ZTZlNjtcbn1cbi5hZ2VuY3lkZXRhaWxzIC5wMTUge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmFnZW5jeWRldGFpbHMgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJvdHRvbWJyZHIge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5ib3R0b21icmRyIC5icmRyc21hbGwge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBtYXJnaW46IDAgMTRweDtcbn1cbi5ib3R0b21icmRyIC5wZXJzb25pbWcge1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmJvdHRvbWJyZHIgLnByZmxuYW1lIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnAzMCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgbWFyZ2luOiAxNXB4IDVweCA1cHggMTBweDtcbn1cblxuLndkdGg4MCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm15ZG9jIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5teWRvYyBpbWcge1xuICBoZWlnaHQ6IDQ3cHg7XG59XG5cbi5tdG1iMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udXBsb2FkYnR0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAycHggc29saWQgIzU4YTllZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHggMjdweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogIzAyN2NlOTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGlja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbn1cbi50aWNrbWFyayBpbWcge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5maWxlaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAxNDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXBsb2FkZmllbGQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ0bm4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAyN2JlOSwgIzAzYzBmMCk7XG4gIGNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5iYWNrbG9nIHtcbiAgY29sb3I6ICNkNTA5MDE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNtYWxsY2VudGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuXG4uZW1haWxpY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4uZW1haWxpY29uIGltZyB7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLnRleHRlbWFpbHBob25lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm1ibXQge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5ib3JkciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTdweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxN3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYWNrZ3JvdW5kaW1hZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbWFpbi1iZy5wbmcpIG5vLXJlcGVhdCAxMDAlIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbi5mb3JtYXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnBkZG4ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uYW5pbXRpb24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHBsc3dhaXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHBsc3dhaXQge1xuICBmcm9tIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgdG8ge1xuICAgIGNvbG9yOiAjMDI3ZWU5O1xuICB9XG59XG4uYWdlbmN5aGVhZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmliYW5kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ3ZDc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xufVxuXG4udG9wYm9yZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ3ZDc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xufVxuXG4jaG90ZWxTcGlubmVyIC5sYS1iYWxsLXNwaW4tY2xvY2t3aXNlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNob3RlbFNwaW5uZXIgLmxvYWRlcl9tZXNzYWdlIHtcbiAgcGFkZGluZzogMzZweCA3MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNob3RlbFNwaW5uZXIgLmxvYWRlcl9tZXNzYWdlIHAge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNob3RlbFNwaW5uZXIgLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxkcy1yb2xsZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2IHtcbiAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAyN2NlOTtcbiAgbWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgdG9wOiA2M3B4O1xuICBsZWZ0OiA2M3B4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgdG9wOiA2OHB4O1xuICBsZWZ0OiA1NnB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiA0OHB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgdG9wOiA3MnB4O1xuICBsZWZ0OiA0MHB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICB0b3A6IDcxcHg7XG4gIGxlZnQ6IDMycHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDI0cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDE3cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICB0b3A6IDU2cHg7XG4gIGxlZnQ6IDEycHg7XG59XG5cbkBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uaG90ZWwtbG9hZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2hvdGVsLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAzNXB4O1xufVxuXG4uY291bnRyeWNvZGUge1xuICB0b3A6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG5cbi5jb3VudHJ5Y29kZTpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/landing/upload-docs/upload-docs.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/upload-docs/upload-docs.component.ts ***!
  \*************************************************************************/
/*! exports provided: UploadDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDocsComponent", function() { return UploadDocsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_common_services_common_api_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/common-api-services */ "./src/app/common/services/common-api-services.ts");








var UploadDocsComponent = /** @class */ (function () {
    function UploadDocsComponent(router, rout, common, http, spinner) {
        this.router = router;
        this.rout = rout;
        this.common = common;
        this.http = http;
        this.spinner = spinner;
        this.isiban = false;
        this.passportFile = null;
        this.bankLetter = null;
        this.contractsign = null;
        this.isProcess = true;
        this.passport = false;
        this.bank = false;
        this.sign = false;
        this.countrycode = '91';
    }
    UploadDocsComponent.prototype.passportfile = function (event) {
        console.log("1", event);
        this.passportFile = event.target.files[0];
        this.passport = true;
    };
    UploadDocsComponent.prototype.Bankletter = function (event) {
        console.log("2", event);
        this.bankLetter = event.target.files[0];
        this.bank = true;
    };
    UploadDocsComponent.prototype.Contract = function (event) {
        console.log("3", event);
        this.contractsign = event.target.files[0];
        this.sign = true;
    };
    UploadDocsComponent.prototype.uploaddoc = function () {
        var _this = this;
        this.spinner.show();
        if (document.getElementById("signatory_nameid").value == "" ||
            document.getElementById("passport_numberid").value == "" ||
            document.getElementById("iata_licenseid").value == "" ||
            document.getElementById("mobileid").value == "" ||
            document.getElementById("commercial_regnoid").value == "" ||
            document.getElementById("request_textid").value == "") {
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fill All Details',
            });
            return;
        }
        if (!this.passport || !this.bank || !this.sign) {
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Upload All Documents',
            });
            return;
        }
        var q = {
            "signatiureName": document.getElementById("signatory_nameid").value,
            "passportNo": document.getElementById("passport_numberid").value,
            "iataLicence": document.getElementById("iata_licenseid").value,
            "mobileNo": this.countrycode + document.getElementById("mobileid").value,
            "commercialreg": document.getElementById("commercial_regnoid").value,
            "reqstText": document.getElementById("request_textid").value
        };
        console.log(q);
        this.common.otaUpgrade(this.passportFile, this.bankLetter, this.contractsign, q, this.router.snapshot.params.id).subscribe(function (Response) {
            _this.spinner.hide();
            console.log(Response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'success',
                title: Response.message,
            });
        }, function (error) {
            _this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Somthing wrong',
            });
        });
    };
    UploadDocsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.router.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.common.getAgencyApprovedDetails(_this.id).subscribe(function (response) {
                console.log(response);
                _this.profile = response;
                if (_this.profile.is_licence_agent) {
                    _this.isiban = true;
                    if (response.approval_requests.length != 0) {
                        _this.isProcess = true;
                        console.log(response.approval_requests.length);
                        var dif = response.approval_requests.length;
                        if (response.approval_requests[(dif - 1)].status == 'rejected') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                icon: 'error',
                                title: 'Rejected...',
                                text: response.approval_requests[0].comment,
                            });
                            _this.isProcess = false;
                        }
                    }
                    else {
                        _this.isProcess = false;
                    }
                }
                else {
                    _this.isiban = false;
                    _this.isProcess = true;
                    if (_this.profile.is_approved) {
                        _this.isProcess = false;
                        _this.isiban = true;
                    }
                }
            });
        });
        this.common.getCountries().subscribe(function (res) {
            _this.country = res;
        });
    };
    UploadDocsComponent.prototype.navigatelogin = function () {
        this.rout.navigate(["/login"]);
    };
    UploadDocsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_common_services_common_api_services__WEBPACK_IMPORTED_MODULE_6__["CommonApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    UploadDocsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-docs',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-docs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/upload-docs/upload-docs.component.html")).default,
            providers: [src_app_common_services_common_api_services__WEBPACK_IMPORTED_MODULE_6__["CommonApiService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-docs.component.scss */ "./src/app/components/landing/upload-docs/upload-docs.component.scss")).default]
        })
    ], UploadDocsComponent);
    return UploadDocsComponent;
}());



/***/ }),

/***/ "./src/app/modules/landing/landing-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/landing/landing-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LandingRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRouteModule", function() { return LandingRouteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_landing_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/landing/login/login.component */ "./src/app/components/landing/login/login.component.ts");
/* harmony import */ var src_app_components_landing_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/landing/signup/signup.component */ "./src/app/components/landing/signup/signup.component.ts");
/* harmony import */ var src_app_components_landing_upload_docs_upload_docs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/landing/upload-docs/upload-docs.component */ "./src/app/components/landing/upload-docs/upload-docs.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var myPath = [
    {
        path: "login", component: src_app_components_landing_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: "signup", component: src_app_components_landing_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
    },
    {
        path: "upload/:id", component: src_app_components_landing_upload_docs_upload_docs_component__WEBPACK_IMPORTED_MODULE_5__["UploadDocsComponent"],
    },
];
var LandingRouteModule = /** @class */ (function () {
    function LandingRouteModule() {
    }
    LandingRouteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(myPath)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]
        })
    ], LandingRouteModule);
    return LandingRouteModule;
}());



/***/ }),

/***/ "./src/app/modules/landing/landing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/landing/landing.module.ts ***!
  \***************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/modules/landing/landing-routing.module.ts");
/* harmony import */ var src_app_components_landing_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/landing/login/login.component */ "./src/app/components/landing/login/login.component.ts");
/* harmony import */ var src_app_components_landing_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/landing/signup/signup.component */ "./src/app/components/landing/signup/signup.component.ts");
/* harmony import */ var src_app_components_landing_upload_docs_upload_docs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/landing/upload-docs/upload-docs.component */ "./src/app/components/landing/upload-docs/upload-docs.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_sub_agent_create_trip_create_trip_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/sub-agent/create-trip/create-trip.module */ "./src/app/components/sub-agent/create-trip/create-trip.module.ts");














var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                src_app_components_landing_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], src_app_components_landing_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], src_app_components_landing_upload_docs_upload_docs_component__WEBPACK_IMPORTED_MODULE_11__["UploadDocsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _landing_routing_module__WEBPACK_IMPORTED_MODULE_8__["LandingRouteModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                        useFactory: src_app_components_sub_agent_create_trip_create_trip_module__WEBPACK_IMPORTED_MODULE_13__["TranslatorFactory"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    },
                    isolate: true
                })
            ]
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-landing-landing-module.js.map