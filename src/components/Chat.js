import image from "../image.jpg"
import Message from "./Message";
import Top from "./Top";
function Chat () {
    return(
        <div className="h-full col-start-6 col-end-25 third-background">
            <Top image={image} name="Salah Eddine Rossi" />
            <div className="chat ">
                <Message time="5:30" type={2} text="holla amigo"/>
                <Message time="5:30" type={1} text="holla amigo gfsd"/>
                <Message time="5:30" type={2} text="holla amigo gfdsg"/>
                <Message time="5:30" type={1} text="holla amigo"/>
                <Message time="5:30" type={1} text="holla amig sdgdso"/>
                <Message time="5:30" type={2} text="holla amiggfsdo"/>
                <Message time="5:30" type={1} text="holla amigfdsgo"/>
                <Message time="5:30" type={2} text="holla amggfsqsigo"/>
                <Message time="5:30" type={2} text="holla amigo"/>
                <Message time="5:30" type={1} text="holla amhghfjkkigo"/>
                <Message time="5:30" type={2} text="holla amixbargqfgo"/>
                <Message time="5:30" type={1} text="holla amihkhgkjggo"/>
                <Message time="5:30" type={1} text="holla amgfjukiigo"/>
            </div>
            <div className="message flex justify-center items-center" >
                <input type="text" className="input-b py-2 px-5 my-3 fontSize-sm rounded outline-none " placeholder="type your message..." />
                <span class="iconify mic mx-5" data-icon="akar-icons:microphone"></span>
                <span class="iconify send" data-icon="fluent:send-16-filled"></span>

            </div>
        </div>
        
    )
}
export default Chat;