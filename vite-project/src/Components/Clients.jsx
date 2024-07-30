const Clients = (props) => {
    return (
        <section>
           
        <div className="" >
            
            <div className="flex ">
                <img src={props.img} className="rounded-full h-20"/>
                <div>
                <p>{props.title}</p>
                <p className="font-bold "> -{props.name}</p>

                </div>
                
            </div>

        </div>
        </section>
        
    )
}

export default Clients