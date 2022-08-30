describe('Signup', () => {
    it('open signup page from main navigation', () => {
        cy.visit('/');
        cy.get('a[href="/signup"]').click();
        cy.get('form');
        cy.get('button[type="submit"]').contains('Записаться');
    });

    it('name and phone fields are required', () => {
        cy.visit('/signup');
        cy.get('button[type="submit"]').click();
        cy.matchImageSnapshot('signup-invalid');
    });

    it('signup successfully', () => {
        cy.get('input[name="name"]').type('Никита');
        cy.get('input[name="phone"]').type('89772957127');
        cy.get('button[type="submit"]').click();
        cy.intercept('/dev/signup').as('signup');
        cy.wait('@signup').its('response.statusCode').should('eq', 200)
        cy.matchImageSnapshot('signup-success');
    });
});
