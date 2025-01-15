export class RecoveryPage {
    private readonly firstNameField = '#firstName';
    private readonly lastNameField = '#lastName';
    private readonly addressField = '#address\\.street';
    private readonly cityField = '#address\\.city';
    private readonly stateField = '#address\\.state';
    private readonly zipCodeField = '#address\\.zipCode';
    private readonly ssnField = '#ssn';
    private readonly findButton = '[colspan="2"] > .button';

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

    enterSSN(value: string) : void {
        cy.get(this.ssnField).type(value);
    }

    clickOnFind() : void {
        cy.get(this.findButton).click();
    }
}