import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <footer className={`bg-slate-900 text-white p-12 text-center`}>
            <ul className={` flex justify-center`}>
                <li className="my-0 mx-4 hover:text-amber-400"><FaFacebook className="text-2xl cursor-pointer"/></li>
                <li className="my-0 mx-4 hover:text-amber-400"><FaInstagram className="text-2xl cursor-pointer"/></li>
                <li className="my-0 mx-4 hover:text-amber-400"><FaLinkedin className="text-2xl cursor-pointer"/></li>
            </ul>
            <p className={`mt-8`}><span className="font-bold text-amber-400">Costs</span>&copy; 2024</p>
        </footer>

    )
}

export default Footer