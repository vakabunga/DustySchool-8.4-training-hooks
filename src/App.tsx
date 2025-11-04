import { WeatherWidget } from './components/WeatherWidget/WeatherWidget';

import { cnApp } from './App.classname';

const App = () => {


	return (
		<div className={cnApp()}>
			<WeatherWidget />
		</div>
	);
}

export { App };
