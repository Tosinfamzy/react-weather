/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions } from '../../utils/api';
export default function Search({ onSearchChange }) {
	const [search, setSearch] = useState('');

	const loadOptions = async (inputValue) => {
		try {
			const response = await fetch(
				`${
					import.meta.env.VITE_GEODB_API_URL
				}/cities?minPopulation=100000&namePrefix=${inputValue}`,
				geoApiOptions
			);
			const result = await response.json();
			return {
				options: result.data.map((city) => {
					return {
						value: `${city.latitude} ${city.longitude}`,
						label: `${city.name}, ${city.countryCode}`,
					};
				}),
			};
		} catch (error) {
			console.error(error);
			return error;
		}
	};
	const handleOnChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};
	return (
		<AsyncPaginate
			placeholder='Search for city'
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	);
}
