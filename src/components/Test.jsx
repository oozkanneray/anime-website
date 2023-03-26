function Test(props) {
    return (  
        <div>
            <div>{props.item.title}</div>
            <img src={props.item.images.jpg.image_url}></img>
        </div>
    );
}

export default Test;