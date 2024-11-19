function App() {
  return (
    <div className="bg-mobile-bg sm:bg-desktop-bg bg-violet h-screen bg-contain bg-left-top bg-no-repeat sm:grid sm:grid-cols-[1.25fr_1fr] sm:bg-cover">
      <div className="flex items-center justify-center">
        <img
          src="logo.svg"
          alt="logo"
          className="absolute left-8 top-8 w-40 sm:w-48 md:w-52"
        />
        <img src="illustration-mockups.svg" alt="hero" className="px-8 py-40" />
      </div>
      <div></div>
    </div>
  );
}

export default App;
