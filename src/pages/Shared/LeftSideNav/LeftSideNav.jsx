import { useEffect, useState } from "react";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1 className="text-2xl font-medium">All Caterogy</h1>
            <div>
                {categories.map((category) => (
                    <p key={category.id}>
                        {category.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default LeftSideNav;