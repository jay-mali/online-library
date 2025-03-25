// src/pages/BookDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BookDetails.css';

function BookDetails() {
  const { id } = useParams();
  const bookId = parseInt(id, 10);
  const books = useSelector((state) => state.books.list);

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return (
      <div className="details-container">
        <h2>Book not found.</h2>
        <Link to="/books" className="back-btn">← Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>

      <Link to="/books" className="back-btn">← Back to Browse</Link>
    </div>
  );
}

export default BookDetails;
