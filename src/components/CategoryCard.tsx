interface CategoryCardProps {
	title: string;
	imageUrl: string;
}

export function CategoryCard({ title, imageUrl }: CategoryCardProps) {
	return (
		<picture className="cursor-pointer">
			<img
				className="transition-all z-0 duration-300  w-32 hover:scale-125"
				src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
			/>
		</picture>
	);
}
