import PersoneLink from "./PersoneLink";
import image from "../image.jpg"

function Contact() {
    return(
        <div className="col-span-4 bg-white">
            <div className="w-4/5 m-auto text-left mt-7 text-xl	font-medium ">
                <h1 className="font-color font-semibold">Chats</h1>
                <input type="text" className="input py-2 px-5 mt-6 fontSize-sm rounded outline-none w-max w-full" placeholder="Search here.." />
                <h2 className="mt-6 fav mb-5">FAVOURITES</h2>
                <PersoneLink name="salah eddine rossi" image={image}/>
            </div>
        </div>
    )
}
export default Contact;