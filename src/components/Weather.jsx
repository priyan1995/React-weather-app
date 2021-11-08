import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Weather = () => {

    const [weatherItems, setWeatherItems] = useState([]);
    const url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ab1d9ad75634ac441d6346104f4e49a9";

    // const fetchData = () => {
    //     return axios.get(url).then(
    //         (response) => console.log(response.data) 
    //     )    
    // }

    useEffect(() => {
        axios.get(url).then(
            (response) => setWeatherItems(response.data)
        )
    }, [])

    

    console.log(weatherItems)

    return (
        <>



        </>
    )
}