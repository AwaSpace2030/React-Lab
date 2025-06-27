import { useEffect, useState } from "react";
import styles from "./Pro2.module.css";
import { Overview } from "../../components/Overview";

export function Weather() {
  const overviewPoints = [
    "Fetching real-time weather data for multiple cities using WeatherAPI and fetch API",
    "Managing asynchronous data and component state using React hooks: useState and useEffect",
    "Handling loading and error states to improve user experience during data fetching",
    "Displaying dynamic weather information including temperature, condition, region, and country",
    "Using CSS Modules for scoped and maintainable styling of the weather components",
  ];

  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cities = [
    { name: "Berlin", region: "Brandenburg", country: "Germany" },
    { name: "Cairo", region: "Cairo Governorate", country: "Egypt" },
    { name: "London", region: "Greater London", country: "UK" },
    { name: "Seattle", region: "Washington", country: "USA" },
    { name: "Paris", region: "Île-de-France", country: "France" },
    { name: "Tokyo", region: "Tokyo Prefecture", country: "Japan" },
    { name: "Dubai", region: "Dubai", country: "UAE" },
    { name: "Sydney", region: "New South Wales", country: "Australia" },
  ];

  useEffect(() => {
    const key = "94467108648e48bd9b0141647252506";

    Promise.all(
      cities.map(({ name }) =>
        fetch(
          `https://api.weatherapi.com/v1/current.json?key=${key}&q=${name}`
        ).then((res) => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
      )
    )
      .then((dataArray) => {
        setWeatherData(dataArray);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        setError("Error occurred while fetching weather data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading weather data...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <>
      <div className="con_wrapper">
        <div className={styles.Weateher_con}>
          <h1>Today Weather - using API</h1>
          <div className={styles.cards_group}>
            {weatherData.map((weather, index) => {
              const { location, current } = weather;
              return (
                <div key={index} className={styles.card}>
                  <img
                    src={`https:${current.condition.icon}`}
                    alt={current.condition.text}
                    style={{ width: 48, height: 48 }}
                  />
                  <h4>{location.name}</h4>

                  <ul>
                    <li>
                      Temperature: <span>{current.temp_c}°</span>
                    </li>
                    <li>Condition: {current.condition.text}</li>
                    <li>Region: {location.region || cities[index].region}</li>
                    <li>
                      Country: {location.country || cities[index].country}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <Overview title="Overview" points={overviewPoints} />
      </div>
    </>
  );
}
