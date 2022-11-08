interface CategoryCardProps {
  title: string;
  imageUrl: string;
}

export function CategoryCard({ title, imageUrl }: CategoryCardProps) {
  return (
    <picture>
      <img src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} />
      <figcaption>{title}</figcaption>
    </picture>
  );
}
