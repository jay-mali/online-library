
import React from 'react';
import BookCard from '../components/BookCard';
import './Home.css';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Biography'];

const popularBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A novel set in the Jazz Age...',
    rating: 4.5
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian novel...',
    rating: 4.7
  },
];

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Online Library</h1>

      <section>
        <h2>Book Categories</h2>
        <ul className="categories">
          {categories.map((cat, idx) => (
            <li key={idx}>{cat}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Popular Books</h2>
        <div className="popular-books">
          {popularBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
