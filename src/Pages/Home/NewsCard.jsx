import { Link } from "react-router-dom";
import { FaEye, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const NewsCard = (news) => {

    const { title, image_url, details, _id, author, rating, total_view } = news.children;


    return (
        <div className="card card-compact 
         shadow-xl">

            <div className="card-body mt-3">
                <div className="flex gap-2 mb-2">
                    <img className="w-14 rounded-full" src={author.img} alt="" />
                    <div>
                        <p className="text-lg font-semibold">{author.name}</p>
                        <p className="text-base">{author.published_date}</p>
                    </div>
                </div>
                <h2 className="card-title">{title}</h2>
                <img src={image_url} alt="Shoes" />
                <p className="text-base">
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200)}
                                <Link
                                    to={`/news/${_id}`}
                                    className="text-cyan-600 font-bold text-lg"> Read more....
                                </Link>
                            </p> :
                            <p>details</p>
                    }
                </p>
                <hr />
                <div className="flex mx-1 md:mx-5 text-lg font-semibold justify-between">
                    <div className="flex items-center gap-2 ">
                        <div className="text-rose-500 flex gap-1">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStarHalfAlt></FaStarHalfAlt>
                        </div>
                        <p>{rating.number}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEye></FaEye>
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;