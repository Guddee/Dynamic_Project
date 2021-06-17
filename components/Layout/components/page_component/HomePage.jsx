import { BangaloreProject } from "./BangaloreProject";
import { BangaloreSlide2 } from "./BangaloreSlide2";
import { Banner } from "./Banner";
import WhyPrestige from "./WhyPrestige";
import { PrestigePrimrose } from "./PrestigePrimrose";
import { Header } from "../Header";
import { ModalForm } from "./ModalForm";
import { Drawer } from "@material-ui/core";
import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { CloseOutlined } from "@material-ui/icons";
import { Form } from "./Form";
import { Footer } from "../Footer";

export default function HomePage({ article, deviceType }) {
  const { prestigeBangalorePara } = article.fields;
  const [openForm, setOpenForm] = useState(false);
  const handleDrawerForm = () => {
    setOpenForm(true);
  };
  return (
    <div>
      <Header article={article} />
      <Banner article={article} />
      <section id="why_prestige">
        <div className="container-section">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title  mt-4">
                <h4 className="title about_circle">
                  Why Choose Prestige Group
                </h4>
                <br />
              </div>
              <WhyPrestige article={article} deviceType={deviceType} />
            </div>
          </div>
        </div>
      </section>
      <section className="section mb-5">
        <div className="container-section">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title">
                <h4 className="title mb-4">Projects in Bangalore</h4>
              </div>
              <div className="row justify-content-center">
                <div className="col-12">
                  <p className="ml-4 mb-4">
                    {prestigeBangalorePara.content[0].content[0].value}
                  </p>
                </div>
              </div>
              <div className=" no-padding">
                <BangaloreProject article={article} deviceType={deviceType} />
              </div>

              <div className="col-lg-12 no-padding mt-3">
                <BangaloreSlide2 article={article} deviceType={deviceType} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section mb-5">
        <div className="container-section">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title">
                <h4 className="title mb-4">Prestige Primrose Hills</h4>
              </div>
              <PrestigePrimrose article={article} deviceType={deviceType} />
            </div>
          </div>
        </div>
      </section>

      <Drawer
        anchor="right"
        open={openForm}
        onClose={() => {
          setOpenForm(false);
        }}
      >
        <div
          style={{ height: "100vh", padding: "20px", width: "580px" }}
          className="register_panel"
        >
          <IconButton
            onClick={() => {
              setOpenForm(false);
            }}
            color="primary"
            style={{
              position: "absolute",
              right: "20px",
              top: "10px",
              zIndex: "3",
              color: "#000",
            }}
          >
            <CloseOutlined color="primary" />
          </IconButton>
          <ModalForm />
        </div>
      </Drawer>
      <button
        type="button"
        className="enquireNowScroll"
        data-panel="main"
        onClick={handleDrawerForm}
      >
        Register Here
      </button>
      <Form />
      <Footer />
    </div>
  );
}
