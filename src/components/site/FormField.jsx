export default function FormField({
  label,
  name,
  type = "text",
  required = false,
  options,
  full = false,
  placeholder,
  defaultValue,
}) {
  const controlClass =
    "min-h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-600/15";
  const fieldId = `field-${name}`;

  return (
    <div className={`flex min-w-0 flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <label className="text-sm font-bold text-slate-800" htmlFor={fieldId}>
        {label}
        {required && " *"}
      </label>
      {options ? (
        <select
          className={controlClass}
          id={fieldId}
          name={name}
          required={required}
          defaultValue={defaultValue || ""}
        >
          <option value="">{placeholder || "Choose an option"}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          className={`${controlClass} min-h-28 resize-y`}
          id={fieldId}
          name={name}
          required={required}
        />
      ) : (
        <input
          className={controlClass}
          id={fieldId}
          name={name}
          type={type}
          required={required}
        />
      )}
    </div>
  );
}
