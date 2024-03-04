import { useState } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    setSearchTerm('');
  };

  return (
    <section>
      <h1 className="title">Image Gallery</h1>
      <form className="search-form" onSubmit={handleSubmitForm}>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="form-input search-input"
          name="search"
          value={searchTerm}
          placeholder="cat"
        ></input>

        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
