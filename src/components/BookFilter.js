import React, { useState } from 'react'
import booksMockData from '../mocks/books'
import BookList from './BookList'

export default function BookFilter() {
  const [books, setBooks] = useState(booksMockData)
  const [selectedFilter, setSelectedFilter] = useState('All')

  const selectFilter = (filter) => {
    setSelectedFilter(filter)
    setBooks(
      filter === 'All'
        ? booksMockData
        : booksMockData.filter((book) => book.category === filter)
    )
  }

  const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

  const tabItems = filters.map((filter) => (
    <li
      className={filter === selectedFilter ? 'active' : ''}
      key={filter}
      onClick={() => selectFilter(filter)}
    >
      <a href="#0">{filter}</a>
    </li>
  ))
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="nav nav-pills text-center">{tabItems}</ul>
        </div>
      </div>
      <BookList books={books} />
    </div>
  )
}
