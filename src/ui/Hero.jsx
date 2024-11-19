import PropTypes from "prop-types";

Hero.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

function Hero({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="px-8 pb-10 pt-28 md:px-6 md:py-40 md:pt-56"
    />
  );
}

export default Hero;
