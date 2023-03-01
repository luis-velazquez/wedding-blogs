function Banner() {
  return (
    <div className="flex flex-col lg:-flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Wedding Insider's Blog </h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-pink-400">
            Every Couple's
          </span>{" "}
          Favorite blog.
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
       The best in wedding entertainment | The latest in wedding technology | Sound & lighting solutions | Best of Vendors and More!
      </p>
    </div>
  );
}

export default Banner;
