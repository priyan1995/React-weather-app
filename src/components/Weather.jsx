import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Weather = () => {

    const curruntWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=ab1d9ad75634ac441d6346104f4e49a9"

    const [weatherColombo, setWeatherColombo] = useState({});
    const [weatherInfColombo, setWeatherInfColombo] = useState([0]);
    const [mainWeatherData, setMainWeatherData] = useState([0]);
    const [windData, setWindData] = useState([])





    useEffect(() => {
        axios.get(curruntWeatherUrl)
            .then(response => {
                setWeatherColombo(response.data)
                setWeatherInfColombo(response.data.weather)
                setMainWeatherData(response.data.main)
                setWindData(response.data.wind)
            })
    }, [curruntWeatherUrl])





    console.log(weatherColombo);
    console.log(windData);


    return (
        <>

            <section className="weather-cards-sec">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h4>Weather Information -  {weatherColombo.name} </h4>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="weather-card">
                                <img src={` http://openweathermap.org/img/wn/${weatherInfColombo[0].icon}.png `} />
                                <h3>{weatherInfColombo[0].main}</h3>
                                <p>{weatherInfColombo[0].description}</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="main-weather-card">
                                <div>
                                    <h3>{mainWeatherData.temp}</h3>
                                    <p>Temperature</p>
                                </div>
                                <div>
                                    <h3>{mainWeatherData.feels_like}</h3>
                                    <p>Feels Like</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="wind-weather-card">
                                <h4>Deg: {windData.deg}</h4>
                                <h4>Speed: {windData.speed}</h4>
                            </div>
                        </div>



                    </div>




                </div>
            </section>

        </>
    )
}