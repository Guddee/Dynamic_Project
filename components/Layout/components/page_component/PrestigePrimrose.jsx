import Carousel from "react-multi-carousel";
import Image from 'next/image';


export const PrestigePrimrose = ({ article, deviceType }) => {
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
  const { prestigePrimrose } = article.fields;
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
          {prestigePrimrose.map((item, i) => (
            <div
              className="card border-0 work-container work-grid position-relative d-block"
              key={i}
            >
              <div className="card-body p-0">
                <a href="/#">
                  <Image
                    src={"https:" + prestigePrimrose[i]?.fields?.file?.url}
                    width={prestigePrimrose[i]?.fields?.file?.details?.image?.width}
                    height={prestigePrimrose[i]?.fields?.file?.details?.image?.height}
                    className="img-fluid"
                    alt={prestigePrimrose[i]?.fields?.title}
                  />
                </a>
                <div className="content bg-white p-3">
                  <h5 className="mb-0 text-center">
                    <a href="/#">Get New Launch Project Details </a>
                  </h5>
                  <div className="post-meta d-flex justify-content-between mt-4">
                    <a
                      href="/#"
                      className="btn btn-sm btn-info btn1"
                      data-toggle="modal"
                      data-target="#mymodal"
                    >
                      Click To Know More
                    </a>
                  </div>
                </div>
                <div className="read_more pstatus text-center rounded-circle">
                  <span className="statusl_New">
                    {prestigePrimrose[i]?.fields?.title}
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
