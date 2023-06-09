import React, { useEffect, useState } from "react";
import useSWR from "swr"
import Anime from "../Anime";
import SearchBar from "../SearchBar";


const fetcher = (url) => fetch(url).then((res) => res.json());

function Search() {

        const [message,setMessage] = useState("")
        const [link,setLink] = useState(message)

            let { data, error, isLoading } = useSWR(
                `https://api.jikan.moe/v4/anime?q=${link}`,
                fetcher,
                {
                    revalidateOnMount:true
                }
            );


        useEffect(()=>{
            setAPI()
        },[message])
    
        function handleClick() {
            revalidate();
        }

        function inputHandler(event){
            setMessage(event.target.value)
            setAPI()
        }

        function setAPI(){
            let defarr = message.split(" ")
            let arr2 = defarr.join("%20")
            return arr2
        }

    
        if (error) return "An error has occurred.";
        if (isLoading) return <SearchBar/>;
        return ( 
            <div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-row m-10">
                        <input
                        onChange={inputHandler}
                        placeholder="Type a Anime!"
                        className="border-2 border-black m-2 rounded-lg text-2xl pl-3"
                        onKeyDown={(e) => {
                            if(e.key == "Enter") setLink(setAPI())
                        }}
                        />
                        <button 
                        onClick={() => {setLink(setAPI())}}

                        className="w-28 h-12 border-4 m-2 border-black bg-white text-black text-2xl rounded-lg hover:bg-navbarColor hover:text-white">Search</button>
                    </div>
                </div>
                {data.data.map(item => <Anime key={item.key} item={item}/>)}
                {handleClick}
            </div>
         );
}

export default Search;