describe('test website and perform actions',()=>{

    it('app testing',()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()
        cy.url().should('include', '/customers')
        cy.get("div.align-center.mg-lg h1:nth-of-type(2)")
        .should('be.visible')
        and('contains','something')
        and('have.length',1)
        
        cy.get('ul.footer-nav li)').should('have.length',35)
        
        
    })
})