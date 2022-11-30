Cypress.Commands.add('register', (fName, email, password, gender) =>
{
    cy.get(':nth-child(1) > .form-control').clear()
    cy.get(':nth-child(1) > .form-control').type(fName)
    cy.get(':nth-child(4) > .ng-untouched').should('have.value', fName)
    cy.get(':nth-child(2) > .form-control').clear()
    cy.get(':nth-child(2) > .form-control').type(email) 
    cy.get('#exampleInputPassword1').type(password)
    cy.get('#exampleFormControlSelect1').select(gender)
    cy.get('input.btn').click()
})