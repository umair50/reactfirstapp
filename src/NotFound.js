import { Link } from "react-router-dom";

const Notfound = () => {
    return(
        <div className="not-found-page">
            <h2>Loading.....</h2>
            <Link className="link-to" to="/">Back To MainPage</Link>
        </div>


    );
}
export default Notfound;