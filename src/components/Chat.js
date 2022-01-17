import image from "../image.jpg"
import { useParams  } from "react-router";
import Message from "./Message";
import { useState,useEffect } from "react";

import Top from "./Top";
function Chat () {
    const id = useParams().id;

    const [messages, setMessages] = useState();
    const url = "http://localhost:8000/accounts/";
    useEffect(() => {
        fetch(url+id).then(res => res.json()).then(data => setMessages(data));
    }, [id])
    
    return(
        <div className="h-full col-start-6 col-end-25 third-background">
            <Top image={image} name="Salah Eddine Rossi" />
            <div className="chat ">
                {messages && messages.messages.map(message => <Message key={message.id} text={message.text} time={message.time} type={message.type}/>)}
            </div>
            <div className="message flex justify-center items-center" >
                <input type="text" className="input-b py-2 px-5 my-3 fontSize-sm rounded outline-none " placeholder="type your message..." />
                <span className="iconify mic mx-5" data-icon="akar-icons:microphone"></span>
                <span className="iconify send" data-icon="fluent:send-16-filled"></span>

            </div>
        </div>
        
    )
}
export default Chat;