import React from 'react';
import './grid.css';

export const Grid = () => {
    return (
        <>
            <h1>Grid</h1>
            <div className="main-content">
                {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) =>
                    (
                        <section className={`item item-${index}`} key={index}>
                            <h2>Title {index + 1}</h2>
                            <img src="https://via.placeholder.com/468x120/000000/FFFFFF/?text=image-example" alt="placeholder image" />
                            <p>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quam sint molestias
                                tempore, saepe sunt beatae quod expedita
                                a? Fuga vero beatae dolores facilis quisquam
                                provident quis veniam voluptates pariatur fugit?
                            </p>
                        </section>
                    )
                    )
                }
            </div>
        </>
    )
}

