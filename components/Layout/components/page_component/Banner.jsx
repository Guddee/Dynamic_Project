import Carousel from "react-bootstrap/Carousel";

export const Banner = ({article}) => {
    const{bannerImages}=article.fields;
    return (
        <div className="Banner_Section">
            <Carousel>
          {bannerImages.map((item, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={bannerImages[i]?.fields?.file?.url}
                alt={bannerImages[i]?.fields?.title}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
    )
}
