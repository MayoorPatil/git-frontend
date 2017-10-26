const showBooksTemplate = require('../templates/helpers/books.handlebars')

const getBooksSuccess = (data) => {
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('#books').html(showBooksHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getBooksSuccess,
  failure
}
