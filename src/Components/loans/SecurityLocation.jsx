import React, {useState, useEffect} from "react";
import SystemModal from "../Common/SystemModal";
import ajaxLaons from "../../util/remote/ajaxLaons";
import toast, {Toaster} from "react-hot-toast";
import functions from "../../util/functions";
import {useGeolocated} from "react-geolocated";
import React from "react";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

function AddSecurities(props) {
  var latitude = props.latitude;
  var longitude = props.longitude;

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const RenderFooter = (controls) => {
    return (
      <>
        <button
          className="btn ripple btn-dark"
          type="button"
          onClick={controls.close}>
          Close
        </button>
      </>
    );
  };

  return (
    <div>
      <SystemModal
        title="Add loan Securities"
        id="model-update-cross"
        size="lg"
        footer={RenderFooter}>
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </SystemModal>
    </div>
  );
}

export default AddSecurities;
