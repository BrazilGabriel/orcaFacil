function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-bold" htmlFor={name}>
        {text}
      </label>
      <select
        className="p-3 border-2 hover:bg-slate-900 rounded-md border-slate-700 bg-transparent focus:border-indigo-500 focus:outline-none"
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option className="bg-slate-950">Selecione uma opção</option>
        {options.map((option) => (
          <option className="bg-slate-950" value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
