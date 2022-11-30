/// <reference types="Cypress" />

describe('Validate registration form', () =>
{
    let data; //closure variable
    before(() => 
    {
    cy.fixture('TestData').then( (TestData) =>
    {
        data= TestData
        cy.visit(data.env.angularpractice_url)
    })    
    })        

    it('Validate successfull registration', () =>
    {    
        cy.register(data.data.name, data.data.email, data.data.password, data.data.gender)
        cy.get('.alert').should('contain.text', data.data.formSubmittedSuccessMessage)
        cy.get('.close').should('exist').click()
        cy.get('.alert').should('not.exist')

    })

    it('Validate input name is required', () =>
    {    
        cy.get(':nth-child(1) > .form-control').clear()
        cy.get(':nth-child(2) > .form-control').click()
        cy.get(':nth-child(1).form-group > .alert').should('have.text', data.data.inputNameIsRequiredMessage)
    })

    it('Validate input email is required', () =>
    {    
        cy.get(':nth-child(2) > .form-control').type('A').clear()
        cy.get(':nth-child(1) > .form-control').click()
        cy.get(':nth-child(2) > .alert').should('have.text', data.data.inputEmailIsRequiredMessage)
    })

    it('Validate input name field requires at least 2 characters', () =>
    {    
        cy.get(':nth-child(1) > .form-control').type('A').should('have.attr', 'minlength', '2')
        cy.get(':nth-child(2) > .form-control').click()
        cy.get(':nth-child(1).form-group > .alert').should('have.text', data.data.nameAtLeastTwoCharactersError)
    })

    it('Validate registration form radio buttons', () =>
    {    
        cy.get('#inlineRadio1').should('be.enabled')
        cy.get(':nth-child(2) > .form-check-label').should('have.text', data.data.radioBtnStudent)
        cy.get('#inlineRadio2').should('be.enabled')
        cy.get(':nth-child(3) > .form-check-label').should('have.text', data.data.radioBtnEmployed)
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(7) > :nth-child(4) > .form-check-label').should('have.text', data.data.radioBtnEntrepreneur)
    })
})