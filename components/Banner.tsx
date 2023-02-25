function Banner() {
  return (
    <div className="flex flex-col lg:-flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Dallas Weddings' Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-cyan-600">
            Every Couple's
          </span>{" "}
          Favorite blog.
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | The latest in technology | Top 10 lists and more!
      </p>
    </div>
  );
}

export default Banner;
