"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomePage_1 = require("../pages/HomePage");
var RecoveryPage_1 = require("../pages/RecoveryPage");
var TestData_1 = require("../data/TestData");
describe('User recovery', function () {
    var homePage = new HomePage_1.HomePage();
    var recoveryPage = new RecoveryPage_1.RecoveryPage();
    TestData_1.recoveryData.forEach(function (data) {
        it('should recovery password with valid credentials', function () {
            homePage.visit();
            homePage.clickOnForgotPassword();
            cy.get('.title').should('contain.text', 'Customer Lookup');
            recoveryPage.enterFirstName(data.firstName);
            recoveryPage.enterLastName(data.lastName);
            recoveryPage.enterAddress(data.address);
            recoveryPage.enterCity(data.city);
            recoveryPage.enterState(data.state);
            recoveryPage.enterZipCode(data.zipCode);
            recoveryPage.enterSSN(data.ssn);
            recoveryPage.clickOnFind();
            cy.get('#rightPanel > :nth-child(2)').should('contain.text', 'Your login information was located successfully. You are now logged in.');
            cy.get('#leftPanel > ul > :nth-child(8) > a').click();
        });
    });
    it('should recovery password with invalid credentials', function () {
        homePage.visit();
        homePage.clickOnForgotPassword();
        cy.get('.title').should('contain.text', 'Customer Lookup');
        recoveryPage.enterFirstName('invalid');
        recoveryPage.enterLastName('invalid');
        recoveryPage.enterAddress('invalid');
        recoveryPage.enterCity('invalid');
        recoveryPage.enterState('invalid');
        recoveryPage.enterZipCode('invalid');
        recoveryPage.enterSSN('invalid');
        recoveryPage.clickOnFind();
        cy.get('.error').should('contain.text', 'The customer information');
    });
});
