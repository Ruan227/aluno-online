describe('Testando',()=>{
    it('Soma de números',()=>{
       cy.visit('http://localhost:3000/requerimentos')
       cy.get('body > div > div > div.card-header > a').click()
       cy.get("#inputDisciplina").select("ADS032 - Construção de Frontend")
       cy.get("#inputProva").select("A1")
       cy.get('#inputArgumentacao').type('Teste Cypress')
       cy.get('body > div > div > div.card-body > form > button').click()
       cy.get('body > div > div > div.card-body').contains('ADS032 - Construção de Frontend')
       cy.get('body > div > div > div.card-body').contains('Pendente')
       })
        })