describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiTypography-h2').should("have.text", "Bicycles to rent")
    cy.get('.MuiBox-root').children().should("have.length.of.at.least", 1)
  })
})