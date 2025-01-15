"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoveryPage = void 0;
var RecoveryPage = /** @class */ (function () {
    function RecoveryPage() {
        this.firstNameField = '#firstName';
        this.lastNameField = '#lastName';
        this.addressField = '#address\\.street';
        this.cityField = '#address\\.city';
        this.stateField = '#address\\.state';
        this.zipCodeField = '#address\\.zipCode';
        this.ssnField = '#ssn';
        this.findButton = '[colspan="2"] > .button';
    }
    RecoveryPage.prototype.enterFirstName = function (value) {
        cy.get(this.firstNameField).type(value);
    };
    RecoveryPage.prototype.enterLastName = function (value) {
        cy.get(this.lastNameField).type(value);
    };
    RecoveryPage.prototype.enterAddress = function (value) {
        cy.get(this.addressField).type(value);
    };
    RecoveryPage.prototype.enterCity = function (value) {
        cy.get(this.cityField).type(value);
    };
    RecoveryPage.prototype.enterState = function (value) {
        cy.get(this.stateField).type(value);
    };
    RecoveryPage.prototype.enterZipCode = function (value) {
        cy.get(this.zipCodeField).type(value);
    };
    RecoveryPage.prototype.enterSSN = function (value) {
        cy.get(this.ssnField).type(value);
    };
    RecoveryPage.prototype.clickOnFind = function () {
        cy.get(this.findButton).click();
    };
    return RecoveryPage;
}());
exports.RecoveryPage = RecoveryPage;
