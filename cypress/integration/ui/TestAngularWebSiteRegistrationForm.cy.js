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

    it('Validate input name is required', () =>
    {    
        cy.get(':nth-child(1) > .form-control').clear()
        cy.get(':nth-child(2) > .form-control').click()
        cy.get(':nth-child(1).form-group > .alert').should('have.text', data.data.inputNameIsRequiredMessage)
    })

    it('Validate input name field requires at least 2 characters', () =>
    {    
        cy.get(':nth-child(1) > .form-control').type('A').should('have.attr', 'minlength', '2')
        cy.get(':nth-child(2) > .form-control').click()
        cy.get(':nth-child(1).form-group > .alert').should('have.text', data.data.nameAtLeastTwoCharactersError)
    })

    it('Validate input email is required', () =>
    {    
        cy.get(':nth-child(2) > .form-control').type('A').clear()
        cy.get(':nth-child(1) > .form-control').click()
        cy.get(':nth-child(2) > .alert').should('have.text', data.data.inputEmailIsRequiredMessage)
    })

    it('Validate successfull registration', () =>
    {    
        cy.get(':nth-child(1) > .form-control').clear()
        cy.get(':nth-child(1) > .form-control').type(data.data.name)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',data.data.name)
        cy.get(':nth-child(2) > .form-control').type(data.data.email) 
        cy.get('#exampleInputPassword1').type(data.data.password)
        cy.get('#exampleFormControlSelect1').select(data.data.gender)
        cy.get('input.btn').click()
        cy.get('.alert').should('contain.text', data.data.formSubmittedSuccessMessage)
        cy.get('.close').should('exist').click()
        cy.get('.alert').should('not.exist')

    })
})