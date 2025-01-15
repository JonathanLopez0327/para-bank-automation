"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPage = void 0;
var RegisterPage = /** @class */ (function () {
    function RegisterPage() {
        this.firstNameField = '#customer\\.firstName';
        this.lastNameField = '#customer\\.lastName';
        this.addressField = '#customer\\.address\\.street';
        this.cityField = '#customer\\.address\\.city';
        this.stateField = '#customer\\.address\\.state';
        this.zipCodeField = '#customer\\.address\\.zipCode';
        this.phoneField = '#customer\\.phoneNumber';
        this.ssnField = '#customer\\.ssn';
        this.usernameField = ':nth-child(10) > [width="20%"]';
        this.passwordField = '#customer\\.password';
        this.confirmPasswordField = '#repeatedPassword';
        this.registerButton = '[colspan="2"] > .button';
    }
    RegisterPage.prototype.enterFirstName = function (value) {
        cy.get(this.firstNameField).type(value);
    };
    RegisterPage.prototype.enterLastName = function (value) {
        cy.get(this.lastNameField).type(value);
    };
    RegisterPage.prototype.enterAddress = function (value) {
        cy.get(this.addressField).type(value);
    };
    RegisterPage.prototype.enterCity = function (value) {
        cy.get(this.cityField).type(value);
    };
    RegisterPage.prototype.enterState = function (value) {
        cy.get(this.stateField).type(value);
    };
    RegisterPage.prototype.enterZipCode = function (value) {
        cy.get(this.zipCodeField).type(value);
    };
    RegisterPage.prototype.enterPhone = function (value) {
        cy.get(this.phoneField).type(value);
    };
    RegisterPage.prototype.enterSSN = function (value) {
        cy.get(this.ssnField).type(value);
    };
    RegisterPage.prototype.enterUsername = function (value) {
        cy.get(this.usernameField).type(value);
    };
    RegisterPage.prototype.enterPassword = function (value) {
        cy.get(this.passwordField).type(value);
    };
    RegisterPage.prototype.enterConfirmPassword = function (value) {
        cy.get(this.confirmPasswordField).type(value);
    };
    RegisterPage.prototype.clickOnRegister = function () {
        cy.get(this.registerButton).click();
    };
    return RegisterPage;
}());
exports.RegisterPage = RegisterPage;
