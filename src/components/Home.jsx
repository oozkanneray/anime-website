import React from "react";
import useSWR from "swr"
import Test from "./Test";

const fetcher = (url) => fetch(url).then((res) => res.json());


function Home() {


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
            Home Component
            {data.data.map(item => <Test key={item.key} item={item}/>)}
            <button onClick={handleClick}>Refresh</button>
        </div>
     );
}

export default Home;