export class HomePage {
    private readonly registerButton = '#loginPanel > :nth-child(3) > a';
    private readonly usernameField = ':nth-child(2) > .input';
    private readonly passwordField = ':nth-child(4) > .input';
    private readonly loginButton = ':nth-child(5) > .button';
    private readonly forgotButton = '#loginPanel > :nth-child(2) > a';

    visit(): void {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    }

    clickOnRegisterButton() : void {
        cy.get(this.registerButton).click();
    }

    enterUsername(value: string) : void {
        cy.get(this.usernameField).type(value);
    }

    enterPassword(value: string) : void {
        cy.get(this.passwordField).type(value);
    }

    clickOnLoginButton() : void {
        cy.get(this.loginButton).click();
    }

    clickOnForgotPassword() : void {
        cy.get(this.forgotButton).click()
    }
}