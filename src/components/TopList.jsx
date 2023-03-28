function TopList(props) {
    return ( 
    <div className="flex flex-col">
        <div className="flex border-1 border-4 border-cyan-700 rounded-lg p-5 m-20">
            <div className="flex items-center justify-center text-6xl text-cyan-700 w-1 m-12">{props.item.rank}</div>
            <img className="object-cover flex items-center justify-center relative " src={props.item.images.jpg.image_url}></img>
            <div className="flex flex-col m-5 w-[250%]">
                <div className="text-3xl text-cyan-700 mb-6">{props.item.title}</div>
                <div className="w-5/6 text-lg">{props.item.synopsis}</div>
                <div className="w-5/6 text-cyan-700 text-2xl mt-10 font-bold">Score: {props.item.score}</div>
            </div>
            <div className=" flex flex-col justify-center items-center w-[40%] ">
                <button className="text-cyan-700 text-xl font-bold relative right-[50%] m-4 ">+ Add Favorites</button>
                <button className="text-cyan-700 text-xl font-bold relative right-[50%] m-4">+ Vote It</button>
            </div>
        </div>
    </div>
     );
}

export default TopList;