import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'));
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const PrestigePrimrose = ({ article }) => {
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
  const { prestigePrimrose } = article.fields;
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
          {prestigePrimrose.map((item, i) => (
            <div
              className="card border-0 work-container work-grid position-relative d-block"
              key={i}
            >
              <div className="card-body p-0">
                <a href="/#">
                  <img
                    src={prestigePrimrose[i]?.fields?.file?.url}
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
        </OwlCarousel>
      </div>
    </div>
  );
};
