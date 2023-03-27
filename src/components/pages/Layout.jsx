import { Link,Outlet } from "react-router-dom";
import { useState } from "react";

function Layout() {

    const [active,setActive] = useState(1)

    let isActive = "w-38 border-4 border-white p-4 rounded-2xl";
    let isNotActive = "transition-all w-38 p-4 border-4 border-transparent hover:border-2 hover:border-white hover:rounded-2xl"


    return ( 

        <div>
            <nav className=" flex w-100 bg-navbarColor text-white text-2xl p-5 text-center"> 
                <ul className="relative left-[20%] flex w-[30%] h-16 justify-between items-center list-none">
                    <Link to="/">
                        <li 
                        onClick={() => {setActive(1)}}
                        className={active == 1 ? isActive : isNotActive}>Home</li>
                    </Link>
                    <Link to="/top-anime">
                        <li 
                        onClick={() => {setActive(2)}}
                        className={active == 2 ? isActive : isNotActive}>Top Anime</li>
                    </Link>
                    <Link to="/search">
                        <li                         
                        onClick={() => {setActive(3)}}
                        className={active == 3 ? isActive : isNotActive }>Search Bar</li>
                    </Link>
                </ul>
            </nav>
            <Outlet/>
        </div>
     );
}

export default Layout;