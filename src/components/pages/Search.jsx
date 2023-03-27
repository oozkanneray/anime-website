import React from "react";
import useSWR from "swr"
import Test from "../Test";


const fetcher = (url) => fetch(url).then((res) => res.json());

function Search() {
        const { data, error, isLoading } = useSWR(
            "https://api.jikan.moe/v4/anime?q=chainsaw%20man",
            fetcher,
            {
                revalidateOnMount:true
            }
        ); 
    
        function handleClick() {
            revalidate();
        }
    
        if (error) return "An error has occurred.";
        if (isLoading) return "Loading...";
        return ( 
            <div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-row m-10">
                        <input className="border-2 border-black m-2 rounded-lg text-2xl pl-3"></input>
                        <button className="w-28 h-12 border-4 m-2 border-black bg-white text-black text-2xl rounded-lg hover:bg-navbarColor hover:text-white">Search</button>
                    </div>
                </div>


                Search Component
                {data.data.map(item => <Test key={item.key} item={item}/>)}
                <button onClick={handleClick}>Refresh</button>
            </div>
         );
}

export default Search;