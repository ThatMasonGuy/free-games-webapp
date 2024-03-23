import React from 'react'
import ModeToggle from '@/components/ui/mode-toggle'

const Test = () => {
    return (
        <div className="flex flex-row" id="layout">
            <div className="absolute sm:relative transition duration-200 transform sm:translate-x-0 sidebar z-20 w-1/2 md:w-1/4 lg:w-1/6 bg-blue-primary h-screen sm:flex flex-col" id="navContainer">
                <div className="relative flex flex-row justify-center items-center mt-4">
                    <button id="btnContainerInside" className="sm:hidden focus:outline-none absolute top-0 right-0 -mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-justify h-4 w-4 text-white" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                    <p className="text-white font-semibold tracking-tighter text-2xl">&nbsp;Components</p>
                    <div className="absolute h-4 bg-blue-500 opacity-75 w-1/2 md:w-1/2 mx-auto -bottom-0.5 rounded-sm z-0"></div>
                </div>
                <div className="nav-items flex flex-col mt-14 mx-2 space-y-4">
                    <div className="single-nav-item flex flex-row items-center space-x-2 bg-blue-600 shadow-lg transition duration-200 hover:cursor-pointer px-4 rounded-md py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill text-white" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                        </svg>
                        <p className="text-white">Home</p>
                    </div>
                    <div className="single-nav-item flex flex-row items-center space-x-2 hover:bg-blue-600 hover:shadow-lg transition duration-200 hover:cursor-pointer px-4 rounded-md py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-text text-white" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                            <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <p className="text-white">About</p>
                    </div>
                    <div className="single-nav-item flex flex-row items-center space-x-2 hover:bg-blue-600 hover:shadow-lg transition duration-200 hover:cursor-pointer px-4 rounded-md py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-image text-white" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                        </svg>
                        <p className="text-white">Components</p>
                    </div>
                    <div className="single-nav-item flex flex-row items-center space-x-2 hover:bg-blue-600 hover:shadow-lg transition duration-200 hover:cursor-pointer px-4 rounded-md py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill text-white" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                        <p className="text-white">Settings</p>
                    </div>
                    <div className="single-nav-item flex flex-row items-center space-x-2 hover:bg-blue-600 hover:shadow-lg transition duration-200 hover:cursor-pointer px-4 rounded-md py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key-fill text-white" viewBox="0 0 16 16">
                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <p className="text-white">Admin Area</p>
                    </div>
                </div>
            </div>
            <div className="main-container w-full sm:w-3/4 lg:w-5/6" id="mainContainer">
                <header className="flex flex-row items-center justify-between py-4 shadow px-4">
                    <button id="btnContainer" className="focus:outline-none sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-justify h-6 w-6 text-gray-500" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                    <div className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-black mx-2" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <input type="text" placeholder="Search Components" className="focus:outline-none" />
                    </div>
                    <div><img src="https://i.pravatar.cc/150?img=3" className="h-10 w-10 rounded-full" /></div>
                    <ModeToggle />
                </header>
                <main className="mx-6">
                    <h1 className="font-semibold text-xl my-8">Browse all Components</h1>
                    <div className="h-96 border-2 border-dashed rounded-md"></div>
                </main>
            </div>
        </div>
    );
};

export default Test;