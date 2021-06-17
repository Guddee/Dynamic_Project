import React, { Component } from "react";

import Carousel from "react-multi-carousel";

class WhyPrestige extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };

    return (
      <div className={`why-prestige`}>
        <Carousel
          ssr
          partialVisbile={false}
          deviceType={this.props.deviceType}
          containerClass="carousel-container"
          itemClass="image-item"
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          draggable
          focusOnSelect={false}
          infinite
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          showDots={false}
          slidesToSlide={1}
          swipeable
        >
          {this.props.article?.fields?.whyPrestige.map((item, i) => (
            <div
              className="ProjectPart card border-0 work-container work-grid position-relative d-block"
              key={i}
            >
              <div className="card-body p-0">
                <img
                  className="img-fluid"
                  src={item.fields.file.url}
                  alt={item.fields.title}
                />
                <div className="content1 bg-white p-3">
                  <h5 className="mb-4 title">{item.fields.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default WhyPrestige;
