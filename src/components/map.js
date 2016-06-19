import React from 'react';
import { GoogleMap, GoogleMapLoader } from 'react-google-maps';

export default (props) => {
  return (
    <GoogleMapLoader containerElement={ <div style={{height: '100%'}}></div> } googleMapElement={
        <GoogleMap defaultZoom={13} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
    />
  );
}