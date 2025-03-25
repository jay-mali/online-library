
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.rating || isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5)
      newErrors.rating = 'Rating must be a number between 0 and 5';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newBook = {
      ...formData,
      id: Date.now(),
      rating: parseFloat(formData.rating)
    };

    dispatch(addBook(newBook));
    navigate(`/books/${formData.category}`);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="add-form-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input name="title" value={formData.title} onChange={handleChange} />
          {errors.title && <span className="error">{errors.title}</span>}
        </label>

        <label>
          Author:
          <input name="author" value={formData.author} onChange={handleChange} />
          {errors.author && <span className="error">{errors.author}</span>}
        </label>

        <label>
          Category:
          <input name="category" value={formData.category} onChange={handleChange} />
          {errors.category && <span className="error">{errors.category}</span>}
        </label>

        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
          {errors.description && <span className="error">{errors.description}</span>}
        </label>

        <label>
          Rating (0-5):
          <input name="rating" value={formData.rating} onChange={handleChange} />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </label>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
