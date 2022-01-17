function Message(props) {
    var a =2;
    if (props.type=='sent') {
    return ( 
        <div className="a-message text-right">
            <p className="text-a text-right p-3 mt-5 mr-3 rounded">{props.text}</p>
            <p className="  mt-1 mr-3 text-gray-500 text-sm	">{props.time}</p>
        </div>
            

    )
    }
    if (props.type == "received") {
        return (
            <div className="b-message text-left">
            <p className="text-b text-left  p-3 mt-5 ml-3 rounded">{props.text}</p>
            <p className="  mt-1 ml-3 text-gray-500 text-sm	">{props.time}</p>
            </div>
        )
    }
}
export default Message;