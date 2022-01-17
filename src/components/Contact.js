import PersoneLink from "./PersoneLink";
import image from "../image.jpg"
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";


function Contact() {
const id = useParams().id;

    const [messages, setMessages] = useState();
    const url = "http://localhost:8000/"
    useEffect(() => {
        fetch(url + "accounts").then(res => res.json()).then(data => setMessages(data));
       
    }, [id])

    return(
        <div className="col-span-4 bg-white">
            <div className="w-4/5 m-auto text-left mt-7 text-xl	font-medium ">
                <h1 className="font-color font-semibold">Chats</h1>
                <input type="text" className="input py-2 px-5 mt-6 fontSize-sm rounded outline-none w-max w-full" placeholder="Search here.." />
                <h2 className="mt-6 fav mb-5">FAVOURITES</h2>
            </div>
            {messages && messages.map(message =><Link to={'/'+message.id}  > <PersoneLink key={message.id} name={message.name} image={image}/></Link>)}

        </div>
    )
}
export default Contact;
