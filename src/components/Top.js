function Top(props) {
    return(
        <div className="flex justify-between bg-neutral-200 top">
            <div className="flex ">
                <img src={props.image} className="image-b my-5 ml-6 mr-3" />
                <div className="mt-5">
                    <h3 className="ml-2 name-b">{props.name}</h3>
                    <p className="text-left ml-2 active">active</p>
                </div>
            </div>
            <div className="flex items-center mr-8">
                <span className="iconify call mr-5" data-icon="bx:bxs-phone-call"></span>
                <span className="iconify video-call mr-5 " data-icon="wpf:video-call"></span>
            </div>
        </div>
        
    )
}
export default Top;