import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'));
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AirlineSeatFlatIcon from "@material-ui/icons/AirlineSeatFlat";

export const BangaloreProject = ({ article }) => {
  const {
    projectsInBangalore,
    bangaloreSlide1Address,
    bangaloreSlide1BedInfo,
    bangaloreSlide1PriceInfo,
  } = article.fields;
  const state1 = {
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

  return (
    <div>
      <div className="row">
        <OwlCarousel
          items={3}
          className="owl-theme"
          loop
          nav
          margin={20}
          responsive={state1.responsive}
        >
          {projectsInBangalore.map((item, i) => (
            <div
              className="card border-0 work-container work-grid position-relative d-block"
              key={i}
            >
              <div className="card-body p-0">
                <a href="/#">
                  <img
                    src={projectsInBangalore[i]?.fields?.file?.url}
                    className="img-fluid"
                    alt={projectsInBangalore[i]?.fields?.title}
                  />
                </a>
                <div className="content bg-white p-3">
                  <h5 className="mb-0">
                    <a href="/#">{projectsInBangalore[i]?.fields?.title}</a>
                  </h5>
                  <h6 className="text-muted tag mb-0">
                    <a href="/#">
                      <p className="subtitle">{bangaloreSlide1Address[i]}</p>
                    </a>
                  </h6>
                  <div className="post-meta d-flex justify-content-between mt-3">
                    <ul className="list-unstyled mb-0">
                      <li className="list-inline-item mr-3">
                        <i className="mdi mdi-bed-empty mdi-24px mr-2">
                          <AirlineSeatFlatIcon />
                        </i>
                        {bangaloreSlide1BedInfo[i]}
                      </li>
                    </ul>
                    <a
                      className="btn btn-sm btn-info"
                      data-toggle="modal"
                      data-target="#mymodal"
                      href="/#"
                    >
                      {bangaloreSlide1PriceInfo[i]}
                    </a>
                  </div>
                </div>
                <div className="read_more pstatus text-center rounded-circle">
                  <span className="statusl_Ready">
                    {projectsInBangalore[i]?.fields?.description}
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
