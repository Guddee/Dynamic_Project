import { useRouter } from 'next/router';
import { HOMESFY_FACEBOOK, HOMESFY_INSTAGRAM, HOMESFY_LOGO, HOMESFY_URL } from "../components/config/serverKey";

const Thankyou = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="container" style={{ fontFamily: "'Nunito', sans-serif" }}>
    <div className="hero_sec">
      <a href={HOMESFY_URL}>
        <img
          src={HOMESFY_LOGO}
          alt="Brand Logo"
          className="thankyou"
        />
      </a>
      <h1 className="thank-head text-center">Thank You!</h1>
      <div className="middle_part">
        <h2 className="mt-4">Follow Us</h2>
        <div className="iconSocial mt-4">
          <a href={HOMESFY_FACEBOOK}>
            <img
              src="assest/images/homesfy_facebook.jpg"
              class="img"
              alt="imgSocial"
            />
          </a>
          <a href={HOMESFY_INSTAGRAM}>
            <img
              src="assest/images/homesfy_instagram.jpg"
              class="img"
              alt="imgSocial"
            />
          </a>

          <p className="mt-4">To Join The Live Event</p>
        </div>
        <div className="Field">
          <button onClick={handleClick} className="text-center mt-4">
            <i class="fas fa-undo"></i> Continue To Homepage
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Thankyou;