export default function Navbar() {
  return (
    <nav className="bg-[var(--color-sanctuary-blue)] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold">
            PCEA NYARI
          </h1>

          <p className="text-sm text-gray-200">
            Church
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="hidden gap-8 md:flex">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Ministries</a>
          </li>

          <li>
            <a href="#">Sermons</a>
          </li>

          <li>
            <a href="#">Events</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden rounded-md bg-[var(--color-ember-crimson)] px-4 py-2 font-medium transition hover:opacity-90 md:block">
          New Here?
        </button>

        {/* Mobile Menu Button */}
        <button className="text-3xl md:hidden">
          ☰
        </button>
      </div>
    </nav>
  );
}