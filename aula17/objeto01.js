let amigo = {
nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2) // Adiciona uma função na variável. Soma 2kg no objeto "amigo" no console.  
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)