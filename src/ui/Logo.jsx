function Logo({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute left-6 top-6 w-40 md:left-11 md:top-11 md:w-48"
    />
  );
}

export default Logo;
