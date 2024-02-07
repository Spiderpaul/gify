import { useState } from "react";
import { AddCategory, GridGif } from "./Components";

export const Gify = () => {

    const [categories, setcategories] = useState([]);
    
    const onAddCategory = (newCategory) => {
        let value = newCategory.toUpperCase();
        if (categories.includes(value)) {
            let index = categories.findIndex(categorie => categorie === value);
            categories.splice(index, 1);
            setcategories([ value, ...categories ]);
            return;    
        }
        // setcategories( cat => [...cat, 'Valorant']);
        setcategories([ value, ...categories ]);
    };
    
    return (
        <>
            <div className="container">
                <h2>Gify</h2>

                <AddCategory onNewCategory={ value => onAddCategory(value) }/>

                {categories.map( (category ) => <GridGif key={ category } category={ category }/> )}
            </div>
        </>
    )
};