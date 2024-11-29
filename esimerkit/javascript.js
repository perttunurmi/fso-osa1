const x = 1
let y = 5

console.log(x, y)   // tulostuu 1, 5
y += 10
console.log(x, y)   // tulostuu 1, 15
y = 'teksti'
console.log(x, y)   // tulostuu 1, teksti
//x = 4               // aiheuttaa virheen

const t = [1, -1, 3]

console.log(t.length) // tulostuu 3
console.log(t[1])     // tulostuu -1

t.push(5)             // lisätään taulukkoon luku 5

console.log(t.length) // tulostuu 4

t.forEach(value => {
	console.log(value)  // tulostuu 1, -1, 3, 5 omille riveilleen
})

// value => {
//   console.log(value)
// }


const t2 = t.concat(5)

console.log(t)  // tulostuu [1, -1, 3]
console.log(t2) // tulostuu [1, -1, 3, 5]

const m1 = t.map(value => value * 2)
console.log(m1)   // tulostuu [2, 4, 6]

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
// tulostuu [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]


const [first, second, ...rest] = t

console.log(first, second)  // tulostuu 1, 2
console.log(rest)          // tulostuu [3, 4 ,5]

const object1 = {
	name: 'Arto Hellas',
	age: 35,
	education: 'Filosofian tohtori',
}

const object2 = {
	name: 'Full Stack -websovelluskehitys',
	level: 'aineopinto',
	size: 5,
}

const object3 = {
	name: {
		first: 'Juha',
		last: 'Tauriainen',
	},
	grades: [2, 3, 5, 3],
	department: 'TKTL',
}

console.log(object1.name)         // tulostuu Arto Hellas
const fieldName = 'age'
console.log(object1[fieldName])    // tulostuu 35

object1.address = 'Tapiola'
object1['secret number'] = 12341 // Mahdollistaa välilyönnit!


const sum = (p1, p2) => {
	console.log(p1)
	console.log(p2)
	return p1 + p2
}

const result = sum(1, 5)
console.log(result)

// Short hand
const square = p => {
	console.log(p)
	return p * p
}


// Tätä tapaa käytettiin jo mapissa
const square2 = p => p * p

const tSquared = t.map(p => p * p)
// tSquared on nyt [1, 4, 9]


function product(a, b) {
	return a * b
}

const vastaus = product(2, 6)

const average = function(a, b) {
  return (a + b) / 2
}

const vastaus2 = average(2, 5)
