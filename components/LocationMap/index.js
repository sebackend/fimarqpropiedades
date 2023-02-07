import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "350px",
};

const center = {
  lat: -33.68408257461047,
  lng: -71.21406687724071,
};

const LocationMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDAk3d99G0eD62J5RpLkixQGI2oDjJOQ4g">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationMap;
