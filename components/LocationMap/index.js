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

// => (
//   <div style={{ height: "300px", width: "100%" }}>
//     <GoogleMap
//       defaultZoom={15}
//       defaultCenter={{ lat: -33.6829258, lng: -71.2161594 }}
//     >
//       <Marker position={{ lat: -33.6829258, lng: -71.2161594 }} />
//     </GoogleMap>
//   </div>
// <div style={{ height: "300px", width: "100%" }}>
//   <GoogleMapReact
//     bootstrapURLKeys={{
//       key: "AIzaSyDAk3d99G0eD62J5RpLkixQGI2oDjJOQ4g",
//       language: "es",
//     }}
//     defaultCenter={defaultProps.center}
//     defaultZoom={defaultProps.zoom}
//   >
//     <AnyReactComponent lat={-33.6829258} lng={-71.2161594} text="My Marker" />
//   </GoogleMapReact>
// </div>

export default LocationMap;
