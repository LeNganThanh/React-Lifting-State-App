import React from 'react'

import BookFilter from './BookFilter'
export default function Books() {
  return (
    <section id="books">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Books</h2>
            <hr className="star-primary" />
          </div>
        </div>
      </div>
      <BookFilter />
    </section>
  )
}
