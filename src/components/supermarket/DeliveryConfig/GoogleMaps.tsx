import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -13.278292,
  lng: -50.160205,
};

const GoogleMaps = () => {
  const apiKey = import.meta.env.VITE_API_GOOGLE_MAPS;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <div className="w-screen h-screen">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          //   onLoad={onLoad}
          //   onUnmount={onUnmount}
        ></GoogleMap>
      ) : (
        <h1>Carregando...</h1>
      )}
      ;
    </div>
  );
};

export default GoogleMaps;
