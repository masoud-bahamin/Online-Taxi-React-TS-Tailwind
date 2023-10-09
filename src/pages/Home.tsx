import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { themeContext } from '../context/themeContext';
import { Icon, LatLngExpression } from "leaflet";
import axios from 'axios';
import "./Map.css"
import "leaflet/dist/leaflet.css";
import haversine from 'haversine';

function Home() {

    const [location, setLocation] = useState<LatLngExpression>({ lat: 51, lng: 27, });
    const [currentLocation, setCurrentLocation] = useState({ lat: 51, lng: 27, });
    const [newLocation, setNewLocation] = useState({ lat: 51, lng: 27, })
    const [searchValue, setSearchValue] = useState<string>("")
    const [showRouteInfo, setShowRouteInfo] = useState(false)
    const [distance, setDistance] = useState<number>(0)


    const getData = async (address: string) => {
        const options = {
            method: 'GET',
            url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
            params: {
                address: address,
                language: 'en'
            },
            headers: {
                'X-RapidAPI-Key': 'd2289500d7mshb3c648e44307405p1579e5jsn96f56b654d7a',
                'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data.results[0])
            setNewLocation(response.data.results[0].geometry.location )
            handlerMarkerClick(response.data.results[0].geometry.location)
        } catch (error) {
            console.error(error);
        }
    }



    const theme = React.useContext(themeContext)

    const mapRef = React.useRef<any>();

    const handlerMarkerClick = (loc: LatLngExpression) => {
        setLocation(loc)
        mapRef.current?.setView(loc, 15);
    };



    const currentIcon = new Icon({
        iconUrl: './img/gp.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    const searchIcon = new Icon({
        iconUrl: "/img/se.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
            handlerMarkerClick({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            })
        });
    }, []);

    const submitForm = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault()
        handlerMarkerClick(newLocation)
        getData(searchValue)
    }

    return (
        <>
            <Header subHeader={true} />
            <div className='relative'>

                <div className="">
                    <MapContainer
                        center={location}
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
                        <Marker position={currentLocation} icon={currentIcon}>
                            <Popup >
                                <p className='text-yellow-500'> Your Location</p>
                            </Popup>
                        </Marker>
                        <Marker position={newLocation} icon={searchIcon}>
                            <Popup className='bg-yellow-400'>
                                <p className='text-yellow-500'> New Location</p>
                            </Popup>
                        </Marker>
                        {showRouteInfo ? <Polyline pathOptions={{ color: 'purple' }} positions={[currentLocation, newLocation]} /> : <></>}
                    </MapContainer>
                </div>
                <div className="pb-10 absolute bottom-14 left-2 right-2 z-[999]">
                    {showRouteInfo ? <p className='bg-white dark:bg-gray-700 p-3 text-xs rounded flex'>Your distance is {distance.toFixed(2)} KM  <span className='ml-auto'>${distance.toFixed(2) ? (distance + 10).toFixed(2) : 0}</span></p> : <></>}

                    <div className="py-2 flex justify-between items-center mb-1">
                        <button onClick={() => {
                            setShowRouteInfo(prev => !prev)
                            setDistance( haversine(
                                {
                                    latitude: currentLocation.lat,
                                    longitude: currentLocation.lng
                                }
                                , {
                                    latitude: newLocation.lat,
                                    longitude: newLocation.lng
                                }
                                , { unit: 'km' }));
                        }}
                            className="text-xs py-2 px-8 rounded-lg bg-yellow-500 text-white">Direction</button>
                        <button onClick={() => handlerMarkerClick(currentLocation)} className="bg-white text-gray-800 w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-inherit mx-auto" width="24" height="24" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="4"></circle><path d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path></svg>
                        </button>
                    </div>
                    <div className="p-3 border rounded-lg border-yellow-500 bg-yellow-100 dark:bg-gray-700">
                        <form onSubmit={submitForm}
                            className="border border-yellow-500 rounded-lg mb-3">

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    value={searchValue}
                                    onChange={e => setSearchValue(e.currentTarget.value)}
                                    type="text"
                                    className="block w-full p-2 pl-10 text-sm text-gray-900 dark:text-gray-200 rounded-lg bg-transparent focus:ring-yellow-300 focus:border-yellow-300 outline-none"
                                    placeholder="Where would you go?"
                                />

                            </div>
                        </form>
                        <div className="border border-yellow-500 rounded-lg">
                            <button className="text-xs w-1/2 py-2 px-8 rounded-lg bg-yellow-500 text-white">Transport</button>
                            <button className="text-xs w-1/2 py-2 px-8 rounded-lg active:bg-yellow-500 active:text-white">Delivery</button>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Home