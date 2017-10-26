const showBooksTemplate = require('../templates/helpers/books.handlebars')

const getBooksSuccess = (data) => {
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('#books').html(showBooksHtml)
}

module.exports = {
  getBooksSuccess
}
