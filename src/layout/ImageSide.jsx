import Hero from "../ui/Hero";
import Logo from "../ui/Logo";

function ImageSide() {
  return (
    <div className="flex items-center justify-center">
      <Logo src="logo.svg" alt="logo" />
      <Hero src="illustration-mockups.svg" alt="hero" />
    </div>
  );
}

export default ImageSide;
