import React from "react";
import useSWR from "swr";
import Anime from "../Anime";
import Random from "../Random";


const fetcher = (url) => fetch(url).then((res) => res.json());


function Home() {

    
    let { data, error, isLoading } = useSWR(
        `https://api.jikan.moe/v4/random/anime`,
        fetcher,
        {
            revalidateOnMount:true
        }
    );

    function handle() {
        revalidate();
    }
    if (error) return "An error has occurred.";
    if (isLoading) return "Loading";
    return(
        <div>

            <Random 
            image={data.data.images.jpg.image_url}
            title={data.data.title}
            score={data.data.score}
            synopsis={data.data.synopsis}
            />
            {handle}
        </div>
    )
}

export default Home;