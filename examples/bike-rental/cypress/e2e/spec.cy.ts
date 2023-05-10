describe('Flow cards', () => {

  Cypress.on('uncaught:exception', () => {
    return false
  })

  beforeEach(()=> {
    cy.intercept('https://secure.epayco.co/**/*', {
      middleware: true
    }, (req) => {
      req.reply({data: ""})
    }).as('paymentRequest')
  })

  it('Show cards and action them', () => {
    // home page
    cy.visit(Cypress.env('baseURL'))
    cy.get('[data-cy="title"]').should("have.text", "Bicycles to rent")
    cy.get('[data-cy="container-cards"]').children().should("have.length.of.at.least", 1)

    // get a card 
    cy.get('[data-cy="card"]').first().click()

    // Bike page
    cy.get('[data-cy="title"]').should('have.text', 'Rent a bike')
    cy.get('[data-cy="card"]').should('exist')
    cy.get('[data-cy="form-bike"]').should('exist')

    // form inputs 
    cy.get('[data-testid="username"]').as('username').should('exist')
    cy.get('[data-testid="phone"]').as('phone').should('exist')
    cy.get('[data-testid="email"]').as('email').should('exist')
    cy.get('[data-testid="dateStart"]').as('dateStart').should('exist')
    cy.get('[data-testid="dateEnd"]').as('dateEnd').should('exist')

    // type inputs
    cy.get('@username').type('maria')
    cy.get('@phone').type('12345')
    cy.get('@email').type('maria@test.com')
    cy.get('@dateStart').type('2023-01-01')
    cy.get('@dateEnd').type('2023-01-23')

    // get a submit button
    cy.get('[type="submit"]').click()
    cy.get('#alert-dialog-title').should('have.text', "Rent bike confirmation")
    cy.get('#alert-dialog-description').should('include.text', 'Your price to rent')
    cy.get('.MuiDialogActions-root').children().should('have.length', 2)
    cy.get('.MuiDialogActions-root > :nth-child(2)').click()

    // epayco form
    cy.get('#ard3').should('exist')
  })
})