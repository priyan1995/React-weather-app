import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const SearchWeather = () => {



    const [searchWeather, setSearchWeather] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=ab1d9ad75634ac441d6346104f4e49a9`;

    const [inputWeather, setInputWeather] = useState([]);

    const [errorNotFound, setErrorNotFound] = useState('');

    const resetError = () => {
        setErrorNotFound('');
    }

    //console.log(url);

    const HandleSearch = () => {

        axios.get(url)
            .then(response => {
                console.log(response.data)
                resetError()
            })
            .catch(function (error) {
                if (error.response) {
                    setErrorNotFound('City Not Found')
                }
            })
    }


    return (
        <>
            <section className="pd-home-search-weather-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <input
                                type="text"
                                placeholder="Search City"
                                value={searchWeather}
                                onChange={(e) => setSearchWeather(e.target.value)}
                                className="pd-main-seach-weather" />

                            <button type="submit" onClick={HandleSearch}>Find</button>
                        </div>

                        <div className="col-12 text-center pd-not-found ">
                            <p> {errorNotFound}</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )

}