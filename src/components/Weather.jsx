import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Weather = () => {

    const curruntWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=ab1d9ad75634ac441d6346104f4e49a9"

    const [weatherColombo, setWeatherColombo] = useState({});
    const [weatherInfColombo, setWeatherInfColombo] = useState([0]);





    useEffect(() => {
        axios.get(curruntWeatherUrl)
            .then(response => {
                setWeatherColombo(response.data)
                setWeatherInfColombo(response.data.weather)
            })
    }, [curruntWeatherUrl])

  



     console.log(weatherColombo);
     console.log(weatherInfColombo);


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
                        <div className="col-lg-6">
                            <div className="weather-card">
                                <img src={` http://openweathermap.org/img/wn/${weatherInfColombo[0].icon}.png `} />
                                <h3>{weatherInfColombo[0].main}</h3>
                                <p>{weatherInfColombo[0].description}</p>
                            </div>
                        </div>
                    </div>




                </div>
            </section>

        </>
    )
}