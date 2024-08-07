import { BsFillTrashFill } from "react-icons/bs";
import { NumericFormat } from "react-number-format";


function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  };

  return (
    <div className="p-4 border border-slate-700 rounded-md w-1/4 min-w-64 m-[0.5%]">
      <h4 className="bg-slate-900 text-white p-2 mb-5 text-xl font-bold overflow-hidden text-nowrap text-ellipsis"> {name}</h4>
      <p  className="text-slate-400 mb-4">
        <span className="font-bold"> Custo total: </span> 
        <NumericFormat
          displayType="text"
          value={cost}
          decimalSeparator=","
          prefix="R$ "
          thousandSeparator="."
        />
      </p>
      <p  className="text-slate-400 mb-4 overflow-hidden text-nowrap text-ellipsis">{description}</p>
      <div className="mt-5 flex items-center justify-end">
        <button onClick={remove} className="bg-transparent text-white font-bold text-sm py-3 px-5 cursor-pointer border border-white rounded-md flex items-center justify-center transition duration-500 hover:bg-rose-600 hover:border-rose-600 hover:text-white">
          <BsFillTrashFill className="mr-2"/>
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
