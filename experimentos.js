let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variável maluca: sem var e let
abc= 3 // não faça isso!!!
console.log(global.abc)

//module.exports  = { e: 456, f: false, g: 'teste' }

// É importante conhecer os ambientes que irá trabalhar
// Não crie variáveis em escopo global