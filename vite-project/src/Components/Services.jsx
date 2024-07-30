const Services = (props) => {
    return (
        <div>
            <img className="flex items-center w-54 h-54" src = {`./${props.img}`}/> 
            <h2 className="mr-32 mt-5 mb-5 text-xl font-medium">{props.title}</h2>
            <p className="w-80 text-center">{props.content}</p>
        </div>
    )
}

export default Services