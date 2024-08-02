import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const OptimizedKakaoMap = () => {
  return (
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "100%", height: "100%" }}
      level={3}
    >
      <MapMarker position={{ lat: 37.5665, lng: 126.9780 }}>
        <div style={{ color: "#000" }}>Hello, Seoul!</div>
      </MapMarker>
    </Map>
  );
};

export default OptimizedKakaoMap;

