import styles from './banner.module.css'
import Image from "next/image";
export default function Banner (){
    return (
        <div className={styles.banner}>
            <Image src = {'/img/eventBanner.jpg'}
            alt = 'cover'
            fill={true}
            priority
            style={{ objectFit: "contain" ,zIndex: 1 }}
            />
            <div className={styles.bannerText}>
                <h1 className="text-7xl font-bold">where every event finds its venue</h1>
                <h3 className='text-3xl'>Find venues to celebrate your special moments</h3>
            </div>
        </div>

    );
}