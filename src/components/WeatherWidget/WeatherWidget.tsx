import { useGeolocation } from "../../hooks/useGeolocation";
import { useWeather } from "../../hooks/useWeather";

import { cnWeatherWidget } from "./WeatherWidget.classname";

const WeatherWidget = () => {
    const { errMsgGeo, coords } = useGeolocation();
    const { locWeather, errMsg } = useWeather({
        longitude: coords.longitude,
        latitude: coords.latitude,
    });

    return (
        <div className={cnWeatherWidget()}>
            <div className={cnWeatherWidget("Weather")}>
                {errMsgGeo ? errMsgGeo
                : errMsg ||
                locWeather.city === undefined ||
                locWeather.temp === undefined
                    ? "Loading..."
                    : `Temperature in ${locWeather.city} - ${locWeather.temp}`}
            </div>
        </div>
    );
};

export { WeatherWidget };
