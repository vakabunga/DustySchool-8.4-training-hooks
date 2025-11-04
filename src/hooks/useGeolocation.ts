import { useEffect, useState } from "react";

export type Coords = {
    latitude?: number;
    longitude?: number;
};

const useGeolocation = () => {
    const [coords, setCoords] = useState<Coords>({});
    const [errMsgGeo, setErrMsgGeo] = useState<string | false>(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setCoords({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                });
            },
            (error) => {
                setErrMsgGeo(error.message);
            }
        );
    }, []);

    return { errMsgGeo, coords };
};

export { useGeolocation };
