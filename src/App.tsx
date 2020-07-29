import React, { Component }  from 'react';
import axios from 'axios';
import './App.scss';
import CityCardContainer from './components/CityCardContainer/CityCardContainer'
import CitySearchModal from './components/CitySearchModal/CitySearchModal'
import {City, Station} from './interfaces/interfaces'

interface Props {}

interface State {
  stations: Station[],
  modalOpen: boolean,
  myCities: City[],
}

export default class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      stations: [],
      modalOpen: false,
      myCities: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://bh-weather-data.s3.amazonaws.com/stations.json`)
      .then(({data}) => {
        this.setState({stations: data})
      })
  }

  onAddCity = (station: Station): void => {
    this.toggleModal();
    axios.all([
      axios.get(`https://bh-weather-data.s3.amazonaws.com/current/KJRB0.json`),
      axios.get(`https://bh-weather-data.s3.amazonaws.com/historical/KJRB0.json`)
    ]).then(axios.spread((...responses) => {
      this.setState({
        myCities: [...this.state.myCities,
          {details: station, current: responses[0].data, historical: responses[1].data}
        ]
      })
    }))
  }

  onMoveCityUp = (index: number): void => {
    if (index !== 0) {
      const myCitiesCopy: City[] = this.state.myCities;
      const newTop = myCitiesCopy[index];
      myCitiesCopy[index] = myCitiesCopy[index - 1];
      myCitiesCopy[index - 1] = newTop;
      this.setState({myCities: myCitiesCopy});
      // I'm sure there's an easier and cleaner way to do this
      // This is my first pass and I will come back to it if time allows
    }
  }

  onMoveCityDown = (index: number): void => {
    if (this.state.myCities.length -1 > index) {
      const myCitiesCopy: City[] = this.state.myCities;
      const newBottom = myCitiesCopy[index];
      myCitiesCopy[index] = myCitiesCopy[index + 1];
      myCitiesCopy[index + 1] = newBottom;
      this.setState({myCities: myCitiesCopy});
    }
  }

  onRemoveCard = (index: number): void => {
    this.setState({myCities: this.state.myCities.filter((c: City, i: number) => {
      return index !== i
    })})
  }

  toggleModal = (): void => {
    this.state.modalOpen ?
      document.body.classList.remove('no-scroll') : document.body.classList.add('no-scroll');
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render() {
    return (
      <div className="dashboard">
        <header>
          <div className="title">
            Weather Report 2000
          </div>
          <div className="add-city-btn" onClick={this.toggleModal}>
            + Add City
          </div>
        </header>
        <CityCardContainer
          myCities={this.state.myCities}
          onMoveCityDown={this.onMoveCityDown}
          onMoveCityUp={this.onMoveCityUp}
          onRemoveCard={this.onRemoveCard}
          stations={this.state.stations}
        />
        {this.state.modalOpen &&
          <CitySearchModal
            myCities={this.state.myCities}
            onAddCity={this.onAddCity}
            stations={this.state.stations}
            toggleModal={this.toggleModal}
          />}
      </div>
    );
  }
}
