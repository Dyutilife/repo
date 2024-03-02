import useChat from "../custom hooks/useChat";
import { useSelector } from "react-redux";
import CardContainer from "./CardContainer";
import ShimmerList from "../shimmer/ShimmerList";
import { useState } from "react";

const Chat = () => {
    
    const [search, setSearch] = useState(""); 
    const [mainchatList, setMainchatList] = useState(null); 

    useChat()
    const chatList = useSelector(store => store.astro.chatList)
    if (!chatList) return <ShimmerList/>


    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);
        
       
        const filteredList = chatList.filter(name => name.slug.toLowerCase().includes(searchTerm));
        setMainchatList(filteredList);
      
    };

    const btnCSS = "lg:text-base text-sm border px-2 lg:px-4 py-0.5 lg:py-1.5 border-zinc-600 text-zinc-600 font-normal rounded-full cursor-pointer"

    return (
        <div  className="relative  h-full w-12/12 ">
            <img className="absolute fixed top-0 left-0 -z-40" src="https://www.webstrot.com/html/horoscope/dark_version/images/content/stars.jpg"></img>
           <div className="lg:pt-6 pt-3 px-4 lg:px-20 flex flex-col justify-center  items-start">
            <div className="w-full flex lg:flex-row flex-col justify-between mt-16 items-start lg:items-center">
                <span className="text-2xl lg:text-3xl font-bold">Chat with Astrologers</span>
                <div className="flex py-2 relative items-center">
                    <input 
                        type="text" 
                        placeholder="Search for Astrologers" 
                        value={search} 
                        onChange={handleSearch}
                        className="border w-80 text-base lg:text-lg rounded-full border-gray-400 pl-9  py-0.5  lg:py-1.5 px-2"
                    ></input>
                    <i className="ri-search-line text-gray-400 absolute text-sm lg:text-base left-3"></i>
                </div>
            </div>

                <div className="flex w-full whitespace-nowrap overflow-x-scroll  no-scrollbar justify-start items-center pt-0.5 lg:pt-2 gap-2 lg:gap-4 flex-row">
                    <span className={btnCSS}><i className="ri-filter-2-line pr-1"></i>Filter</span>
                    <button className={btnCSS} onClick={()=>{
                        setMainchatList(chatList)}
                    }>All</button>
                    <button className={btnCSS} onClick={()=>{
                        let top = chatList.filter((top)=> top.rating === 5)
                        setMainchatList(top)
                    }}>Top rated</button>
                    <button className={btnCSS}  onClick={()=>{
                        let off = chatList.filter((off)=> off.isShowOffer === true)
                        setMainchatList(off)
                    }}>Offer</button>
                    <button className={btnCSS}  onClick={()=>{
                        let vedic = chatList.filter((vedic)=> vedic.skill.includes("Vedic"))
                        setMainchatList(vedic)
                    }}>Vedic</button>
                    <button className={btnCSS}  onClick={()=>{
                        let num = chatList.filter((num)=> num.skill.includes("Numerology"))
                        setMainchatList(num)
                    }}>Numerology</button>
                    <button className={btnCSS}  onClick={()=>{
                        let Tarot = chatList.filter((Tarot)=> Tarot.skill.includes("Tarot"))
                        setMainchatList(Tarot)
                    }}>Tarot</button>
                   
                    <button className={btnCSS}  onClick={()=>{
                        let  FaceReading = chatList.filter(( FaceReading)=>  FaceReading.skill.includes(" Face Reading"))
                        setMainchatList(FaceReading)
                    }}> Face Reading</button>
                    <button className={btnCSS}  onClick={()=>{
                        let Vastu = chatList.filter((Vastu)=> Vastu.skill.includes("Vastu"))
                        setMainchatList(Vastu)
                    }}>Vastu</button>
                    <button className={btnCSS}  onClick={()=>{
                        let LifeCoach = chatList.filter((LifeCoach)=> LifeCoach.skill.includes("Life Coach"))
                        setMainchatList(LifeCoach)
                    }}>Life Coach</button>
                     <button className={btnCSS}  onClick={()=>{
                        let Psychologist = chatList.filter((Psychologist)=> Psychologist.skill.includes("Psychologist"))
                        setMainchatList(Psychologist)
                    }}>Psychologist</button>
                     <button className={btnCSS}  onClick={()=>{
                        let Palmistry = chatList.filter((Palmistry)=> Palmistry.skill.includes("Palmistry"))
                        setMainchatList(Palmistry)
                    }}>Palmistry</button>


                    
                </div>
            </div>
           <div >
            <CardContainer list={mainchatList || chatList} />
            </div>
        </div>
    )
}
 export default Chat;