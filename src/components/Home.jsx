import React from 'react';
import ThunderImage from '../images/home-img.gif'

export const HomeComponent = () => {
    return (
        <>

            <section className="main-home-sec">
                <div className="container">

                    <div className="row">

                        <div className="col-12">
                            <h2 className="text-center pd-home-main-title">Check your weather</h2>
                        </div>

                        <div className="col-12">
                            <div className="pd-main-image">
                                <img src={ThunderImage} />
                            </div>
                        </div>


                    </div>
                </div>
            </section>



        </>
    )
}