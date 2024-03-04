import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../context';
import axios from 'axios';
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const { isLoading, data, isError } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: () => axios.get(`${url}&query=${searchTerm}`),
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  const results = data.data.results;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results returned...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((image) => (
        <img
          src={image?.urls?.regular}
          key={image.id}
          alt={image.alt_description}
          className="img"
        />
      ))}
    </section>
  );
};
export default Gallery;
