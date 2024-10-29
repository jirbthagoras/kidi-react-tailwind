import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import Navbar from "./Navbar.jsx";

export default function App() {
    return (
        <>
            <Navbar/>
            <div className={"min-h-screen min-w-96 relative bg-gradient-to-r from-fuchsia-300 to-pink-300 flex items-center justify-center flex-col text-center gap-10 text-white p-52"}>
                <h1 className={"text-7xl "}>
                    Maaf Mister, saya lupa Screenshot pop up berhasil daftar lombanya :(
                </h1>
            </div>
        </>
    )
}
