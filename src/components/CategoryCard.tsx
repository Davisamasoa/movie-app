interface CategoryCardProps {
	title: string;
	imageUrl: string;
}

export function CategoryCard({ title, imageUrl }: CategoryCardProps) {
	return (
		<picture className="cursor-pointer relative">
			<img
				className="transition-all z-0 duration-300  md:w-40 lg:w-52 sm:w-24 w-24  hover:scale-125"
				src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
			/>
		</picture>
	);
}
