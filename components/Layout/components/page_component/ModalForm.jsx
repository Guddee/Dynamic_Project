import React, { useState, useEffect } from "react";
import { CountryCode } from "./CountryCode";
import { useRouter } from 'next/router';
import { getApi, postApi } from "../../../config/CustomApi";
import { LOCATION_IMG, MY_LOCATION } from "../../../config/serverKey";

export const ModalForm = () => {
  let initialData = {
    name: "",
    email: "",
    phone: "",
    location: "",
    countrycode: "+91",
  };
  useEffect(() => {
    getApi().then((data) => {
      window.projectname = data.project_name;
      window.city = data.city;
    });
  }, []);
  const router = useRouter();
  const [data, setData] = useState(initialData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {};
    obj.p_username = data.name;
    obj.p_mobilenumber = data.phone;
    obj.p_email = data.email;
    obj.p_countrycode = data.countrycode;
    obj.p_leadtype = window.projectname;
    obj.p_launchname = "";
    obj.p_source = "website";
    obj.p_city = window.city;
    postApi(obj);
    router.push("/thankyou");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(`name: ${e.target.name},value: ${e.target.value}`)
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
                   =<CountryCode/>
                  </select>
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    minLength="10"
                    maxLength="14"
                    required=""
                    id="snumber"
                    pattern="[0-9]{10}$"
                    onChange={(e) => handleChange(e)}
                    value={data.phone}
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
