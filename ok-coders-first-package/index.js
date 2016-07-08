var _ = require('lodash')
var forEach = require('./forEach')

console.log(forEach)
forEach.forEach(['hey', 'what', 'yeah', 'so'], (s) => console.log(s))
console.log(_.kebabCase('hello world!'))

exports.hello = () => console.log('Hellooooo!')
exports.forEach = forEach.forEach