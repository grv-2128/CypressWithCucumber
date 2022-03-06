describe('free crm',()=>{

    it('login',()=>{
        cy.visit('https://classic.crmpro.com/')
        //cy.title().should('have', 'CRMPRO  - CRM software for customer relationship management, sales, and support.')
        cy.get('input[name="username"]').type('gauravmalhotra')
        cy.get('input[name="password"]').type('cypress')
        cy.get('input[type="submit"]').click()
        
        //cy.title().should('include', 'CRMPRO')

    })
})