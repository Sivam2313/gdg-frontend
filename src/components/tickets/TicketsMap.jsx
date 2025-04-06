import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "calc(100vh - 64px - 32px)",
};

const center = {
  lat: 22.5726, // Default Center (Kolkata)
  lng: 88.3639,
};


function TicketMap({locations}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA3jfw3-9HMufGLGOS-dnC_BTSWq-Grxzo",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds();

    locations.forEach((loc) => {
      bounds.extend(new window.google.maps.LatLng(loc.lat, loc.lng));
    });

    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={{ lat: loc.lat, lng: loc.lng }}
            label={loc.name}
          />
        ))}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(TicketMap);
