import axios from "axios";

export const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

const apiKey = import.meta.env.VITE_API_KEY;

export const categories = [
	{
		title: "Populares",
		path: `/trending/movie/week?api_key=${apiKey}&language=pt-BR`,
	},
	{
		title: "Ação",
		path: `/discover/movie?api_key=${apiKey}&with_genres=28`,
	},
	{
		title: "Ficção científica",
		path: `/discover/movie?api_key=${apiKey}&with_genres=878`,
	},
	{
		title: "Animação",
		path: `/discover/movie?api_key=${apiKey}&with_genres=16`,
	},
	{
		title: "Comédia",
		path: `/discover/movie?api_key=${apiKey}&with_genres=35`,
	},

	{
		title: "Terror",
		path: `/discover/movie?api_key=${apiKey}&with_genres=53`,
	},
	{
		title: "Drama",
		path: `/discover/movie?api_key=${apiKey}&with_genres=18`,
	},
	{
		title: "Romance",
		path: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
	},
	{
		title: "Documentário",
		path: `/discover/movie?api_key=${apiKey}&with_genres=99`,
	},
];
