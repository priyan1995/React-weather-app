import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const SearchWeather = () => {



    const [searchWeather, setSearchWeather] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=ab1d9ad75634ac441d6346104f4e49a9`;

    const [inputWeather, setInputWeather] = useState([]);

    const [errorNotFound, setErrorNotFound] = useState('');

    const [issettedWeather, setIsWeather] = useState(false);

    const [weatherInfoInputtedCity, setWeatherInfoInputtedCity] = useState([]);

    const resetError = () => {
        setErrorNotFound('');
    }

  

    //console.log(url);

    const HandleSearch = () => {

        axios.get(url)
            .then(response => {
                //console.log(response.data)
                resetError();
                setInputWeather(response.data);
                setWeatherInfoInputtedCity(response.data.weather)
                setIsWeather(true);
            })
            .catch(function (error) {
                if (error.response) {
                    setErrorNotFound('City Not Found');
                    setIsWeather(false);
                }
            })
    }

    console.log(inputWeather);

    return (
        <>
            <section className="pd-home-search-weather-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="pd-search-inp">
                                <input
                                    type="text"
                                    placeholder="Search City"
                                    value={searchWeather}
                                    onChange={(e) => setSearchWeather(e.target.value)}
                                    className="pd-main-seach-weather" />

                                <button type="submit" onClick={HandleSearch}>Find</button>
                            </div>
                        </div>

                        <div className="col-12 text-center pd-not-found ">
                            <p> {errorNotFound}</p>

                            {issettedWeather ? (
                                <>
                                    <div>

                                        <h3>{inputWeather.name}</h3>                                        
                                        <img src={` http://openweathermap.org/img/wn/${weatherInfoInputtedCity[0].icon}.png `} />
                                        <h4>{weatherInfoInputtedCity[0].main}</h4>
                                        <p>{weatherInfoInputtedCity[0].description}</p> 



                                    </div>
                                </>

                            ) : (
                                <>

                                </>
                            )}








                        </div>

                    </div>
                </div>
            </section>
        </>
    )

}