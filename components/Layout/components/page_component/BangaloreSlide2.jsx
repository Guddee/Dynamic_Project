import AirlineSeatFlatIcon from "@material-ui/icons/AirlineSeatFlat";

import Carousel from "react-multi-carousel";

export const BangaloreSlide2 = ({ article, deviceType }) => {
  const {
    bangaloreProjectSlide2,
    bangaloreSlide2Address,
    bangaloreSlide2BedInfo,
    bangaloreSlide2PriceInfo,
  } = article.fields;

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
    <div>
      <div className="row">
        <Carousel
          ssr
          partialVisbile={false}
          deviceType={deviceType}
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
          {bangaloreProjectSlide2.map((item, i) => (
            <div
              className="card border-0 work-container work-grid position-relative d-block"
              key={i}
            >
              <div className="card-body p-0">
                <a href="/#">
                  <img
                    src={bangaloreProjectSlide2[i]?.fields?.file?.url}
                    className="img-fluid"
                    alt={bangaloreProjectSlide2[i]?.fields?.title}
                  />
                </a>
                <div className="content bg-white p-3">
                  <h5 className="mb-0">
                    <a href="/#" target="_new">
                      {bangaloreProjectSlide2[i]?.fields?.title}
                    </a>
                  </h5>
                  <h6 className="text-muted tag mb-0">
                    <a href="/#">
                      <p className="subtitle">{bangaloreSlide2Address[i]}</p>
                    </a>
                  </h6>
                  <div className="post-meta d-flex justify-content-between mt-3">
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item mr-3">
                        <i className="mdi mdi-bed-empty mdi-24px mr-2">
                          <AirlineSeatFlatIcon />
                        </i>
                        {bangaloreSlide2BedInfo[i]}
                      </li>
                    </ul>
                    <a
                      className="btn btn-sm btn-info"
                      data-toggle="modal"
                      data-target="#mymodal"
                      href="/#"
                    >
                      {bangaloreSlide2PriceInfo[i]}
                    </a>
                  </div>
                </div>
                <div className="read_more pstatus text-center rounded-circle">
                  <span className="statusl_Ready">
                    {bangaloreProjectSlide2[i]?.fields?.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
