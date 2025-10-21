import { MyGeo } from './components/MyGeo/MyGeo';
import { Weather } from './components/Weather/Weather';

function App() {

	return (
		<div>
			<MyGeo />
			<Weather lon={13.37890625} lat={52.51636123657227} />
		</div>
	);
}

export { App };
