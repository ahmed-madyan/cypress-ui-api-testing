// Mocha test framework standard
/// <reference types="Cypress" />

describe('Test Case 1', () =>
{        
    it('Test Step 1', () =>
    {    
        const url = "https://rahulshettyacademy.com/seleniumPractise/#/";
        cy.visit(url);
        cy.get('.search-keyword').type('tomato')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 1)
        })
})