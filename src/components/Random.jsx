function Random(props) {
    return ( 
        <div className="flex flex-col">
            <div className="flex justify-center mt-20 text-3xl text-cyan-700 mb-6">There is your random Anime</div>
        <div className="flex border-1 border-4 border-cyan-700 rounded-lg p-5 m-20">
            <img className="object-cover flex items-center justify-center relative rounded-lg" src={props.image}></img>
            <div className="flex flex-col m-5 w-[250%]">
                <div className="text-3xl text-cyan-700 mb-6">{props.title}</div>
                <div className="w-5/6 text-lg">{props.synopsis}</div>
                <div className="w-5/6 text-cyan-700 text-2xl mt-10 font-bold">Score: {props.score}</div>
            </div>
            <div className=" flex flex-col justify-center items-center w-[40%] ">
                <button className="text-cyan-700 text-xl font-bold relative right-[50%] m-4 ">+ Add Favorites</button>
                <button className="text-cyan-700 text-xl font-bold relative right-[50%] m-4">+ Vote It</button>
            </div>
        </div>
    </div>
     );
}

export default Random;