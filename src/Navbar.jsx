import React from "react";

const Navbar = () => {

    const listItems = [
        "Home",
        "About",
        "Project",
    ];

    return (
        <div
        className={"fixed bg-black flex justify-between items-center gap-15 py-3 px-10 left-1/2 translate-x-[-50%] top-[20%] rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-10 "}
        >

            <ul className={"flex gap-8 text-xl"}>

                {listItems.map((item) => (
                    <li key={item} className={"relative group cursor-pointer"}>
                        {item}
                    </li>
                ))}

            </ul>
            <button className={"bg-gradient-to-r from-blue-100 to-green-300 rounded-3xl shadow-2xl text-black font-semibold ml-4"}> Contact</button>

        </div>
    )
}

export default Navbar;