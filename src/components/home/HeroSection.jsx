function HeroSection() {
  return (
    <section className="bg-orange-50">
      <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Food delivery in Pune
          </p>

          <h1 className="max-w-xl text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            What are you
            <span className="text-orange-500"> craving </span>
            today?
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Discover delicious food from restaurants around you and find
            something perfect for every craving.
          </p>

          <div className="mt-8 flex max-w-xl items-center rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
            <input
              type="text"
              placeholder="Search restaurants, dishes or cuisines"
              className="flex-1 bg-transparent px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />

            <button
              type="button"
              className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Search
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Biryani", "Pizza", "Burger", "Dosa", "Chinese"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm text-slate-600"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden justify-center lg:flex">
          <div className="flex h-[420px] w-[420px] items-center justify-center rounded-full bg-orange-100">
            <div className="text-center">
              <p className="text-sm font-semibold text-orange-500">
                Food image
              </p>

              <p className="mt-1 text-xs text-slate-400">
                We will add the final hero image next
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;