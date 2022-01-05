function PersoneLink(props) {
    return(
        <div className="flex ">
            <div><img src={props.image} className="image" /></div>
            <h3 className="ml-2 name">{props.name}</h3>
        </div>
    )
}
export default PersoneLink