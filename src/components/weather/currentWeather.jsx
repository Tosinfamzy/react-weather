import './currentWeather.css';
import { FaSun } from 'react-icons/fa';
export default function CurrentWeather() {
	return (
		<div className='weather'>
			<div className='top'>
				<div>
					<p className='city'>Belgrade</p>
					<p className='weather-description'>Sunny</p>
				</div>
				<FaSun size={30} />
			</div>
			<div className='bottom'>
				<p className='temperature'>18C</p>
				<div className='details'>
					<div className='parameter-row'>
						<span className='parameter-label '>Details</span>
						<div className='parameter-row'>
							<span className='parameter-label'>Feels like </span>
							<span className='parameter-value'>22C </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
