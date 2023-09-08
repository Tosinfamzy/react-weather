import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/weather/currentWeather';

function App() {
	const handleOnSearchChange = (searchdata) => {
		console.log(searchdata);
	};
	return (
		<div className='container'>
			<Search onSearchChange={handleOnSearchChange} />
			<CurrentWeather />
		</div>
	);
}

export default App;
