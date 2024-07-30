const Features = (props) => {
    return (
        <div>
            
            <div className="">
                <img src={`./${props.img}`}></img>
                <h2 className="mr-12 font-medium text-2xl mb-12">{props.title}</h2>
                <p className="w-72 text-left">{props.paragraph}</p>
            </div>

        </div>
    )
}
export default Features