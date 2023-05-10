
describe('template spec', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  beforeEach(() => {
    cy.intercept(
      'https://secure.epayco.co/**/*',
      { middleware: false },
      (req) => {
        req.reply({ id_session: 'asasf' })
      }
    )
  })

  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiTypography-h2').should("have.text", "Bicycles to rent")
    cy.get('.MuiBox-root').children().should("have.length.of.at.least", 1)

    cy.get('[data-cy="item"]').first().as('item')
    cy.get('@item').should("include.text", 'bike 1')
    cy.get('@item').click()

    cy.get('.MuiButtonBase-root > .MuiCardContent-root').should('exist')

    cy.get('[data-cy="formbike"]').first().as('form')

   // cy.get('@form')
    expect('@form').to.exist

    cy.get('[data-testid="username"]').as('username')
    cy.get('[data-testid="phone"]').as('phone')
    cy.get('[data-testid="email"]').as('email')
    cy.get('[data-testid="dateStart"]').as('dateStart')
    cy.get('[data-testid="dateEnd"]').as('dateEnd')

    expect('@username').to.exist
    expect('@phone').to.exist
    expect('@email').to.exist
    expect('@dateStart').to.exist
    expect('@dateEnd').to.exist

    cy.get('@username').type('maria')
    cy.get('@phone').type('123456')
    cy.get('@email').type('maria@test.com')
    cy.get('@dateStart').type('2020-01-11')
    cy.get('@dateEnd').type('2020-02-11')

    cy.get('[type="submit"]').click()

    cy.get('#alert-dialog-title').should('have.text', 'Rent bike confirmation')
    cy.get('.MuiDialogActions-root').children().should('have.length', '2')


    cy.get('.MuiDialogActions-root > :nth-child(2)').click()
    cy.get('#ard3').should('exist')

    // cy.intercept({
    //   method: 'POST',
    //   url: '/create/*',
    //   hostname: 'secure.epayco.co',
    // }, (req => {
    //   req.reply({ plan: 'asasf' })
    // }).as('payment')

  

  })
})