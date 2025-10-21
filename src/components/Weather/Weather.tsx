import { useEffect, useState, type FC } from "react";
import { cnWeather } from "./Weather.classname";

type WeatherProps = {
    lon: number;
    lat: number;
}

type WeatherResponse = {
    main: {
        temp: number;
    };
    name: string;
};

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Weather: FC<WeatherProps> = ({ lon, lat }) => {
    const [locWeather, setLocWeather] = useState<{ city?: string, temp?: number }>({});

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`)
            .then(response => response.json())
            .then((result: WeatherResponse) => {
                setLocWeather({ city: result.name, temp: result.main.temp })
            })
    }, []);

    return <div className={cnWeather()}>Temperature in {locWeather.city} - {locWeather.temp}</div>
}

export { Weather };
