/// <reference types="Cypress" />


describe('Test Case 1', () =>
{        
    it('Test Step 1', () =>
    {    
        const url = "https://rahulshettyacademy.com/angularpractice/"
        cy.visit(url)
        cy.get(':nth-child(1) > .form-control').type('Ahmed Madyan')
        cy.get(':nth-child(2) > .form-control').type('ahmed.madyan01@gmail.com')
        cy.get('#exampleInputPassword1').type('SDET@v0100')
        cy.get('#exampleFormControlSelect1').select('Male')
    })
})





















// describe('Test Case 2', () =>
// {        
//     it('Test Step 1', () =>
//     {    
//         const url = "https://rahulshettyacademy.com/angularpractice/";
//         cy.visit(url);
//         })
// })