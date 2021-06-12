import React,{useState,useEffect} from 'react'
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { STATIC_PHONE } from '../../config/serverKey';
import { getApi } from '../../config/CustomApi';


export const Footer = () => {
 
    const [data, setData] = useState(null);
    useEffect(() => {
      getApi().then((data) => {
        console.log(data);
        setData(data);
      });
    }, []);
    const phone_no=data?.phone ;
    const whatsapp_no=data?.wp_links;
    return (
        <div>
     <footer id="footertop" className="footer">
        <div className="container-section">
          <div className="SocialButton" id="SocailSection">
            <ul>
              <li>
                <a
                  className={phone_no || STATIC_PHONE}
                  href={"tel:"+`${phone_no}`}
                >
                  <img src="assest/images/phone.png" alt="phoneImg"/>
                </a>
              </li>
              <li>
                <a className="whatsap_url" href={`${whatsapp_no}`+"!I want to know about Project_name"}>
                  <img src="assest/images/whatsapp.png" alt="whatsappImg"/>
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
                    <i className="mdi mdi-chevron-right mr-1"></i> Prestige song
                    of the south
                  </a>
                </li>
                <li>
                  <a
                    href="https://royale-gardens.prestige-realty.in/"
                    className="text-foot"
                    target="_new"
                  >
                    <i className="mdi mdi-chevron-right mr-1"></i> Prestige
                    Royale Gardens
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.prestige-realty.in/prestige-augusta/"
                    className="text-foot"
                    target="_new"
                  >
                    <i className="mdi mdi-chevron-right mr-1"></i> Prestige
                    Augusta Golf Village
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.prestige-realty.in/prestige-lake/"
                    className="text-foot"
                    target="_new"
                  >
                    <i className="mdi mdi-chevron-right mr-1"></i> Prestige Lake
                    Ridge
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
                    <i className="mdi mdi-chevron-right mr-1"></i> Prestige
                    Finsburry
                  </a>
                </li>
                <li>
                  <a
                    href="https://jindal-city.prestige-realty.in/"
                    className="text-foot"
                    target="_new"
                  >
                    <i className="mdi mdi-chevron-right mr-1"></i> Prestige
                    Jindal City
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
                    <i className="mdi mdi-chevron-right mr-1"></i> About us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.homesfy.in/rera.html"
                    className="text-foot"
                    target="_new"
                  >
                    <i className="mdi mdi-chevron-right mr-1"></i> About Rera
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.homesfy.in/privacy.html"
                    className="text-foot"
                    target="_new"
                  >
                    <i className="mdi mdi-chevron-right mr-1"></i> Privacy
                    Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.homesfy.in/terms.html"
                    className="text-foot"
                    target="_new"
                  >
                    <i className="mdi mdi-chevron-right mr-1"></i> Terms &
                    Conditions
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
    )
}
