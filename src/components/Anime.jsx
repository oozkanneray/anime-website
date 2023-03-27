function Anime(props) {
    return (  
        <div className="flex flex-col">
            <div className="flex">
                <img className="object-cover" src={props.item.images.jpg.image_url}></img>
                <div className="flex flex-col m-5">
                    <div>{props.item.title}</div>
                    <div className="w-5/6">{props.item.synopsis}</div>
                    <div className="w-5/6">{props.item.score}</div>
                </div>

            </div>
        </div>
    );
}

export default Anime;