import React from 'react';
import './city-card.scss';
import {City} from '../../interfaces/interfaces'

interface Props {
  city: City,
  index: number,
  onMoveCityDown: (index: number) => void,
  onMoveCityUp: (index: number) => void,
  onRemoveCard: (index: number) => void,
}

function CityCard(props: Props) {
  return (
    <div className="city-card">
      <div className="reorder-column">
        <div onClick={() => props.onMoveCityUp(props.index)}>{`<`}</div>
        <div onClick={() => props.onMoveCityDown(props.index)}>{`>`}</div>
      </div>
      <div className="flex-column">
        <div className="city-name-container">
          {props.city.details.name}
        </div>
        <div className="current-weather-container">
          <div>Current temp:</div>
         {props.city.current.temperature}
        </div>
      </div>
      <div className="historical-data-container">
        <div>Historical temps:</div>
        <div>{new Date(props.city.historical.data[0].time).toDateString()}</div>
        <div>{props.city.historical.data[0].temperature}</div>
      </div>
      <div className="remove-btn" onClick={() => props.onRemoveCard(props.index)}>
       X
      </div>
    </div>
  );
}

export default CityCard;
