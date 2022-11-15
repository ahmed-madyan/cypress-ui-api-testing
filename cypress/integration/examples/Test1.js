// Mocha test framework standard
/// <reference types="Cypress" />

describe('Test Suite', function()
{        
    it('Test Case 1', function()
    {    
         const url = "https://rahulshettyacademy.com/seleniumPractise/#/";
        cy.visit(url);
        cy.get('.search-keyword').type('tomato')
        cy.wait(2000)
        cy.get('.product').should('have.length',2)
        })
})