import { GoogleMap, Marker, MarkerF, LoadScript } from "@react-google-maps/api";
import React, { useEffect, useMemo, useRef, useState } from "react";
import '../cart/cart.scss'

function MapContainer({address}){
  const google = window.google;
  /*global google*/
    const evrooptAddress = useMemo(() => ([
        {lat:53.840148,
        lng: 27.568784,
      key:1},
        {lat:53.925937,
        lng: 27.444781,
      key:2},
        {lat:53.873521,
        lng: 27.416187,
      key:3},
        {lat:53.917538,
        lng: 27.429321,
      key:4},
        {lat:53.9077,
        lng: 27.48463,
      key:5},
    ]),[])

    const hippoAddress = useMemo(() => ([
      {lat:53.859164,
      lng: 27.46307,
    key:1},
      {lat:53.899976,
      lng: 27.441268,
    key:2},
      {lat:53.870601,
      lng: 27.551438,
    key:3},
      {lat:53.851198,
      lng: 27.545643,
    key:4},
      {lat:53.875045,
      lng: 27.594871,
    key:5},
  ]),[])

    return(
      <>
       {/* <LoadScript
        googleMapsApiKey="AIzaSyASM6kY7nNQfeNAvrpsyrkT8a0GzsxBRkE"
      ></LoadScript> */}
       <GoogleMap zoom={12} center={{lat: 53.897690, lng: 27.549419}} mapContainerClassName="mapContainer">
            {address&&address.map((e)=>(
                <MarkerF key={e.key} position={{lat:e.lat, lng: e.lng}}/>
            ))}

             {/* <MarkerF key={1} position={{lat:53.840148, lng: 27.568784}}/> */}
        </GoogleMap>
      </>
       
    )
}

export default MapContainer

// export default MapContainer

// const Map = () => {
//     const ref = useRef(null);
//     const [map, setMap] = useState();
    
//     React.useEffect(() => {
//       if (ref.current && !map) {
//         setMap(new window.google.maps.Map(ref.current, {center:{lat: 53.897690, lng: 27.549419},zoom:10}));
//       }
//     }, [ref, map]);

//     return(
//         <>
//       <div ref={ref} />
//       {/* {React.Children.map(children, (child) => {
//       if (React.isValidElement(child)) {
//         // set the map prop on the child component
//         // @ts-ignore
//         return React.cloneElement(child, { map });
//       }
//     })} */}
//         </>
//     )
// }

// export default Map