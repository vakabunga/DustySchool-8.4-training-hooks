import { useEffect, useState, type FC } from 'react';
import { cnMyGeo } from './MyGeo.classname';

const MyGeo: FC<any> = () => {
	const [coords, setCoords] = useState<{ latitude?: number; longitude?: number }>({});
	const [errMsg, setErrMsg] = useState<string | false>(false);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				setCoords({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
			},
			(error) => {
				setErrMsg(error.message);
			}
		);
	}, []);

	return (
		<div className={cnMyGeo()}>
			{!errMsg ? `You geolocation is: longitude ${coords.longitude} latitude ${coords.latitude}` : errMsg}
		</div>
	);
};

export { MyGeo };
