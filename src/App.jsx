import { useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/weather/currentWeather';
import Forecast from './components/weather/Forecast';

function App() {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecastWeather, setForecastWeather] = useState(null);
	const handleOnSearchChange = async (searchdata) => {
		const [lat, long] = searchdata.value.split(' ');
		try {
			const response = await fetch(
				`${import.meta.env.VITE_WEATHER_API_URL}?lat=${lat}&lon=${long}&appid=${
					import.meta.env.VITE_WEATHER_API_KEY
				}&units=metric`
			);
			const forecastResponse = await fetch(
				`${
					import.meta.env.VITE_FORECAST_API_URL
				}?lat=${lat}&lon=${long}&appid=${
					import.meta.env.VITE_WEATHER_API_KEY
				}&units=metric`
			);
			//Should probably use promise.all in the refactor
			const result = await response.json();
			const forecastResult = await forecastResponse.json();
			setCurrentWeather({ city: searchdata.label, ...result });
			setForecastWeather({ city: searchdata.label, ...forecastResult });
		} catch (error) {
			console.error(error);
			return error;
		}
	};
	return (
		<div className='container'>
			<Search onSearchChange={handleOnSearchChange} />
			{currentWeather && <CurrentWeather data={currentWeather} />}
			{forecastWeather && <Forecast data={forecastWeather} />}
		</div>
	);
}

export default App;
