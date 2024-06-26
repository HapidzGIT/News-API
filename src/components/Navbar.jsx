import { useEffect } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {

    useEffect(() => {
        const header = document.querySelector('header')
        const fixed = header.offsetTop
       window.onscroll = () => {
        if(window.pageYOffset > fixed) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky')
        }
       }
    })
 return (
    <div>
        <header className="container ">
            <div className="px-4 w-full flex items-center justify-between py-7">
                <div >
                    <Link to='/' className="text-xl font-semibold">Hafidz News</Link>
                </div>
                <nav className="text-xl font-semibold">
                    <ul className="flex gap-x-4">
                        <li>
                            <Link className="font-bold" to="/">News</Link>
                            </li>
                        <li>
                            <Link to="/Popular" className="font-bold">Popular</Link>
                            </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
 )
}