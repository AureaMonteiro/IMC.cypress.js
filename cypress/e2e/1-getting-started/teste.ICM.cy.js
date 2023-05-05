///<reference types = "cypress"/>
describe('testando calculo ICM', ()=>{
beforeEach(()=> {
cy.visit('https://api.new.mentorama.com.br/storage/media-files/QA1/M4/tarefa_1.html')

})

it ('Preencho o meu nome', () =>{
cy.get('input[name="name"]').type('Isabella');



it ('Preencho o meu peso', () =>{
    cy.get('input[name="height"]').type('1.42');



it ('Preencho o meu peso', () =>{
    cy.get('input[name="weight"]').type('45kg');



it ('clico no botão calcular', () =>{
    cy.get('button').click();
    
})

})

  })

    })

       })