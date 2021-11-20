import React from "react";

const WeatherInfo = props=> {
    return(
        <>
        {
            props.error &&
            <div className="alert alert-light">
                <p>{props.error}</p>
            </div>
        }
        {
            props.temperature ?
            <div>
                <div className="card card-body">
                    <p>
                        Location: {props.city} {props.country}
                    </p>
                    <p>
                        Temperature: {props.temperature} {props.description}
                    </p>
                    <p>
                        Humidity: {props.humidity}
                    </p>
                    <p>
                        Wind Speed: {props.wind_speed}
                    </p>
                </div>
            </div>
            :
            <div className="card card-body">
                <p>No request yet</p>
            </div>
        }
        </>
    )
};
export default WeatherInfo;