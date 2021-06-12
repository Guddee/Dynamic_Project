import AirlineSeatFlatIcon from "@material-ui/icons/AirlineSeatFlat";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'));
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const BangaloreSlide2 = ({article}) => {
    const {
        bangaloreProjectSlide2,
        bangaloreSlide2Address,
        bangaloreSlide2BedInfo,
        bangaloreSlide2PriceInfo,}=article.fields;
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
                    {bangaloreProjectSlide2.map((item, i) => (
                      <div className="card border-0 work-container work-grid position-relative d-block" key={i}>
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
                                <p className="subtitle">
                                  {bangaloreSlide2Address[i]}
                                </p>
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
                  </OwlCarousel>
                </div>
 
        </div>
    )
}
