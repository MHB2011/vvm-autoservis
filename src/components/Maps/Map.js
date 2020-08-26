import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import mapStyles from "./mapStyles";

function Map() {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 45.36609, lng: 14.33795 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {
        <Marker
          position={{ lat: 45.36609, lng: 14.33795 }}
          animation={window.google.maps.Animation.DROP}
        />
      }
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const App = ({ googlekey }) => {
  return (
    <div style={{ width: "80vw", height: "auto" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googlekey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default App;
