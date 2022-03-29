import React, { createContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Loading } from "./Loading";
import { TourList } from "./TourList";

const url = "https://course-api.com/react-tours-project";
interface ITour {
    id: string;
    image: string;
    info: string;
    name: string;
    price: string;
}
const AppContext = createContext<
    React.Dispatch<React.SetStateAction<ITour[]>> | undefined
>(undefined);
function App() {
    const [tours, setTours] = useState<ITour[]>([]);
    const [fetching, setFetching] = useState(false);

    const fetchTours = async () => {
        const resp = await fetch(url);
        const data: ITour[] = await resp.json();
        setTours(data);
        setFetching(false);
    };

    useEffect(() => {
        setFetching(true);
        fetchTours();
    }, []);

    return (
        <div className="App">
            {fetching ? (
                <Loading></Loading>
            ) : (
                <AppContext.Provider value={setTours}>
                    <TourList tours={tours} />
                </AppContext.Provider>
            )}
        </div>
    );
}

export { App, AppContext };
export type { ITour };
