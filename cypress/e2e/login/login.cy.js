describe('Exemplo de uso do cy.prompt', () => {
    it('Deve lidar com um prompt do navegador', () => {
        describe('Login - Plataforma Quanta', () => {
            it('should login using CPF and password', () => {

                cy.prompt(
                    [
                        'visit https://plataforma.hlg.portalquanta.com.br/login',
                        'type "04598956054" into the CPF field',
                        'type "Test@mobi25" into the password field',
                        'click the "Entrar na plataforma" button'
                    ],
                    {
                        // opcional – ajuda a IA a escolher seletores mais fortes
                        includeGenerativeStepsLog: true,
                        selectorHints: [
                            'data-testid',
                            'placeholder',
                            'label',
                            'text',
                            'value'
                        ]
                    }
                )
            })
        })
    })
})