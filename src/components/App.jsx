import {useEffect, useState} from "react";
import {LineChart} from "react-chartkick";
import "chartkick/chart.js";

export default function App() {
  const [prices, setPrices] = useState(null);
  const [cheapestHour, setCheapestHour] = useState(null);
  const [mostExpensiveHour, setMostExpensiveHour] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000")
        .then(response => response.json())
        .then(data => {
            const cleanedPricesData = [];
            let cheapestPrice = data.prices[0].price;
            let mostExpensivePrice = data.prices[0].price;

            data.prices.forEach(d => {
                const { endDate: _, ...cleanedObj } = d;
                cleanedPricesData.push([cleanedObj.startDate, cleanedObj.price]);

                if (cleanedObj.price < cheapestPrice) {
                    cheapestPrice = cleanedObj.price;
                }
                if (cleanedObj.price > mostExpensivePrice) {
                    mostExpensivePrice = cleanedObj.price;
                }
            });

            const cheapestHourElement = cleanedPricesData.find(({ 1: price }) => price === cheapestPrice);
            const mostExpensiveHourElement = cleanedPricesData.find(({ 1: price }) => price === mostExpensivePrice);

            setCheapestHour(cheapestHourElement);
            setMostExpensiveHour(mostExpensiveHourElement);
            setPrices(cleanedPricesData);
        })
        .catch(error => console.log(error));
  }, []);

  return (
      <div>
          { prices && <div>
              <LineChart data={prices} />
              <p>Cheapest hour: {cheapestHour[0]}, price: {cheapestHour[1]}</p>
              <p>Most expensive hour: {mostExpensiveHour[0]}, price: {mostExpensiveHour[1]}</p>
          </div> }
      </div>
  );
}