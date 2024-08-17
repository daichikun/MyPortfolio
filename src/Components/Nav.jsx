import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-1 p-20">

                <NavLink spy={true} smooth={true} to={'/'}>
                    <li className="my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">Home</li>
                </NavLink>

                <NavLink spy={true} smooth={true} to={'/about'}>
                    <li className="my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">About</li>
                </NavLink>

                <NavLink spy={true} smooth={true} to="Contact">
                    <li className="my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">Contact</li>
                </NavLink>

            </ul>

        </div>
    </>

    return (

        <nav className="bg-slate-900">

            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 ">
                <div className="nav-logo flex items-center flex-1">
                    <Link className="cursor-pointer" spy={true} smooth={true} to={'/'}>
                        <img className="inline size-7 align-middle pb-1 pr-1" src="../../public/Logos/Logo.png" alt="Logo" />
                        <span className=" text-3x2 font-bold">My Portfolio</span>
                    </Link>
                </div>

                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">

                        <ul className="flex gap-8 mr-16 text-[18px]">

                            <NavLink spy={true} smooth={true} to={'/'}>
                                <li className="font-light hover:text-orange-400 transition border-b-2 border-slate-900 hover:border-orange-500 cursor-pointer">Home</li>
                            </NavLink>

                            <NavLink spy={true} smooth={true} to={'/about'}>
                                <li className="font-light hover:text-orange-400 transition border-b-2 border-slate-900 hover:border-orange-500 cursor-pointer">About</li>
                            </NavLink>

                            <NavLink spy={true} smooth={true} to="Contact">
                                <li className="font-light hover:text-orange-400 transition border-b-2 border-slate-900 hover:border-orange-500 cursor-pointer">Contact</li>
                            </NavLink>

                        </ul>

                    </div>
                </div>

                <div> {click && content}</div>

                <button className="block md:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>

            </div>
        </nav>

    );
};

export default Nav;