import styles from './card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function Card({venueName,imgSrc,venueDes} : {venueName:string, imgSrc:string,venueDes:string}){    
    return(
        <InteractiveCard contentName={venueName}>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt ='Product Picture'
                fill
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className={styles.cardText}>
                    <h1 className='text-3xl font-bold text-blue-500'>{venueName}</h1>
                    <h3 className='text-xl '>{venueDes}</h3>
            </div>
        </InteractiveCard>
    );
}