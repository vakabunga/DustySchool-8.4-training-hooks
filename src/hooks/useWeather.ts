import { useEffect, useState } from "react";

import type { Coords } from "./useGeolocation";

type WeatherResponse = {
    main: {
        temp: number;
    };
    name: string;
};

type LocWeather = {
    city?: string;
    temp?: number;
};

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const useWeather = ({ latitude, longitude }: Coords) => {
    const [locWeather, setLocWeather] = useState<LocWeather>({});
    const [errMsg, setErrMsg] = useState<string | false>(false);

    useEffect(() => {
        if (latitude === undefined || longitude === undefined) {
            setLocWeather({});
            setErrMsg(false);
            return;
        }

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`
        )
            .then((response) => response.json())
            .then((result: WeatherResponse) => {
                setLocWeather({ city: result.name, temp: result.main.temp });
            })
            .catch((err) => {
                console.log(err);
                setErrMsg(err);
            });
    }, [latitude, longitude]);

    return { locWeather, errMsg };
};

export { useWeather };
