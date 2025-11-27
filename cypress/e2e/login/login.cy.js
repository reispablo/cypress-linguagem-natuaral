/// <reference types="cypress"/>


describe('Login - Plataforma Quanta', () => {
    it('login em ingles', () => {

        cy.prompt(

            [

                'visit https://plataforma.hlg.portalquanta.com.br/login',

                'type "04598956054" into the CPF field',

                'type "Test@mobi25" into the password field',

                'click the "Entrar na plataforma" button'

            ]
        )
    })

    it('login em portugues', () => {

        cy.prompt(

            [

                'visite https://plataforma.hlg.portalquanta.com.br/login',

                'escreva "04598956054" em CPF field',

                'escreva "Test@mobi25" em password field',

                'clique em "Entrar na plataforma" button'

            ]
        )
    })
})