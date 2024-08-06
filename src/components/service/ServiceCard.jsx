import { BsFillTrashFill } from "react-icons/bs";


function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  };

  return (
    <div className="p-4 border border-slate-700 rounded-md w-1/4 m-[0.5%]">
      <h4 className="bg-slate-900 text-amber-400 p-2 mb-5 text-xl font-bold">{name}</h4>
      <p  className="text-slate-700 mb-4">
        <span className="font-bold"> Custo total:</span> R${cost}
      </p>
      <p  className="text-slate-700 mb-4">{description}</p>
      <div className="mt-5 flex items-center">
        <button onClick={remove} className="bg-white text-slate-900 text-sm py-2 px-4 mr-4 cursor-pointer border border-slate-900 flex items-center justify-center transition duration-500 hover:bg-slate-900 hover:text-amber-400">
          <BsFillTrashFill className="mr-2"/>
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
