import React from "react";
import { ITour } from "./App";
import { Tour } from "./Tour";
const TourList: React.FC<{
    tours: ITour[];
}> = ({ tours }) => {
    return (
        <div className="tour-list">
            {tours.map((tour) => (
                <Tour key={tour.id} {...tour}></Tour>
            ))}
        </div>
    );
};

export { TourList };
