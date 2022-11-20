import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import CardWeather from "./CardWeather";
import CurrentDay from "./CurrentDay";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("hello");
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://weatherdbi.herokuapp.com/data/weather/london"
        );
        setData(data);
        setLoading(false);
        console.log(data);
        console.log(data.currentConditions);
      } catch (error) {
        console.log(error);
      }
      // fetch("https://jsonplaceholder.typicode.com/todos/1")
      //   .then((response) => response.json())
      //   .then((json) => console.log(json));
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h3>Current day</h3>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div className="container">
          <div className="row ">
            <div className="d-flex justify-content-center">
              <CurrentDay
                imageUrl={data.currentConditions.iconURL}
                day={data.currentConditions.dayhour}
                comment={data.currentConditions.comment}
                temp={data.currentConditions.temp.c}
                wind={data.currentConditions.wind.km}
                humidity={data.currentConditions.humidity}
              />
            </div>
          </div>
        </div>
      )}
      <h3>Next days</h3>
      <div className="container d-flex justify-content-around flex-wrap">
        {loading ? (
          <h2>loading...</h2>
        ) : (
          data.next_days.map((el, i) => (
            <div key={Math.random()} className="m-3">
              <CardWeather
                imageUrl={el.iconURL}
                day={el.day}
                comment={el.comment}
                minTemp={el.min_temp.c}
                maxTemp={el.max_temp.c}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
