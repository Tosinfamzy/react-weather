import { useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/weather/currentWeather';

function App() {
	const [currentWeather, setCurrentWeather] = useState(null);
	const handleOnSearchChange = async (searchdata) => {
		const [lat, long] = searchdata.value.split(' ');
		try {
			const response = await fetch(
				`${import.meta.env.VITE_WEATHER_API_URL}?lat=${lat}&lon=${long}&appid=${
					import.meta.env.VITE_WEATHER_API_KEY
				}&units=metric`
			);
			const result = await response.json();
			setCurrentWeather({ city: searchdata.label, ...result });
		} catch (error) {
			console.error(error);
			return error;
		}
	};
	return (
		<div className='container'>
			<Search onSearchChange={handleOnSearchChange} />
			{currentWeather && <CurrentWeather data={currentWeather} />}
		</div>
	);
}

export default App;
