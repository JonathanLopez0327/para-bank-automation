"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomePage_1 = require("../pages/HomePage");
var TestData_1 = require("../data/TestData");
describe('User Login', function () {
    var homePage = new HomePage_1.HomePage();
    TestData_1.loginData.forEach(function (data) {
        it('should login with valid credentials', function () {
            homePage.visit();
            homePage.enterUsername(data.username);
            homePage.enterPassword(data.password);
            homePage.clickOnLoginButton();
            cy.get('#showOverview > .title').should('contain.text', 'Accounts Overview');
            cy.get('#leftPanel > ul > :nth-child(8) > a').click();
        });
    });
    it('should login with invalid credentials', function () {
        homePage.visit();
        homePage.enterUsername('invalid');
        homePage.enterPassword('invalid');
        homePage.clickOnLoginButton();
        cy.get('.error').should('contain.text', 'The username and password could not be verified.');
    });
});
