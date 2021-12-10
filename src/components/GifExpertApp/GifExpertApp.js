import React, { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [ categories, setCategories ] = useState( defaultCategories );

    return (
        <div className="mt2">
            <h2 className="title animate__animated animate__rubberBand">GifExpertApp</h2>
            <CategoryAdd
                categories={ categories } 
                setCategories={ setCategories }
            />
            <hr />

            <ol>
                {
                    categories.map( category =>
                        <GifGrid
                            key={ category } 
                            category={ category }
                            categories={ categories }
                            setCategories={ setCategories }
                        />
                    )
                }
            </ol>
        </div>
    );
};

export default GifExpertApp;