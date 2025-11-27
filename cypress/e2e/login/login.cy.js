/// <reference types="cypress"/>


describe('Login - Plataforma Quanta', () => {

    it('login em ingles', () => {
        cy.prompt(
            [
                'visit https://plataforma.hlg.portalquanta.com.br/login',
                'type "04598956054" into the CPF field',
                'type "Test@mobi25" into the password field',
                'click the "Entrar na plataforma" button',
                'wait until the "Quanta" button is visible',           
                'click the "Quanta" button'
            ]
        )
    })

    it('login em portugues', () => {
        cy.prompt(
            [
                'visite https://plataforma.hlg.portalquanta.com.br/login',
                'escreva "04598956054" em CPF campo',
                'escreva "Test@mobi25" em password campo',
                'clique em "Entrar na plataforma" botao',
                'espere ate o "Quanta" button estar visivel',
                'clique em "Quanta" botao'
            ]
        )
    })
})