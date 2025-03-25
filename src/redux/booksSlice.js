// src/redux/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    list: [
      { id: 1, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', description: 'A space epic on Arrakis.', rating: 4.8 },
      { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', description: 'A brief history of humankind.', rating: 4.7 },
      { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fiction', description: 'Adventure of Bilbo Baggins.', rating: 4.6 },
      { id: 4, title: 'The Martian', author: 'Andy Weir', category: 'Sci-Fi', description: 'Survival on Mars.', rating: 4.5 },
      { id: 5, title: 'Educated', author: 'Tara Westover', category: 'Biography', description: 'Escaping survivalist family to education.', rating: 4.4 },
      { id: 6, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', description: 'A story of racial injustice.', rating: 4.9 },
      { id: 7, title: 'Atomic Habits', author: 'James Clear', category: 'Non-Fiction', description: 'Build good habits.', rating: 4.5 },
      { id: 8, title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', category: 'Mystery', description: 'Classic detective stories.', rating: 4.6 },
      { id: 9, title: 'Becoming', author: 'Michelle Obama', category: 'Biography', description: 'Memoir of the former First Lady.', rating: 4.8 },
      { id: 10, title: 'Gone Girl', author: 'Gillian Flynn', category: 'Mystery', description: 'A twisted tale of marriage.', rating: 4.3 },
    ]
  };
  

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
