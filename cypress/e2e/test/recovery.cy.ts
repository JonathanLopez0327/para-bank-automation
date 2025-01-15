import { HomePage } from "../pages/HomePage"
import { RecoveryPage } from "../pages/RecoveryPage";
import { recoveryData } from "../data/TestData";

describe('User recovery', () => {
    const homePage = new HomePage();
    const recoveryPage = new RecoveryPage();

    recoveryData.forEach((data) => {
        it('should recovery password with valid credentials', () => {
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
            cy.get('#rightPanel > :nth-child(2)').should('contain.text', 'Your login information was located successfully. You are now logged in.')
            cy.get('#leftPanel > ul > :nth-child(8) > a').click();
        });
    });

    it('should recovery password with invalid credentials', () => {
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
        cy.get('.error').should('contain.text', 'The customer information')
    });
});