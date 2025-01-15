import { HomePage } from "../pages/HomePage"
import { loginData } from "../data/TestData";

describe('User Login', () => {
    const homePage = new HomePage();

    loginData.forEach((data) => {
        it('should login with valid credentials', () => {
            homePage.visit()
            
            homePage.enterUsername(data.username);
            homePage.enterPassword(data.password);
            homePage.clickOnLoginButton();
            cy.get('#showOverview > .title').should('contain.text', 'Accounts Overview');
            cy.get('#leftPanel > ul > :nth-child(8) > a').click();
        });
    });

    it('should login with invalid credentials', () => {
        homePage.visit()
        
        homePage.enterUsername('invalid');
        homePage.enterPassword('invalid');
        homePage.clickOnLoginButton();
        cy.get('.error').should('contain.text', 'The username and password could not be verified.');
    });
    
})