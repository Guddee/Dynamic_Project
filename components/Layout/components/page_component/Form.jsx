import React, { useState } from "react";
import { useRouter } from 'next/router';
import { postApi } from "../../../config/CustomApi";
import { FORM_ICON } from "../../../config/serverKey";
import { CountryCode } from "./CountryCode";
import { saveLead } from "../../../config/SendObject";

export const Form = () => {
  const router = useRouter();
  let initialData = {
    name: "",
    email: "",
    number: "",
    countrycode: "+91",
    message: "",
  };

  const [dataForm, setDataForm] = useState(initialData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj=await saveLead(dataForm)
    alert("Thank you")
    postApi(obj);
    router.push("/thankyou");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  return (
    <div className="container">
      <div
        className="modal fade"
        id="mymodal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Register Here</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="eformcdiv">
                <form id="dropAnEnquiry" name="ecform">
                  <div className="form-group position-relative">
                    <label>
                      Name <span className="text-danger">*</span>
                    </label>
                    <svg
                      xmlns={FORM_ICON}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user fea icon-sm icons"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      type="text"
                      name="name"
                      className="form-control pl-5"
                      pattern="[a-zA-Z ]+"
                      minLength="3"
                      placeholder="Your name"
                      required=""
                      onChange={(e) => handleChange(e)}
                      value={dataForm.name}
                    />
                  </div>
                  <div className="form-group position-relative"></div>
                  <div className="form-group position-relative">
                    <label>Email ID </label>
                    <svg
                      xmlns={FORM_ICON}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail fea icon-sm icons"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <input
                      name="email"
                      type="email"
                      className="form-control pl-5"
                      placeholder="Your email"
                      required=""
                      onChange={(e) => handleChange(e)}
                      value={dataForm.email}
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label>
                      Your Number <span className="text-danger">*</span>{" "}
                    </label>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <select
                          name="countrycode"
                          className="form-control countrycode"
                          required=""
                          id="dropAnEnquiry_countrycode"
                          onChange={(e) => handleChange(e)}
                          value={dataForm.countrycode}
                        >
                        <CountryCode/>
                        </select>
                      </div>
                      <div className="col-md-8">
                        <svg
                          xmlns={FORM_ICON}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-activity phone_style"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <input
                          name="number"
                          id="dropAnEnquiry_number"
                          type="tel"
                          className="form-control pl-5"
                          placeholder="Your Number"
                          required=""
                          onChange={(e) => handleChange(e)}
                          value={dataForm.number}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-radio flexd">
                    <label className="left">Request a Site Visit</label>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="message"
                          required=""
                          onChange={(e) => handleChange(e)}
                          value={dataForm.message}
                        />
                        <i className="helper"></i>Yes
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="message"
                          onChange={(e) => handleChange(e)}
                          value={dataForm.message}
                        />
                        <i className="helper"></i>No
                      </label>
                    </div>
                  </div>
                  <div className="button-container">
                    <button
                      className="button btn btn-info rounded"
                      onClick={(e) => handleSubmit(e)}
                      data-dismiss="modal"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
