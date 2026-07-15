export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-5">
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          PCEA Nyari Church
        </h1>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Ministries</li>
          <li>Contact</li>
        </ul>

      </div>
    </nav>
  );
}