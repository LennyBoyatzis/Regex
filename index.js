'use strict'

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`)
}

const str = `Cat sat on the hat.`
const regex = /\./g

output(str, regex, document.querySelector('pre'))

// Finding repeating patterns

const str = `aaaaaa`;
const regex = /aaaaa/g
const regex = /a{4}/g
const regex = /a{4,}/g
const regex = /a{4,6}/g
const regex = /a*/g

// console.log(str.match(regex))
// console.log(str.replace(regex, str => 'XX'))
// console.log(str.search(regex)) // returns index of first pattern found
