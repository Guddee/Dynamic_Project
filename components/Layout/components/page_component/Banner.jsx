import Carousel from "react-bootstrap/Carousel";
import Image from 'next/image';

export const Banner = ({article}) => {
    const{bannerImages}=article.fields;
    return (
        <div className="Banner_Section">
            <Carousel>
          {bannerImages.map((item, i) => (
            <Carousel.Item key={i}>
              <Image
                className="d-block w-100"
                src={"https:" + bannerImages[i]?.fields?.file?.url}
                width={bannerImages[i]?.fields?.file?.details?.image?.width}
                height={bannerImages[i]?.fields?.file?.details?.image?.height}
                alt={bannerImages[i]?.fields?.title}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
    )
}
