import "./Birthday.css";
function Birthday(params) {
    return (
        <article className="birthday-wrapper">
            <img className="img" src={params.image} alt={`${params.name}'s`} />
            <div className="name">
                <strong>{params.name}</strong>
            </div>
            <div className="age">{params.age} years</div>
        </article>
    );
}

export { Birthday };
