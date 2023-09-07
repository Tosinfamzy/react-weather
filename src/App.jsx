import './App.css';
import Search from './components/search/Search';

function App() {
	const handleOnSearchChange = (searchdata) => {
		console.log(searchdata);
	};
	return (
		<div className='container'>
			<Search onSearchChange={handleOnSearchChange} />
		</div>
	);
}

export default App;
