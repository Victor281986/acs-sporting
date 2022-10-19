import React from "react";
import { useMemo } from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

export default function MapReturner() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	});

	if(!isLoaded) return <div>Loading...</div>

  return <Map />
}

function Map() {
  const center = useMemo(() => ({ lat: 45.35785, lng: 23.2109 }), []);

	
	return <GoogleMap
			zoom={14}
			center={center}
			mapContainerClassName="map-container"
		>
		<Marker position={center} />
	  </GoogleMap>
}
