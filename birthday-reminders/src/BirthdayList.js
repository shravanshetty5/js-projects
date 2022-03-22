import { useState } from "react";
import { Birthday } from "./Birthday";
import data from "./data";
import "./BirthdayList.css";
function BirthdayList(params) {
    const [birthdays, setBirthdays] = useState(data);
    return (
        <section className="birthdays-container">
            <h2 className="list-title">{birthdays.length} birthdays today</h2>
            <div className="birthday-list">
                {birthdays.map((birthday) => (
                    <Birthday {...birthday} key={birthday.id}></Birthday>
                ))}
            </div>
            <button
                className="btn"
                onClick={(ev) => {
                    ev.preventDefault();
                    birthdays.length ? setBirthdays([]) : setBirthdays(data);
                }}
            >
                {birthdays.length ? "Clear All" : "Fetch Birthdays"}
            </button>
        </section>
    );
}

export { BirthdayList };
