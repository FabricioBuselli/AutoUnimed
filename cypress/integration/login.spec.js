/// <reference types="cypress" />

it('go to unimed', () => {
    cy.visit('https://unimedbh.blip.ai/application')
cy.get('#email')
        .type('fabricio.buselli@proversolucoes.com.br')
        .should('have.value', 'fabricio.buselli@proversolucoes.com.br')
    cy.get('#password')
        .type('Prover@2021')
        .should('have.value', 'Prover@2021')
    cy.get('#blip-login').click()
    cy.wait (10000)
    cy.visit('https://unimedbh.blip.ai/application/detail/faleconoscohml1/home')
    cy.wait(10000)
    cy.get('.icon-lab').click()
    cy.get('.bp-c-cloud.tooltip-icon-hover').click()
})