import { CategoryRow } from "./components/CategoryRow";
import { categories } from "./services/api";

export function App() {
	return (
		<div className="md:px-9 sm:px-7 px-4 py-4">
			<header className="  text-amber-300 flex justify-center">
				<h1 className=" flex justify-center md:text-8xl sm:text-6xl text-5xl font-bold tracking-wider">
					MOVIE APP
				</h1>
			</header>

			{categories.map(({ title, path }) => (
				<CategoryRow key={title} title={title} path={path} />
			))}
		</div>
	);
}
