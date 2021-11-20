import React from "react";

const WeatherForm = props=>(
    <div className="card card-body">
        <form onSubmit="">
            <div className="mb-3">
                <input type="text" name="city" placeholder="Your city name" className="form-control" autoFocus />
            </div>
            <div className="mb-3">
                <input type="text" name="country" placeholder="Your country name" className="form-control"/>
            </div>
            <div className="d-grid">
                <button className="btn btn-primary">
                    Get Weather
                </button>
            </div>
        </form>
    </div>
);
export default WeatherForm;