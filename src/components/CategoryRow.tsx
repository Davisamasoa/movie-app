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
		<section className=" mt-4 mb-5 z-0">
			<h2 className="sm:text-3xl text-2xl tracking-wide font-semibold mb-3 text-white">{title}</h2>
			<div className="flex max-w-none overflow-y-hidden  md:overflow-x-auto    z-0 row">
				{movies.map(({ id, title, poster_path }) => (
					<CategoryCard key={id} title={title} imageUrl={poster_path} />
				))}
			</div>
		</section>
	);
}
