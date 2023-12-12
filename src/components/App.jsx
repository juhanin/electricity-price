import {useEffect, useState} from "react";
import {LineChart} from "react-chartkick";
import "chartkick/chart.js";

export default function App() {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000")
        .then(response => response.json())
        .then(data => {
            const cleanedPricesData = [];
            data.prices.forEach(d => {
                const { endDate: _, ...cleanedObj } = d;
                cleanedPricesData.push([cleanedObj.startDate, cleanedObj.price]);
            });
            setPrices(cleanedPricesData);
        })
        .catch(error => console.log(error));
  }, []);

  return (
      <div>
          { prices && <LineChart data={prices} /> }
      </div>
  );
}