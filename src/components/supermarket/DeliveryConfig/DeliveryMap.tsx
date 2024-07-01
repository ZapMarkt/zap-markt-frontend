import { useDeliveryRadiusStore } from '@/stores/MapCIrcleHistory';
import {
  APIProvider,
  AdvancedMarker,
  Map,
  Pin,
} from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { Circle } from './CircleMap';
import DeliveryConfig from './DeliveryConfig';

const position = {
  lat: -13.278292,
  lng: -50.160205,
};

export const getColor = (index: number, alpha = 1) => {
  const hue = (index * 137.508) % 360;
  return `hsla(${hue}, 70%, 50%, ${alpha})`;
};

const DeliveryMap = () => {
  const apiKey = import.meta.env.VITE_API_GOOGLE_MAPS;
  const deliveryAreas = useDeliveryRadiusStore((state) => state.deliveryAreas);
  const loadFromLocalStorage = useDeliveryRadiusStore(
    (state) => state.loadFromLocalStorage,
  );
  const hoveredIndex = useDeliveryRadiusStore((state) => state.hoveredIndex);

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
          <AdvancedMarker position={position}>
            <Pin
              background={'#f28608'}
              borderColor={'#f28608'}
              glyphColor={'#FFD8AA'}
            />
          </AdvancedMarker>
          {deliveryAreas.map((area, index) => {
            let radius = area.radius * 1000;
            let fillColor = 'transparent';
            let strokeColor = '#F28608';
            let fillOpacity = 1;
            let strokeWeight = 3;
            let zIndex = 0;

            if (hoveredIndex !== null) {
              if (index < hoveredIndex) {
                fillColor = '#FFFFFF';
                zIndex = 100;
                strokeWeight = 5;
              } else if (index > hoveredIndex) {
                fillOpacity = 0;
                strokeWeight = 1;
              } else if (index === hoveredIndex) {
                fillColor = '#FFBC6E';
                fillOpacity = 0.5;
                strokeWeight = 5;
                zIndex = 99;
              }
            }

            return (
              <Circle
                key={index}
                center={position}
                strokeColor={strokeColor}
                strokeOpacity={1}
                strokeWeight={strokeWeight}
                fillColor={fillColor}
                fillOpacity={fillOpacity}
                radius={radius}
                zIndex={zIndex}
              />
            );
          })}
        </Map>
        <DeliveryConfig className="absolute top-0 z-40" />
      </div>
    </APIProvider>
  );
};

export default DeliveryMap;
