import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import './BrowseBooks.css';

function BrowseBooks() {
  const { category } = useParams();
  const isBrowsingAll = !category;
  const books = useSelector((state) => state.books.list);
  const [searchTerm, setSearchTerm] = useState('');

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredBooks = books.filter((book) => {
    const matchesCategoryRoute = isBrowsingAll || book.category.toLowerCase() === category.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(normalizedSearch) ||
      book.author.toLowerCase().includes(normalizedSearch) ||
      book.category.toLowerCase().includes(normalizedSearch);
    return matchesCategoryRoute && matchesSearch;
  });

  return (
    <div className="browse-container">
      <h1>Browse: {isBrowsingAll ? 'Books' : category}</h1>

      <input
        type="text"
        placeholder="Search by title, author, or category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
