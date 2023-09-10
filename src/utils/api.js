export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_GEODB_API_Key,
		'X-RapidAPI-Host': import.meta.env.VITE_GEODB_API_Host,
	},
};
