import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/map';

class WeatherList extends Component {
  _renderWeather(cityData){
    const name = cityData.city.name;
    const temperatures = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td className="gmap"><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temperatures} color="red" unit="c" /></td>
        <td><Chart data={pressures} color="green" unit="hPa" /></td>
        <td><Chart data={humidities} color="blue" unit="%" /></td>
      </tr>
    );
  }

  render() {
    console.log(this.props.weather)
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this._renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);