import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const LocationMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -33.6829258, lng: -71.2161594 }}
    >
      <Marker position={{ lat: -33.6829258, lng: -71.2161594 }} />
    </GoogleMap>
  ))
);

export default LocationMap;
