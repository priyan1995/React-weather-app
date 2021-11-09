import React from 'react';

export const SearchWeather = () => {

    return (
        <>
            <section className="pd-home-search-weather-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                           <input type="text" placeholder="Search City" className="pd-main-seach-weather" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}