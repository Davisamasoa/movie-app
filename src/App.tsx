import { CategoryRow } from "./components/CategoryRow";
import { categories } from "./services/api";

export function App() {
  return (
    <div>
      {categories.map(({ title, path }) => (
        <CategoryRow key={title} title={title} path={path} />
      ))}
    </div>
  );
}
