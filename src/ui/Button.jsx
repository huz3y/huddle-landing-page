function button({ children }) {
  return (
    <a
      href="#"
      className="inline-block rounded-full bg-purple-50 px-14 py-3.5 text-sm text-violet shadow-button transition-colors hover:bg-magenta hover:text-purple-50 focus:outline-none"
    >
      {children}
    </a>
  );
}

export default button;
