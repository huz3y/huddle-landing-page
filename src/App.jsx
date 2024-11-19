import ImageSide from "./layout/ImageSide";
import TextSide from "./layout/TextSide";

function App() {
  return (
    <div className="h-screen overflow-auto bg-violet bg-mobile-bg bg-contain bg-left-top bg-no-repeat md:grid md:grid-cols-[1.25fr_1fr] md:grid-rows-1 md:overflow-hidden md:bg-desktop-bg md:bg-cover">
      <ImageSide />
      <TextSide />
    </div>
  );
}

export default App;
