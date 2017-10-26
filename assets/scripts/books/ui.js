const showBooksTemplate = require('../templates/books.handlebars')

const getBooksSuccess = (data) => {
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('#books').html(showBooksHtml)
}

module.exports = {
  getBooksSuccess
}
