export class RegisterPage {

    private readonly firstNameField = '#customer\\.firstName';
    private readonly lastNameField = '#customer\\.lastName';
    private readonly addressField = '#customer\\.address\\.street';
    private readonly cityField = '#customer\\.address\\.city';
    private readonly stateField = '#customer\\.address\\.state';
    private readonly zipCodeField = '#customer\\.address\\.zipCode';
    private readonly phoneField = '#customer\\.phoneNumber';
    private readonly ssnField = '#customer\\.ssn';
    private readonly usernameField = ':nth-child(10) > [width="20%"]';
    private readonly passwordField = '#customer\\.password';
    private readonly confirmPasswordField = '#repeatedPassword';
    private readonly registerButton = '[colspan="2"] > .button';

    enterFirstName(value: string) : void {
        cy.get(this.firstNameField).type(value);
    }

    enterLastName(value: string) : void {
        cy.get(this.lastNameField).type(value);
    }

    enterAddress(value: string) : void {
        cy.get(this.addressField).type(value);
    }

    enterCity(value: string) : void {
        cy.get(this.cityField).type(value);
    }

    enterState(value: string) : void {
        cy.get(this.stateField).type(value);
    }

    enterZipCode(value: string) : void {
        cy.get(this.zipCodeField).type(value);
    }

    enterPhone(value: string) : void {
        cy.get(this.phoneField).type(value);
    }

    enterSSN(value: string) : void {
        cy.get(this.ssnField).type(value);
    }

    enterUsername(value: string) : void {
        cy.get(this.usernameField).type(value);
    }

    enterPassword(value: string) : void {
        cy.get(this.passwordField).type(value);
    }

    enterConfirmPassword(value: string) : void {
        cy.get(this.confirmPasswordField).type(value);
    }

    clickOnRegister() : void {
        cy.get(this.registerButton).click();
    }
}