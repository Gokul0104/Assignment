
console.log('hello');

/*const fs = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const run = async () => {
  const res = await readFileAsync('./nodeproject.js')
  console.log(res)
}

run()*/

const fs = require('fs')

const readFile = (path, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.readFile(path, opts, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })

const writeFile = (path, data, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, opts, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })

module.exports = {
  readFile,
  writeFile
}





const run = async () => {
  const res = await readFile('./nodeproject.js')
  console.log(res)
}

run()
