const Services = (props) => {
    return (
        <div>
            <img className="flex items-center" src = {`./${props.img}`}/> 
            <h2 className="mr-32">{props.title}</h2>
            <p className="w-80 text-center">{props.content}</p>
        </div>
    )
}

export default Services