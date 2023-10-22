import React from 'react';

const Card = ({
  scoop,
  amount,
  scoopBasket,
  setScoopBasket,
  handleReset,
}) => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: '150px' }}
    >
      <img src={scoop.imagePath} alt="various" className="img-fluid" />
      <label className="lead">{scoop.name}</label>
ADD
      <div className="d-flex gap-3 my-2 align-items-center">
        <button
          onClick={() => handleReset(scoop)}
          className="btn btn-danger"
        >
          
    CLEAR
        </button>
        <span className="lead">{amount}</span>
        <button
          className="btn btn-warning"
          onClick={() => setScoopBasket([...scoopBasket, scoop])}
        >
        
        </button>
      </div>
    </div>
  );
};

export default Card;