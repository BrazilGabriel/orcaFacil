import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

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
    <div className="p-4 border border-slate-700 rounded-md w-1/4 m-[0.5%]">
      <h4 className="bg-slate-900 text-amber-400 p-2 mb-5 text-xl font-bold">
        {name}
      </h4>
      <p className="text-slate-700 mb-4">
        <span className="font-bold">Orçamento:</span> R$ {budget}
      </p>
      <p className="flex items-center">
        <span
          className={`block w-3 h-3 rounded-full mr-2  ${
            categoryText[category.toLowerCase()]
          }`}
        ></span>
        {category}
      </p>
      <div className="mt-5 flex items-center">
        <Link
          className="bg-white text-slate-900 text-sm py-2 px-4 mr-4 cursor-pointer border border-slate-900 flex items-center justify-center transition duration-500 hover:bg-slate-900 hover:text-amber-400"
          to={`/project/${id}`}
        >
          <BsPencil className="mr-2"/> Editar
        </Link>
        <button
          className="bg-white text-slate-900 text-sm py-2 px-4 mr-4 cursor-pointer border border-slate-900 flex items-center justify-center transition duration-500 hover:bg-slate-900 hover:text-amber-400"
          onClick={remove}
        >
          <BsFillTrashFill className="mr-2"/> Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
