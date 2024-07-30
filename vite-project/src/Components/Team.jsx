const Team = (props) => {
    return (
        <div>
            <img src={props.img}/>
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
        </div>

    )

}

export default Team 