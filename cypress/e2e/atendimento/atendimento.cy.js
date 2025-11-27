/// <reference types="cypress"/>


describe('Atendimento - Plataforma Quanta', () => {
    
    it('Atendimento Prevcoop', () => {

        cy.loginQuanta()
        cy.selecionarVisaoQuanta()
        cy.botaoIniciarAtendimento()
        cy.botaoIniciarAtendimento()
        cy.buscarParticipante()

    })    
});
