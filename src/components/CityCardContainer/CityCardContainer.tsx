import React from 'react';
import CityCard from '../CityCard/CityCard';
import {City, Station} from '../../interfaces/interfaces';

interface Props {
  myCities: City[],
  onMoveCityDown: (index: number) => void,
  onMoveCityUp: (index: number) => void,
  onRemoveCard: (index: number) => void,
  stations: Station[],
}

function CityCardContainer(props: Props) {
  return (
    <div>
      {props.myCities.map((city: City, index: number) => (
        <CityCard
          key={index}
          city={city}
          index={index}
          onMoveCityDown={props.onMoveCityDown}
          onMoveCityUp={props.onMoveCityUp}
          onRemoveCard={props.onRemoveCard}
        />
      ))}
    </div>
  );
}

export default CityCardContainer;
