import React from 'react'
import phoneLogo from '../assets/phone.png'
import pcLogo from '../assets/pc.png'
import devopsLogo from '../assets/devops.png'

export const HomePage = () => {
    return (
        <>
            <div className="p-2">
                <div className="text-center text-7xl p-3 background rounded">
                    <strong className="background-text text-black">
                        Find your book here
                    </strong>
                </div>

                <div className="block-items -my-12 drop-shadow-md">
                    <div className="block-item flex justify-center items-center rounded bg-yellow-400 hover:bg-yellow-300 h-64 w-56 p-2">
                        <div>
                            <div className="rounded flex justify-center">
                                <img src={pcLogo} alt="pc logo" className="rounded h-32" />
                            </div>
                            <div className="text-center text-xl font-bold mt-4">
                                Web development
                            </div>
                        </div>
                    </div>

                    <div className="block-item flex justify-center items-center rounded bg-yellow-400 hover:bg-yellow-300 h-64 w-56 p-2">
                        <div>
                            <div className="rounded flex justify-center">
                                <img src={phoneLogo} alt="pc logo" className="rounded h-32" />
                            </div>
                            <div className="text-center text-xl font-bold mt-4">
                                Mobile development
                            </div>
                        </div>
                    </div>

                    <div className="block-item flex justify-center items-center rounded bg-yellow-400 hover:bg-yellow-300 h-64 w-56 p-2">
                        <div>
                            <div className="rounded flex justify-center">
                                <img src={devopsLogo} alt="pc logo" className="rounded h-32" />
                            </div>
                            <div className="text-center text-xl font-bold mt-4">
                                DevOps
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-auto p-2 mb-12">
                    <div className="flex justify-center mb-10 mt-10">
                        <label className="relative block w-64">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <i className="fa-solid fa-magnifying-glass text-slate-600/50"></i>
                            </span>
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-md" placeholder="Search for book..." type="text" name="search" />
                        </label>
                    </div>

                    <div className="books-list h-auto">
                        <div className="book-list-row p-1 h-auto flex justify-center flex-wrap">
                            <div className="max-w-md mx-auto bg-white rounded drop-shadow-md overflow-hidden md:w-full md:max-w-2xl mb-4">
                                <div className="md:flex">
                                    <div className="md:shrink-0 p-1">
                                        <img className="h-62 w-full rounded object-cover md:h-full md:w-72" src="https://i.pinimg.com/564x/01/ba/52/01ba5280ed11b9c00fc9a909374401bc.jpg" alt="Man looking at item at a store" />
                                    </div>
                                    <div className="p-8 md:flex md:justify-center w-full">
                                        <div>
                                            <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">Book name</div>
                                            <div className="block mt-1 text-lg leading-tight font-medium text-black">Author name</div>
                                            <div className="mt-4">
                                                <div className="mt-2 text-black">Description</div>
                                                <small className="block mx-2 my-2">
                                                    Country: USA
                                                </small>
                                                <small className="block mx-2 my-2">
                                                    Language: English
                                                </small>
                                                <small className="block mx-2 my-2">
                                                    Pages: 125
                                                </small>
                                                <small className="block mx-2 my-2">
                                                    Year: 2015
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
