"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.registerButton = '#loginPanel > :nth-child(3) > a';
        this.usernameField = ':nth-child(2) > .input';
        this.passwordField = ':nth-child(4) > .input';
        this.loginButton = ':nth-child(5) > .button';
        this.forgotButton = '#loginPanel > :nth-child(2) > a';
    }
    HomePage.prototype.visit = function () {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    };
    HomePage.prototype.clickOnRegisterButton = function () {
        cy.get(this.registerButton).click();
    };
    HomePage.prototype.enterUsername = function (value) {
        cy.get(this.usernameField).type(value);
    };
    HomePage.prototype.enterPassword = function (value) {
        cy.get(this.passwordField).type(value);
    };
    HomePage.prototype.clickOnLoginButton = function () {
        cy.get(this.loginButton).click();
    };
    HomePage.prototype.clickOnForgotPassword = function () {
        cy.get(this.forgotButton).click();
    };
    return HomePage;
}());
exports.HomePage = HomePage;
