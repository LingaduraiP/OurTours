import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchingData = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("something went wrong");
    }
    const data = await response.json();

    setTours(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const Too = () => {
    return (
      <div className="title">
        <h3>No tours left</h3>
        <button className="btn" onClick={fetchingData}>
          refresh
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      <h2>Our Tours</h2>
      {isLoading && <Loading />}
      {!isLoading && tours.length === 0 && <Too />}
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}
export default App;
