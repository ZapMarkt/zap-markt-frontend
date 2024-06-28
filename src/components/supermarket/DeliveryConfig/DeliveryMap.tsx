import { useDeliveryRadiusStore } from '@/stores/MapCIrcleHistory';
import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { Circle } from './CircleMap';
import DeliveryConfig from './DeliveryConfig';

const position = {
  lat: -13.278292,
  lng: -50.160205,
};

const DeliveryMap = () => {
  const apiKey = import.meta.env.VITE_API_GOOGLE_MAPS;
  const deliveryAreas = useDeliveryRadiusStore((state) => state.deliveryAreas);
  const loadFromLocalStorage = useDeliveryRadiusStore(
    (state) => state.loadFromLocalStorage,
  );

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  return (
    <APIProvider apiKey={apiKey}>
      <div className="w-full h-full relative">
        <Map
          reuseMaps
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          defaultZoom={14}
          defaultCenter={position}
          mapId={'Supermarket_Id'}
          clickableIcons={false}
        >
          <AdvancedMarker position={position} />
          {deliveryAreas.map((area, index) => (
            <Circle
              key={index}
              center={position}
              strokeColor={'#F28608'}
              strokeOpacity={1}
              strokeWeight={3}
              fillColor={'#FFBC6E40'}
              fillOpacity={0.3}
              radius={area.radius * 1000}
            />
          ))}
        </Map>
        <DeliveryConfig className="absolute top-0 z-40" />
      </div>
    </APIProvider>
  );
};

export default DeliveryMap;
