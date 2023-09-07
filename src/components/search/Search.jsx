/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions } from '../../utils/api';
export default function Search({ onSearchChange }) {
	const [search, setSearch] = useState('');

	const handleOnChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	const loadOptions = async (inputValue) => {
		try {
			const response = await fetch(
				`${
					import.meta.env.VITE_GEODB_API_URL
				}/cities?minPopulation=100000namePrefix=${inputValue}`,
				geoApiOptions
			);
			const result = await response.json();
			console.log(result);
			return result;
		} catch (error) {
			console.error(error);
		}
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
