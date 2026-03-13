'use client' 
import styles from './card.module.css'
import Image from 'next/image'


export default function Card({children,contentName} : {children:React.ReactNode, contentName:string}){
    
    function onVenueSelected(){
        alert("Card "+ contentName +" is Clicked");
    }
    function onCardMouseAction(event:React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('bg-neutral-200')
            event.currentTarget.classList.add('shadow-2xl')
        }
        else{
            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('bg-white')
            event.currentTarget.classList.add('shadow-lg')
        }
    }
    
    return(
        <div className="w-1/5 h-[450px] bg-white rounded-lg  pt-2.5 m-5 object-cover
                        shadow-lg 
                        transition-all duration-300 "
                        
        onClick={()=>onVenueSelected()}
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
    );
}