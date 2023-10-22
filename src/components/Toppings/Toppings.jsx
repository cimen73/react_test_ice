import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Toppings = () => {
  const [tops, setTops] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3060/sauce')
      .then((res) => setTops(res.data));
  }, []);

  const handleChange = (e, top) => {
    //removing the item as a parameter from the cart
    const filtred = basket.filter((i) => i.name !== top.name);

   // If the checked value is true, it adds the element, if it is false, it removes it
    e.target.checked
      ? setBasket([...basket, top])
      : setBasket(filtred);
  };

  return (
    <div className="container text-light my-5">
      <h1>Sauce Types</h1>
      <p>$2 Each</p>
      <h2>Sauces Fee: {basket.length * 2} $</h2>

      <div className="row gap-3 mt-4">
        {tops.map((top) => (
          <div
            key={top.name}
            className="d-flex flex-column align-items-center"
            style={{ width: '150px' }}
          >
            <img
              className="img-fluid"
              src={top.imagePath}
              alt="top"
            />
            <label className="text-nowrap" htmlFor={top.name}>
              {top.name}
            </label>
            <input
              id={top.name}
              type="checkbox"
              onChange={(e) => handleChange(e, top)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;