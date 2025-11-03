import { useEffect, useState, type FC } from "react";

import { cnMyGeo } from "./MyGeo.classname";
import type { Coords } from "../../App";

type MyGeoProps = {
    onGetGeo: (coords: Coords) => void;
};

const MyGeo: FC<MyGeoProps> = ({ onGetGeo }) => {
    const [errMsg, setErrMsg] = useState<string | false>(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                onGetGeo({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                });
            },
            (error) => {
                setErrMsg(error.message);
            }
        );
    }, [onGetGeo]);

    return (
        <div className={cnMyGeo()}>
            {errMsg || ''}
        </div>
    );
};

export { MyGeo };
