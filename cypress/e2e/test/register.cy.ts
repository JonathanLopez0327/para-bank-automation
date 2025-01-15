import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { registerData, duplicateRegisterData } from "../data/TestData";

describe('User Registration', () => {
    const homePage = new HomePage();
    const registerPage = new RegisterPage();

    registerData.forEach((data) => {
        it('should register completing all fields', () => {
            homePage.visit();
            homePage.clickOnRegisterButton();
            cy.get('.title').should('contain.text', 'Signing up is easy!')
    
            registerPage.enterFirstName(data.username);
            registerPage.enterLastName(data.lastName);
            registerPage.enterAddress(data.address);
            registerPage.enterCity(data.city);
            registerPage.enterState(data.state);
            registerPage.enterZipCode(data.zipCode);
            registerPage.enterPhone(data.phone);
            registerPage.enterSSN(data.ssn);
            registerPage.enterUsername(data.username);
            registerPage.enterPassword(data.password);
            registerPage.enterConfirmPassword(data.password);
            registerPage.clickOnRegister();

            cy.get('.title').should('contain.text', 'Welcome ' + data.username);
            cy.get('#leftPanel > ul > :nth-child(8) > a').click();
        });
    })

    duplicateRegisterData.forEach((data) => {
        it('should not register with existent client', () => {
            homePage.visit();
            homePage.clickOnRegisterButton();
            cy.get('.title').should('contain.text', 'Signing up is easy!')
    
            registerPage.enterFirstName(data.username);
            registerPage.enterLastName(data.lastName);
            registerPage.enterAddress(data.address);
            registerPage.enterCity(data.city);
            registerPage.enterState(data.state);
            registerPage.enterZipCode(data.zipCode);
            registerPage.enterPhone(data.phone);
            registerPage.enterSSN(data.ssn);
            registerPage.enterUsername(data.username);
            registerPage.enterPassword(data.password);
            registerPage.enterConfirmPassword(data.password);
            registerPage.clickOnRegister();

            cy.get('#customer\\.username\\.errors').should('contain.text', 'This username already exists.')
        });
    })

    it('should not register with incomplete fields', () => {
        homePage.visit();
        homePage.clickOnRegisterButton();
        cy.get('.title').should('contain.text', 'Signing up is easy!')
        registerPage.clickOnRegister();

        cy.get('#customer\\.firstName\\.errors').should('contain.text', 'First name is required.');
        cy.get('#customer\\.lastName\\.errors').should('contain.text', 'Last name is required.');
        cy.get('#customer\\.address\\.street\\.errors').should('contain.text', 'Address is required.');
        cy.get('#customer\\.address\\.city\\.errors').should('contain.text', 'City is required.');
        cy.get('#customer\\.address\\.state\\.errors').should('contain.text', 'State is required.');
        cy.get('#customer\\.address\\.zipCode\\.errors').should('contain.text', 'Zip Code is required.');
        cy.get('#customer\\.ssn\\.errors').should('contain.text', 'Social Security Number is required.');
        cy.get('#customer\\.username\\.errors').should('contain.text', 'Username is required.');
        cy.get('#customer\\.password\\.errors').should('contain.text', 'Password is required.');
        cy.get('#repeatedPassword\\.errors').should('contain.text', 'Password confirmation is required.');
    });
});