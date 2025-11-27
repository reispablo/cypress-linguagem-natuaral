Cypress.Commands.add('loginQuanta', () => {
  cy.prompt([
    'visit https://plataforma.hlg.portalquanta.com.br/login',
    'type "04598956054" into the CPF field',
    'type "Test@mobi25" into the password field',
    'click the "Entrar na plataforma" button',
    'wait until the "Quanta" button is visible'
  ])
})

Cypress.Commands.add('selecionarVisaoQuanta', () => {
  cy.prompt([
    'click the "Quanta" button'
  ])
})

Cypress.Commands.add('botaoIniciarAtendimento', () => {
  cy.prompt([
    'wait until the "Iniciar atendimento" button is visible',
    'click the "Iniciar atendimento" button'
  ])
})

Cypress.Commands.add('buscarParticipante', () => {
  cy.prompt([
    'wait until the "Filtrar por" button is visible',
    'click the combobox with role "combobox"',
    'click the "CPF" ng-option-label',
    'type "79893511968" into the "Buscar participante" input',
    'click the "Alcides Antonio Muller" participant-name'
  ])
})