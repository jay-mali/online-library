// src/components/BookCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p>⭐ {book.rating}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}

export default BookCard;
