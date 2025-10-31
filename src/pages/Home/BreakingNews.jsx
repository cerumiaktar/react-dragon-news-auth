import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-rose-700">Breaking News</button>
            <Marquee speed={100}>
                <Link>I can be a React component, multiple React components, or just some text.. </Link>
                <Link className="mx-4">I can be a React component, multiple React components, or just some text..</Link>
                <Link>I can be a React component, multiple React components, or just some text..</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;