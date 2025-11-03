import { useCallback, useState } from 'react';

import { MyGeo } from './components/MyGeo/MyGeo';
import { Weather } from './components/Weather/Weather';

export type Coords = {
	latitude?: number;
	longitude?: number
}

function App() {
	const [coords, setCoords] = useState<Coords>({});

	const handleGeopositioning = useCallback((pos: Coords) => {
		setCoords({ latitude: pos.latitude, longitude: pos.longitude });
	}, []);

	return (
		<div>
			<MyGeo onGetGeo={handleGeopositioning} />
			<Weather lon={coords.longitude} lat={coords.latitude} />
		</div>
	);
}

export { App };
