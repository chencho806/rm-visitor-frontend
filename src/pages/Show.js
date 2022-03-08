

const Show =(props) => {
    const id = props.match.params.id;
    const shows = props.shows;
    const show = shows.find(s => s._id === id);

    
    
    return(
        <div className="show">
            <body>
                
            <img src={show?.img} alt={show?.date} className="flyerImage"/>
            <h1>{show?.date}</h1>
            <h3>{show?.venue}</h3>
            <h3>{show?.info}</h3>
            </body>
            
        </div>
        
    )

};


export default Show;