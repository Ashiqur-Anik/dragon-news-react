/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div>
            <h1 className="text-xl font-semibold">All Caterogy</h1>
            {
                categories.map(category => <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="block text-xl ml-5 pt-5"
                >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;