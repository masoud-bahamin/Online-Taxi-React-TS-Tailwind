import { LatLngExpression } from "leaflet";
import "./Map.css"
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { themeContext } from "../../context/themeContext";
import { Icon } from "leaflet";
import axios from 'axios';


type MainMapProps = {
    location: LatLngExpression
    goToLoc: boolean
}


export default function MainMap({ location, goToLoc }: MainMapProps) {

    const [newLocation , setNewLocation] = useState<LatLngExpression>([12 , 36])

    const options = {
        method: 'GET',
        url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
        params: {
            address: '164 Townsend St., San Francisco, CA',
            language: 'en'
        },
        headers: {
            'X-RapidAPI-Key': 'd2289500d7mshb3c648e44307405p1579e5jsn96f56b654d7a',
            'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
        }
    };

    const getData = async () => {
        try {
            const response = await axios.request(options);
            console.log(response.data);
            console.log(response.data.results[0].geometry.location)
            setNewLocation([(response.data.results[0].geometry.location.lat),(response.data.results[0].geometry.location.lng)] as LatLngExpression)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
getData()

    }, [])

    const theme = React.useContext(themeContext)

    const mapRef = React.useRef<any>();

    const handleMarkerClick = () => {
        mapRef.current?.setView(newLocation, 15);
    };


    if (goToLoc) {
        handleMarkerClick()
    }

    const customIcon = new Icon({
        iconUrl: './img/gp.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    return (
        <div className="">
            <MapContainer
                center={newLocation}
                zoom={8}
                // style={{ height: '90vh', width: '100%' }}
                ref={mapRef}
                scrollWheelZoom={true}
                zoomControl={false}
                className="w-full h-screen sm:w-[315px] sm:h-[655px]"

            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    className={theme.theme === "dark" ? "map-tiles" : ""}
                />
                <Marker position={newLocation} icon={customIcon}>
                    <Popup>Your Location</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
