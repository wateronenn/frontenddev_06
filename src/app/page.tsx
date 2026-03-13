import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner/>
        <div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
        <Card venueName="Spark Space" imgSrc = "/img/ConcertHall.jpg" venueDes="conference hall for concert, show and musical entertainment" />
        <Card venueName="The Grand Table" imgSrc = "/img/DinnerMate.jpg" venueDes="restaurant venue for big group dinner" />
        <Card venueName="The Bloom Pavilion" imgSrc = "/img/RomacePavilion.jpg" venueDes="wedding hall with antique style of decoration" />
        </div>
        
      </main>
      
    </div>
  );
}