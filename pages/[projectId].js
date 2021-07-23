import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { createClient } from "contentful";
import {API_URL, FA_ICON,FORM_ICON,GET_DATA_API,NAV_MENU,PROJECT_LOGO,} from "../components/config/serverKey";
import { CountryCode } from "../components/Layout/components/page_component/CountryCode";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { CssBaseline, Drawer } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { postApi } from "../components/config/CustomApi";
import { useRouter } from "next/router";
import { saveLead } from "../components/config/sendProjectData";

export async function getServerSideProps(context) {
  const id = context.query.projectId;

  const contentId = id
    .split("-")
    .map(function (word, index) {
      if (index == 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
  const client = createClient({
    space: "fo2bfrw08w1u",
    accessToken: "IhKu8CAgf6PpJbjkXkllPKIPbKDAJzJL4FzYJZlWO0w",
  });
  const res = await client.getEntries({
    content_type: contentId,
  });
  return {
    props: {
      articles: res.items,
    },
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
var projectId;
export async function getData() {
  let response = await fetch(API_URL + GET_DATA_API + projectId);
  let res = await response.json();
  return res.result;
}
export default function project({ articles }) {
  projectId = articles[0].fields.projectId;
  const {
    banner,
    projectLogo,
    projectLocation,
    priceButton,
    projectHighlights,
    projectOverview,
    projectName,
    amenities,
    floorPlanImages,
    priceTable,
    galleryImages,
    locationLink,
    locationContent,
  } = articles[0].fields;

  const [data, setData] = useState(null);
  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);
  const phone_no = data?.phone;
  let whatsapp_no = data?.wp_links_sms;

  const STATIC_PHONE = 7264237365;
  let initialData = {
    name: "",
    email: "",
    number: "",
    CountryCode: "+91",
    msg: "",
  };
  const [ModalData, setModalData] = useState(initialData);
  const [FormData, setFormData] = useState(initialData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = await saveLead(FormData);
    alert("Thank you");
    postApi(obj);
    router.push("/thankyou");
  };
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setModalData({ ...ModalData, [name]: value });
  };
  const handleSubmitModal = async (e) => {
    e.preventDefault();
    let obj = await saveLead(ModalData);
    alert("Thank you");
    postApi(obj);
    router.push("/thankyou");
  };
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  };
  const router = useRouter();

  return (
    <div>
      <div className="top_head">
        <div className={classes.root}>
          <CssBaseline />
          <AppBar>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <img src={PROJECT_LOGO} />
              </Typography>

              <ul className="navigation-menu mobBlock">
                {NAV_MENU.map((item, i) => (
                  <li key={i}>
                    <a href={`#` + item}>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div>
                <IconButton
                  onClick={handleDrawer}
                  edge="start"
                  className="menu_icon"
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon  className="menu_icon"/>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div
              style={{ height: "100vh", padding: "20px 40px", width: "415px" }}
            >
              <IconButton
                onClick={() => {
                  setOpen(false);
                }}
                color="primary"
                style={{ position: "absolute", right: "0", top: "-3px" }}
              >
                <CloseOutlined color="primary" />
              </IconButton>
              <div>
                <div className="demo-list">
                  <ul>
                    {NAV_MENU.map((item, i) => (
                      <li key={i}>
                        <a href={`#` + item}>
                          <span>{item}</span>
                        </a>
                      </li>
                    ))}
                    <li>
                      <a className="phone_url" href={phone_no}>
                        <span className="phone_no">{phone_no}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>

      <section className="bg-profile w-100" style={{ marginBottom: "100px" }}>
        <div className="row banner_imgs">
          <div className="w-100">
            <div className="">
              <Carousel>
                {banner.map((item, i) => (
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      src={"https:" + banner[i]?.fields?.file?.url}
                      width={banner[i]?.fields?.file?.details.image.width}
                      height={banner[i]?.fields?.file?.details.image.height}
                      alt={banner[i]?.fields?.title}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card public-profile border-0 rounded shadow">
            <div className="card-body p-0">
              <div className="row align-items-center">
                <div className="project-header">
                  <div>
                    <img
                      src={"https:" + projectLogo?.fields?.file?.url}
                      width={projectLogo?.fields?.file?.details?.image?.width}
                      height={projectLogo?.fields?.file?.details?.image?.height}
                      className="avatar avatar-large rounded d-block mx-auto"
                      alt={projectLogo.fields.title}
                    />
                  </div>

                  <div>
                    <div className="row align-items-end">
                      <div className="col-md-12 text-md-left text-center mt-3 mt-sm-0">
                        <h4 className="title mb-0">{projectName} </h4>
                        <small className="text-muted h6 mr-2">
                          <span className="paddress">{projectLocation}</span>
                          <a
                            href={locationLink}
                            target="_new"
                            className="Banner_below_Text"
                          >
                            <span>
                              <i className="uil uil-map-marker"></i>
                            </span>{" "}
                            <span> Get Directions </span>{" "}
                          </a>
                        </small>
                      </div>
                    </div>
                    <div className="row ctad">
                      <div className="col-md-4 text-md-left mt-sm-0">
                        <ul className="list-inline mb-0 mt-2">
                          <li className="list-inline-item mr-2">
                            <a href="/#" style={{ pointerEvents: "none" }}>
                              <div
                                className="alert alert-dark alert-pills"
                                role="alert"
                              >
                                <span className="alert-content">
                                  {priceButton}
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-8 text-md-right text-center p-0">
                        <ul className="list-inline mb-0 mt-2">
                          <li className="list-inline-item watch-video vt-brochure">
                            <a
                              href="/#"
                              style={{ color: " #fff;" }}
                              className="text-dark mb-2"
                              data-keyboard="false"
                              data-backdrop="static"
                              data-toggle="modal"
                              data-target="#exampleModalCenter"
                            >
                              <div
                                className="alert alert-dark alert-pills alert-btn"
                                role="alert"
                              >
                                <i className="uil-file-download"></i>{" "}
                                <span className="alert-content">
                                  Download Brochure
                                </span>
                              </div>
                            </a>
                          </li>

                          <li className="list-inline-item">
                            <a
                              //   href={"tel:" + `${phone_no}`}
                              href="tel:8329739857"
                              className="btn-call"
                              id="contactno"
                            >
                              <div
                                className="alert alert-danger alert-pills alert-btn"
                                role="alert"
                              >
                                <i className="uil uil-phone"></i>{" "}
                                <span className="alert-content">
                                  {phone_no}
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container-section" style={{ marginBottom: "50px" }}>
          <div
            className="row justify-content-center"
            style={{ marginBottom: "40px" }}
          >
            <div className="col-lg-8 col-md-7 col-12 psection-left">
              <div className="pi-section" id="Highlights">
                <div className="scrollbar-dynamic">
                  <h4>Project Highlights </h4>

                  {Object.keys(projectHighlights)
                    .reverse()
                    .map((item, i) => (
                      <table key={i}>
                        <tbody>
                          <tr>
                            <th className="text-capitalize">{item}</th>
                            <td className="text-capitalize">
                              {projectHighlights[item]}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
                </div>
              </div>
              <div className="pi-section" id="Overview">
                <h4>About {projectName}</h4>
                <p>{projectOverview.content[0].content[0].value}</p>
              </div>
              <div className="pi-section" id="Amenities">
                <h4>Amenities</h4>
                <ul className="amenities list-unstyled">
                  {amenities.map((item, i) => (
                    <li className="mb-0" key={i}>
                      <span className="text-primary h5 mr-2">
                        <i className={FA_ICON}></i>
                      </span>
                      {amenities[i]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pi-section" id="FloorPlan">
                <h4>Master/Unit Plans</h4>
                <div className="gallery-item-filter">
                  <span className="tab active" data-category=".item">
                    All
                  </span>
                  <span className="tab" data-category="#MasterPlan">
                    Masterplan
                  </span>
                  <span className="tab" data-category="#UnitPlan">
                    UnitPlan
                  </span>
                  <span className="tab" data-category="#FloorPlan">
                    FloorPlan
                  </span>
                </div>
                <div className="row gallery-items gallery-masonry">
                  {floorPlanImages.map((item, i) => (
                    <div
                      className="col-md-4 item"
                      key={i}
                      id={floorPlanImages[i].fields.title}
                    >
                      <a href={floorPlanImages[i].fields.file.url}>
                        <img
                          src={floorPlanImages[i].fields.file.url}
                          alt="FloorPlan"
                        />
                        <p> {floorPlanImages[i].fields.title}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pi-section" id="PricePlan">
                <h4>Pricesheet Configuration</h4>
                <table className="rwd-table">
                  <tbody>
                    <tr>
                      <th className="ColorGold">Typology</th>
                      <th className="ColorGold">Carpet Area</th>
                      <th className="ColorGold">Price All-In</th>
                      <th className="ColorGold">Price Sheet</th>
                    </tr>
                  </tbody>
                  {priceTable.data.map((item, i) => (
                    <tr key={i}>
                      <td data-th="Typology">
                        {item["typology"] != undefined ? (
                          `${item["typology"]}`
                        ) : (
                          <button
                            className="btn alert-danger"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            Request Here
                          </button>
                        )}
                      </td>
                      <td data-th="Carpet Area">
                        {item["carpet_area"] != undefined ? (
                          ` ${item["carpet_area"]}`
                        ) : (
                          <button
                            className="btn alert-danger"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            Request Here
                          </button>
                        )}
                      </td>
                      <td data-th="Price All-In">
                        {item["price_all_in"] != undefined ? (
                          `${item["price_all_in"]}`
                        ) : (
                          <button
                            className="btn alert-danger"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            Request Here
                          </button>
                        )}
                      </td>
                      <td data-th="Price Sheet">
                        <button
                          className="btn alert-danger"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          Request Here
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              <div className="pi-section" id="Gallery">
                <h4>Project Gallery</h4>
                <div className="gallery-item-filter">
                  <span className="tab active" data-category=".item">
                    All
                  </span>
                  <span className="tab" data-category="#External">
                    External View
                  </span>
                  <span className="tab" data-category="#Internal">
                    Internal View
                  </span>
                </div>
                <div className="row gallery-items gallery-masonry">
                  {galleryImages.map((item, i) => (
                    <div
                      className="col-md-4 item"
                      id={galleryImages[i].fields.title}
                      key={i}
                    >
                      <a href={galleryImages[i].fields.file.url}>
                        <img
                          src={galleryImages[i].fields.file.url}
                          alt="Gallery_Image"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pi-section" id="brochure">
                <div
                  className="media flexxdr align-items-center shadow rounded p-4 features"
                  style={{ background: " #f9f9f9" }}
                >
                  <div className="icons m-0 rounded h2 text-primary text-center px-3">
                    <i className="uil uil-envelope-check"></i>
                  </div>
                  <div className="content media flexxd ml-4">
                    <div>
                      <h5 className="mb-1">
                        <a href="/#" style={{ color: "#222" }}>
                          Need more info !
                        </a>
                      </h5>
                      <p className="mb-0">
                        Don't hesitate to download the brochure to
                        <br /> know more details of this project.
                      </p>
                    </div>
                    <div className="mt-2">
                      <a
                        href="/#"
                        style={{ color: " #fff" }}
                        className="btn alert-danger rounded"
                        data-keyboard="false"
                        data-backdrop="static"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        Download Brochure
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pi-section" id="Location">
                <h4>Prestige {projectName}</h4>
                <div className="row">
                  <iframe src={locationLink} width="100%" height="300"></iframe>
                </div>
                <div className="row">
                  <ul className="amenities list-unstyled">
                    {locationContent.map((item, i) => (
                      <li key={i}>
                        <span className="text-primary h5 mr-2">
                          <i className="uim uim-check-circle"></i>
                        </span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="modal fade bd-example-modal"
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="modal-body">
                    <div id="eformcdiv">
                      <form id="ecform" name="ecform" method="post">
                        <div className="form-group position-relative">
                          <label>Name</label>
                          <i
                            data-feather="user"
                            className="fea icon-sm icons"
                          ></i>
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
                            id="cname"
                            className="form-control pl-5"
                            pattern="[a-zA-Z ]+"
                            minLength="3"
                            placeholder="Your name"
                            onChange={(e) => handleChange(e)}
                            value={FormData.name}
                            required
                          />
                        </div>
                        <div className="form-group position-relative">
                          <label>Mobile no</label>
                          <div className="row no-gutters">
                            <div className="col-md-4">
                              <select
                                name="CountryCode"
                                className="form-control countrycode"
                                required=""
                                id="dropAnEnquiry_countrycode"
                                onChange={(e) => handleChange(e)}
                                value={FormData.CountryCode}
                              >
                                <CountryCode />
                              </select>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="tel"
                                name="number"
                                id="cmobile"
                                className="form-control pl-5"
                                placeholder="Your mobile"
                                onChange={(e) => handleChange(e)}
                                value={FormData.number}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group position-relative">
                          <label>
                            Email ID <span className="text-danger">*</span>
                          </label>
                          <i
                            data-feather="mail"
                            className="fea icon-sm icons"
                          ></i>
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
                            id="cemail"
                            type="email"
                            className="form-control pl-5"
                            placeholder="Your email"
                            onChange={(e) => handleChange(e)}
                            value={FormData.email}
                            required
                          />
                        </div>
                        <div className="form-group form-radio flexd">
                          <label className="left">Request a Site Visit</label>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                name="msg"
                                value={FormData.msg}
                                required
                                onChange={(e) => handleChange(e)}
                              />
                              <i className="helper"></i>Yes
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                name="msg"
                                value={FormData.msg}
                                onChange={(e) => handleChange(e)}
                              />
                              <i className="helper"></i>No
                            </label>
                          </div>
                        </div>
                        <div className="button-container">
                          <input
                            type="submit"
                            className="button btn btn-info rounded"
                            onClick={(e) => handleSubmit(e)}
                            data-dismiss="modal"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-5 col-12 d-md-block psection-left"
              id="enform"
            >
              <div className="shadow sticky-bar">
                <div id="eformdiv"></div>
                <form id="eform">
                  <div className="form-group position-relative">
                    <label>Name</label>
                    <i data-feather="user" className="fea icon-sm icons"></i>
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
                      id="aname"
                      className="form-control pl-5"
                      pattern="[a-zA-Z ]+"
                      minLength="3"
                      placeholder="Your name"
                      onChange={(e) => handleChange1(e)}
                      value={ModalData.name}
                      required
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label>Mobile no</label>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <select
                          name="countrycode"
                          className="form-control countrycode"
                          required=""
                          id="dropAnEnquiry_countrycode"
                          onChange={(e) => handleChange1(e)}
                          value={ModalData.CountryCode}
                        >
                          <CountryCode />
                        </select>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="tel"
                          name="number"
                          id="amobile"
                          className="form-control pl-5"
                          placeholder="Your mobile"
                          onChange={(e) => handleChange1(e)}
                          value={ModalData.number}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group position-relative">
                    <label>
                      Email ID <span className="text-danger">*</span>
                    </label>
                    <i data-feather="mail" className="fea icon-sm icons"></i>
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
                      onChange={(e) => handleChange1(e)}
                      value={ModalData.email}
                      required
                    />
                  </div>
                  <div className="form-group form-radio flexd">
                    <label className="left">Request a Site Visit</label>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="msg"
                          value={ModalData.msg}
                          onChange={(e) => handleChange1(e)}
                          required
                        />{" "}
                        <i className="helper"></i>Yes
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="msg"
                          value={ModalData.msg}
                          onChange={(e) => handleChange1(e)}
                        />
                        <i className="helper"></i>No
                      </label>
                    </div>
                  </div>
                  <div className="button-container">
                    <input
                      type="submit"
                      className="button btn btn-info rounded"
                      onClick={(e) => handleSubmitModal(e)}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footertop" className="footer">
        <div className="container-section">
          <div className="SocialButton" id="SocailSection">
            <ul>
              <li>
                <a
                  className={phone_no || STATIC_PHONE}
                  href={"tel:" + `${phone_no}`}
                >
                  <img src="/assest/images/phone.png" alt="phoneImg" />
                </a>
              </li>
              <li>
                <a
                  className="whatsap_url"
                  href={`${whatsapp_no}` + "!I want to know about"}
                >
                  <img src="/assest/images/whatsapp.png" alt="whatsappImg" />
                </a>
              </li>
            </ul>
          </div>
          <div className="row align-items-top">
            <div className="col-lg-4 col-12 mt-sm-0 pt-2 pt-sm-0">
              <div className="title-heading">
                <div className="media contact-detail align-items-center mt-3">
                  <div className="icon">
                    <MailOutlineIcon className="fea icon-m-md text-light mr-3" />
                  </div>
                  <div className="media-body content">
                    <h4 className="title font-weight-bold mb-0">Email</h4>
                    <a href="/# " id="peplemail" className="text-primary">
                      info@homesfy.in
                    </a>
                  </div>
                </div>
                <div className="media contact-detail align-items-center mt-3">
                  <div className="icon">
                    <PhoneIcon className="fea icon-m-md text-light mr-3" />
                  </div>
                  <div className="media-body content">
                    <h4 className="title font-weight-bold mb-0">Phone</h4>
                    <a
                      href="tel:02240375730"
                      className="text-primary btn-call"
                      id="peplphone"
                    >
                      02240375730
                    </a>{" "}
                    <br />
                  </div>
                </div>
                <div className="media contact-detail align-items-center mt-3">
                  <div className="icon">
                    <LocationOnIcon className="fea icon-m-md text-light mr-3" />
                  </div>
                  <div className="media-body content">
                    <h4 className="title font-weight-bold mb-0">Location</h4>
                    <p>
                      24, Myworkarea, Benaka Complex, 2nd Cross, Sirur Park
                      Road, Sheshadripuram, Bangalore- 560020
                    </p>
                  </div>
                </div>
                <ul className="list-unstyled social-icon mb-0 mt-4">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/homesfy"
                      target="_new"
                      className="rounded"
                    >
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/homesfyindia/?igshid=1hua89m9py0ue"
                      target="_new"
                      className="rounded"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/company/3374706/"
                      target="_new"
                      className="rounded"
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h4 className="text-light footer-head">Ready Homes</h4>
              <ul className="list-unstyled footer-list mt-4">
                <li>
                  <a
                    href="https://south-bangalore.prestige-realty.in/"
                    className="text-foot"
                    target="_new"
                  >
                    Prestige song of the south
                  </a>
                </li>
                <li>
                  <a
                    href="https://royale-gardens.prestige-realty.in/"
                    className="text-foot"
                    target="_new"
                  >
                    Prestige Royale Gardens
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.prestige-realty.in/prestige-augusta/"
                    className="text-foot"
                    target="_new"
                  >
                    Prestige Augusta Golf Village
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.prestige-realty.in/prestige-lake/"
                    className="text-foot"
                    target="_new"
                  >
                    Prestige Lake Ridge
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h4 className="text-light footer-head">Homes Ongoing</h4>
              <ul className="list-unstyled footer-list mt-4">
                <li>
                  <a
                    href="https://www.prestige-realty.in/finsbury-park/"
                    className="text-foot"
                    target="_new"
                  >
                    Prestige Finsburry
                  </a>
                </li>
                <li>
                  <a
                    href="https://jindal-city.prestige-realty.in/"
                    className="text-foot"
                    target="_new"
                  >
                    Prestige Jindal City
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h4 className="text-light footer-head">Useful Links</h4>
              <ul className="list-unstyled footer-list mt-4">
                <li>
                  <a
                    href="https://www.homesfy.in/about-us.html"
                    className="text-foot"
                    target="_new"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.homesfy.in/rera.html"
                    className="text-foot"
                    target="_new"
                  >
                    About Rera
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.homesfy.in/privacy.html"
                    className="text-foot"
                    target="_new"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.homesfy.in/terms.html"
                    className="text-foot"
                    target="_new"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-bar">
        <div className="container-section text-center">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="text-sm-center">
                <p className="mb-3">
                  Disclaimer:The content is for information purposes only and
                  does not constitute an offer to avail of any service. Prices
                  mentioned are subject to change without notice and properties
                  mentioned are subject to availability. Images for
                  representation purpose only. This is not the official website.
                  Website maintained by our online marketing agency pact
                  partners. We may share data with rera registered
                  brokers/companies for further processing. We may also send
                  updates to the mobile number/email id registered with us. You
                  may unsubscribe anytime by writing to us at
                  unsubscribe@pactpartners.in All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
