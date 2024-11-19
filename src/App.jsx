function App() {
  return (
    <div className="bg-mobile-bg md:bg-desktop-bg bg-violet h-screen overflow-auto bg-contain bg-left-top bg-no-repeat md:grid md:grid-cols-[1.25fr_1fr] md:grid-rows-1 md:overflow-hidden md:bg-cover">
      <div className="flex items-center justify-center">
        <img
          src="logo.svg"
          alt="logo"
          className="absolute left-6 top-6 w-40 md:left-11 md:top-11 md:w-48 md:w-52"
        />
        <img
          src="illustration-mockups.svg"
          alt="hero"
          className="px-8 pb-10 pt-28 md:px-6 md:py-40 md:pt-56"
        />
      </div>
      <div className="md:relative">
        <div className="w-full space-y-6 px-9 text-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:pr-20 md:text-left">
          <h1 className="font-poppins text-2xl font-medium capitalize leading-normal text-purple-50 sm:text-4xl md:leading-normal">
            Build the community your fans will love
          </h1>
          <p className="text-sm text-purple-50">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            genuine discussions. engage in genuine discussion.
          </p>
          <a
            href="#"
            className="text-violet shadow-button hover:bg-magenta inline-block rounded-full bg-purple-50 px-14 py-3.5 text-sm transition-colors hover:text-purple-50 focus:outline-none"
          >
            Register
          </a>
        </div>
        <div className="mt-9 flex items-center justify-center gap-2 md:absolute md:bottom-9 md:right-14">
          <a href="#" className="">
            <svg className="hover:fill-magenta h-10 w-10 fill-purple-50 transition-colors">
              <use href="icons.svg#icon-facebook" />
            </svg>
          </a>
          <a href="#">
            <svg className="hover:fill-magenta h-10 w-10 fill-purple-50 transition-all">
              <use href="icons.svg#icon-twitter" />
            </svg>
          </a>
          <a href="#">
            <svg className="hover:fill-magenta h-10 w-10 fill-purple-50 transition-all">
              <use href="icons.svg#icon-linkedin" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
