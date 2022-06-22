import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "../../styles/map.module.css";

const defaultProps = {
  center: {
    lat: -33.6829258,
    lng: -71.2161594,
  },
  zoom: 15,
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => (
  <div style={{ height: "300px", width: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyDAk3d99G0eD62J5RpLkixQGI2oDjJOQ4g",
        language: "es",
      }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={-33.6829258} lng={-71.2161594} text="My Marker" />
    </GoogleMapReact>
  </div>
);

export default Map;
