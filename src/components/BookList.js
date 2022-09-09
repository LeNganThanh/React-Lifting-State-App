import React from 'react'

export default function BookList({ books, tabItems }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2>Books</h2>
          <hr className="star-primary" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="nav nav-pills text-center">{tabItems}</ul>
        </div>
      </div>
      <div className="row book-list">
        {books.map((book) => (
          <div className="col-xs-6 col-sm-3" key={book.id}>
            <div className="thumbnail">
              <img alt="" className="img-responsive" src={book.cover} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
