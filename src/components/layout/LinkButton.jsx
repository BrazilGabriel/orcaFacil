import { Link } from "react-router-dom";


function LinkButton({ to, text }) {
  return (
    <Link className="bg-indigo-500 text-white rounded-md py-2 px-8 text-center transition duration-500 hover:bg-indigo-400" to={to}>
      {text}
    </Link>
  );
}
export default LinkButton;
