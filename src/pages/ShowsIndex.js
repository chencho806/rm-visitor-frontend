
import { Link } from 'react-router-dom'




const ShowsIndex = (props) => {

    

    

    const loaded = () => {
        return props.shows.map(shows => (
            <table>
                <tbody>
            <tr key={shows._id} className="showList">
                <td>
                    <h3>{shows.date}</h3>
                </td>
                
                <td>
                    <h3>{shows.venue}</h3>
                </td>
                <td>
                <Link className="Details" to={`/shows/${shows._id}`}>
                    <button>Details</button>
                </Link>
                </td>
            </tr>
            </tbody>
            </table>
        )).sort().reverse();
    }
        
            

                
                    

    const loading = () => <h1>Loading ...</h1>;

    


    

   

    return(
        <>
        <div>
            <img src="https://i.imgur.com/izHJcF7.jpg?1" alt="" className="showListImage"/>
        </div>
            
                
        <section>
            
                
            { props.shows ? loaded() : loading() }
        </section>
        </>
    )
};


export default ShowsIndex;
