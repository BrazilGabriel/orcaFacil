
function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-bold" htmlFor={name}>{text}</label>
      <input className="p-3 border-2 rounded-md border-slate-700 bg-transparent hover:bg-slate-900 focus:border-indigo-500 focus:outline-none placeholder:text-slate-600"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}
export default Input;
