function social() {
  return (
    <div className="mt-16 flex items-center justify-center gap-2 md:absolute md:bottom-9 md:right-14">
      <a href="#" className="">
        <svg className="h-10 w-10 fill-purple-50 transition-colors hover:fill-magenta">
          <use href="icons.svg#icon-facebook" />
        </svg>
      </a>
      <a href="#">
        <svg className="h-10 w-10 fill-purple-50 transition-all hover:fill-magenta">
          <use href="icons.svg#icon-twitter" />
        </svg>
      </a>
      <a href="#">
        <svg className="h-10 w-10 fill-purple-50 transition-all hover:fill-magenta">
          <use href="icons.svg#icon-linkedin" />
        </svg>
      </a>
    </div>
  );
}

export default social;
