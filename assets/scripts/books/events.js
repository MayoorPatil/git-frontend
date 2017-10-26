const api = require('./api.js')
const ui = require('./ui.js')

const onGetBooks = (event) => {
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

const addBookHandlers = () => {
  $('#getBooks').on('click', onGetBooks)
}

module.exports = addBookHandlers
