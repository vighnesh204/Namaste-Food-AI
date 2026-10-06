import { NavLink } from "react-router";

function Navbar() {
  const navLinkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-orange-500"
        : "text-slate-700 hover:text-orange-500"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Left Side */}
        <div className="flex items-center gap-8 ">
          <NavLink
            to="/"
            className="text-2xl font-extrabold tracking-tight text-orange-500"
          >
            CRAVIO
          </NavLink>

          <button
            type="button"
            className="group flex items-center gap-2 text-sm"
          >
            <span className="font-semibold text-slate-800 underline decoration-2 underline-offset-4 group-hover:text-orange-500">
              Pune
            </span>

            <span className="text-slate-500">
              Maharashtra
            </span>

            <span className="text-orange-500">
              ▼
            </span>
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/search"
            className={navLinkClasses}
          >
            Search
          </NavLink>

          <button
            type="button"
            className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-orange-500"
          >
            Offers
          </button>

          <NavLink
            to="/cart"
            className={navLinkClasses}
          >
            Cart
          </NavLink>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;