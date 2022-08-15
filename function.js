//Variables
let i, index, age, name, option, nameAndAge, ask, note;

const numbers = [
  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
]

const names = [
  'Maria', 'Fernanda', 'Davi', 'Mirella', 'Júlia', 'Luigi', 'Helena', 'João', 'Emanuelly', 
  'Bárbara', 'Yago', 'Brenda', 'Diego','Stephany', 'Leandro', 'Ana', 'Danilo', 'Luiza', 
  'Joana', 'Sofia', 'Olivia', 'Bruno', 'Heloísa', 'Vitória', 'Sarah', 'Benício', 'Mariane', 
  'Camila', 'Lucca', 'Thiago', 'Leandro', 'Henrique', 'Milena', 'Otávio']

//Functions
function getValue () {
  i = Math.ceil(Math.random() * 33)
  index = Math.ceil(Math.random() * 33)
  age = numbers[i]
  name = names[index]
  return
}

function getRandomPeople () {
  getValue()
  return nameAndAge = `Nome: ${name}
Idade: ${age}`
}

while (option != 4) {
  option = Number(prompt(`
Olá usuário! Bem vindo ao Random People&Numbers!
  
Digite a opção desejada:

1. Gerar várias pessoas aleatórias.
2. Gerar uma única pessoa aleatória.
3. Gerar uma nota aleatória.
4. Sair do programa.
`))
  switch (option) {
    case 1: 
      // while(ask != Number(ask) || ask === 0) {
      ask = Number(alert(`Em desenvolvimento`))
      //  if (ask >= 1) {
      // break
      //  } else if (option != Number(ask) || ask == 0)
      //  alert('Opção inválida. Tente novamente.')
// }     
      break

    case 2:
      alert(`Você gerou:

${getRandomPeople()}`)
      break

      case 3:
        note = Math.ceil(Math.random() * 10)
        alert(`Você tirou ${note}`)
        break

      case 4:
        alert('Você saiu do programa.')
        break
      
    default:
      alert('Opção inválida. Tente novamente.')
  }
}

