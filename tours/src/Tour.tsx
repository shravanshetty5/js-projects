import React, { useCallback, useContext, useState } from "react";
import { AppContext, ITour } from "./App";
const Tour: React.FC<ITour> = ({ id, image, info, name, price }) => {
    const [readMore, setReadMore] = useState(false);
    const setTour = useContext(AppContext) as React.Dispatch<
        React.SetStateAction<ITour[]>
    >;

    const removeTour = useCallback(
        (id: string) => {
            setTour((tours) => {
                const index = tours.findIndex((tour) => tour.id === id);
                if (index < 0) return tours;
                tours.splice(index, 1);
                return [...tours];
            });
        },
        [setTour]
    );

    return (
        <article className="tour">
            <div className="img">
                <img src={image} alt={name} />
            </div>
            <footer>
                <div className="header">
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "show less" : "  read more"}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>
                    not interested
                </button>
            </footer>
        </article>
    );
};

export { Tour };
