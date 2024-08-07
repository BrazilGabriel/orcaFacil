import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { NumericFormat } from "react-number-format";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const categoryText = {
    infra: " bg-red-400 ",
    desenvolvimento: " bg-sky-400 ",
    design: " bg-emerald-400 ",
    planejamento: " bg-violet-400 ",
  };

  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };
  return (
    <div className="p-4 border-2 border-slate-700 rounded-md w-1/4 min-w-64 m-[0.5%]">
      <h4 className="bg-slate-900 text-white p-2 mb-5 text-xl font-bold overflow-hidden text-nowrap text-ellipsis">
        {name}
      </h4>
      <p className="text-slate-400 mb-4">
        <span className="font-bold">Orçamento:</span>{" "}
        <NumericFormat
          displayType="text"
          value={budget}
          decimalSeparator=","
          prefix="R$ "
          thousandSeparator="."
        />
      </p>
      <p className="flex items-center text-slate-400 ">
        <span
          className={`block w-3 h-3 rounded-full mr-2  ${
            categoryText[category.toLowerCase()]
          }`}
        ></span>
        {category}
      </p>
      <div className="mt-5 flex justify-between items-center">
        <Link
          className="bg-slate-950 text-white font-bold text-sm py-3 px-5 cursor-pointer rounded-md border border-white flex items-center justify-center transition duration-500 hover:bg-slate-900 hover:text-indigo-500"
          to={`/project/${id}`}
        >
          <BsPencil className="mr-2" /> Editar
        </Link>
        <button
          className="bg-white text-slate-900 font-bold text-sm py-3 px-5 cursor-pointer rounded-md flex items-center justify-center transition duration-500 hover:bg-rose-600 hover:text-white"
          onClick={remove}
        >
          <BsFillTrashFill className="mr-2" /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
