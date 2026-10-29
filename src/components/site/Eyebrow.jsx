export default function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`text-xs font-extrabold uppercase tracking-[0.14em] ${
        light ? "text-blue-100" : "text-blue-700"
      }`}
    >
      {children}
    </div>
  );
}
