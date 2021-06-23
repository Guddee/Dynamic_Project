import React, { useState } from "react";
import { CountryCode } from "./CountryCode";
import { useRouter } from 'next/router';
import {  postApi } from "../../../config/CustomApi";
import { LOCATION_IMG, MY_LOCATION } from "../../../config/serverKey";
import { saveLead } from "../../../config/SendObject";

export const ModalForm = () => {
  let initialData = {
    name: "",
    email: "",
    number: "",
    countrycode: "+91",
    location: "",
  
  };
  const router = useRouter();
  const [data, setData] = useState(initialData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj=await saveLead(data)
    postApi(obj);
    router.push("/thankyou");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="">
      <header className="cd-panel__header">
        <h1>
          <span style={{ color: "#996600" }}>EXPRESS</span> Your Interest Here
        </h1>
      </header>
      <div className="cd-panel__container">
        <div className="cd-panel__content">
          <form id="sform">
            <div className="form-group">
              <label>
                Preferred Location ? <span className="text-danger">*</span>{" "}
                (Click to select)
              </label>
              <div className="radio-tile-group form-group">
                {MY_LOCATION.map((item, i) => (
                  <div className="input-container" key={i}>
                    <input
                      value={item}
                      className="radio-button"
                      type="radio"
                      name="location"
                      value={data.location}
                    />
                    <div className="radio-tile">
                      <div className="icon">
                        <img
                          src={LOCATION_IMG + item + "-icon.png"}
                          alt="city-icon"
                        />
                      </div>
                      <label
                        htmlFor="walk"
                        className="radio-tile-label text-capitalize"
                      >
                        {item}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required=""
                id="sname"
                pattern="[a-zA-Z ]{4,35}"
                name="name"
                onChange={(e) => handleChange(e)}
                value={data.name}
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                pattern="^([a-zA-Z0-9_.]{2,}@[a-zA-Z0-9]{2,}.[a-zA-Z]{2,}(.[a-zA-Z]{2,3})?)$"
                id="semail"
                onChange={(e) => handleChange(e)}
                value={data.email}
              />
            </div>
            <label>Your Number</label>
            <div className="row no-gutters">
              <div className="col-md-4">
                <div className="form-group">
                  <select
                    name="countrycode"
                    className="form-control countrycode"
                    required=""
                    id="scountrycode"
                    onChange={(e) => handleChange(e)}
                    value={data.countrycode}
                  >
                   <CountryCode/>
                  </select>
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    name="number"
                    placeholder="Phone"
                    minLength="10"
                    maxLength="14"
                    required=""
                    pattern="[0-9]{10}$"
                    onChange={(e) => handleChange(e)}
                    value={data.number}
                  />
                </div>
              </div>
            </div>
            <div className="button-container">
              <input
                type="button"
                name="search"
                className="button btn btn-info rounded"
                value="SUBMIT"
                onClick={(e) => handleSubmit(e)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
