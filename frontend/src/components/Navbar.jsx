import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";


import avatarImg from "../assets/avatar.png"
import { useState } from "react";
import { useSelector } from "react-redux";

const navigation = [
    {name: "Dashboard", href:"/dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"},
]

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    // console.log(isDropdownOpen)

    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems)

    const currentUser = false;
    return (
        <header className="px-4 py-6 mx-auto max-w-screen-2xl">
            <nav className="flex items-center justify-between ">
                {/* left side */}
                <div className="flex items-center gap-4 md:gap-16">
                    <Link to="/">
                    <HiMiniBars3CenterLeft className="size-6"/>
                    </Link>

                    {/* search input */}
                    <div className="relative w-40 space-x-2 sm:w-72">

                        <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />

                        <input type="text" placeholder="Search here" 
                        className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
                    </div>
                </div>

                 
                {/* right side */}
                 <div className="relative flex items-center space-x-2 md:space-x-3">
                    <div>
                        {
                            currentUser ? <>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                            </button>
                            {/* show dropdowns */}

                            {
                                isDropdownOpen && (
                                    <div className="absolute right-0 z-40 w-48 mt-2 bg-white rounded-md shadow-lg">
                                        <ul className="py-2">
                                            {
                                                navigation.map((item) => (
                                                    <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                        <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                            </> : <Link to="/login"><HiOutlineUser className="size-6" /></Link>
                        }
                    </div>

                 <button className="hidden sm:block">
                 <HiOutlineHeart className="size-6" />
                 </button>

                <Link to="/cart" className="flex items-center p-1 px-2 rounded-sm bg-primary sm:px-6">
                <HiOutlineShoppingCart className='' />
                {
                    cartItems.length > 0 ? <span className="text-sm font-semibold sm">{cartItems.length}</span> :
                    <span className="text-sm font-semibold sm">0</span>
                }
                
                </Link>
                 </div>
            </nav>
        </header>
    )
}

export default Navbar;