import React from "react";
import {useGeolocated} from "react-geolocated";

const LoansPopularity = () => {
  const {isGeolocationAvailable, isGeolocationEnabled, coords} =
    useGeolocated();

  if (!isGeolocationAvailable) {
    return <div>Geolocation is not available on this device/browser.</div>;
  }

  if (!isGeolocationEnabled) {
    return (
      <div>
        Geolocation is not enabled. Please enable it in your browser settings.
      </div>
    );
  }

  if (coords) {
    const {latitude, longitude} = coords;

    return (
      <div>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
      </div>
    );
  }

  return <div>Loading geolocation data...</div>;
};

export default LoansPopularity;
