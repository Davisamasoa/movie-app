import { useEffect, useState } from "react";
import { Movie } from "../@types/Movies";
import { api } from "../services/api";
import { CategoryCard } from "./CategoryCard";

interface CategoryRowProps {
  title: string;
  path: string;
}

export function CategoryRow({ title, path }: CategoryRowProps) {
  const [movies, setMovies] = useState<Movie[] | []>([]);

  useEffect(() => {
    api.get(path).then(({ data }) => setMovies(data.results));
  }, [path]);

  return (
    <section>
      <h2>{title}</h2>
      <div>
        {movies.map(({ id, title, poster_path }) => (
          <CategoryCard key={id} title={title} imageUrl={poster_path} />
        ))}
      </div>
    </section>
  );
}
