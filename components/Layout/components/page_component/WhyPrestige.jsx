import React from "react";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'));
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const WhyPrestige = ({article}) => {
    const state = {
        responsive: {
          0: {
            items: 1,
          },
          450: {
            items: 2,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 3,
          },
        },
      };
    const {whyPrestige}=article.fields;
  return (
    <div>
      <div className="row">
        <OwlCarousel
          items={3}
          className="owl-theme"
          loop
          nav
          margin={20}
          responsive={state.responsive}
        >
          {whyPrestige.map((item, i) => (
            <div className="ProjectPart card border-0 work-container work-grid position-relative d-block" key={i}>
              <div className="card-body p-0">
                <img
                  className="img-fluid"
                  src={whyPrestige[i].fields.file.url}
                  alt={whyPrestige[i].fields.title}
                />
                <div className="content1 bg-white p-3">
                  <h5 className="mb-4 title">{whyPrestige[i].fields.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};
