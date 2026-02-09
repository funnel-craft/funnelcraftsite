import { createContext, useContext, useState } from 'react';

const BookFormContext = createContext(null);

export function BookFormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);
  return (
    <BookFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </BookFormContext.Provider>
  );
}

export function useBookForm() {
  const ctx = useContext(BookFormContext);
  if (!ctx) throw new Error('useBookForm must be used within BookFormProvider');
  return ctx;
}
