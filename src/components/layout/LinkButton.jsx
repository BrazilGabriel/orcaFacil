import { Link } from "react-router-dom";


function LinkButton({ to, text }) {
  return (
    <Link className={`bg-slate-900 text-white py-2 px-4 transition duration-500 hover:text-amber-400`} to={to}>
      {text}
    </Link>
  );
}
export default LinkButton;
