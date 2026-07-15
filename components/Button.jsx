export default function Button({ children }) {
  return (
    <button
      className="
        bg-ember-crimson
        text-white
        px-6
        py-3
        rounded-md
        font-semibold
        hover:bg-red-800
        transition
      "
    >
      {children}
    </button>
  );
}