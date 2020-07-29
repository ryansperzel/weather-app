import React from 'react';
import './city-search-modal.scss';
import {City, Station} from '../../interfaces/interfaces'

interface Props {
  myCities: City[],
  onAddCity: (station: Station) => void,
  stations: Station[],
  toggleModal: () => void,
}

export default function CitySearchModal(props: Props) {

  function getRemainingStations(): Station[] {
    return props.stations.filter((station: Station) => {
      return !props.myCities.some((city: City) => { return city.details.id === station.id})
    })
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="close-modal" onClick={props.toggleModal}>X</div>
        <div>Choose a city to add:</div>
        {getRemainingStations().map((station: Station, index: number) => {
          return (
            <div
              key={index}
              className="station-item"
              onClick={() => props.onAddCity(station)}>{station.name}
            </div>
          )
        })}
      </div>
    </div>
  );
}
