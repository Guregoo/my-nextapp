import ProfileCard from "@/components/ProfileCard";
import Head from "next/head";

export default function About(){
  return(
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div className="flex flex-col justify-center text-center p-5">
        <ProfileCard />
        <p className="p-4">Tak kenal maka tak sayang, maka dari itu Perkenalkan saya Gregorius Jovi, saya berasal dari kota Manado <br /> Saya seorang Mahasiswa <b>Prodi Teknik Informatika</b>, dalam dunia pemrograman saya masih seorang pemula.<br />Dunia pemrograman sangatlah luas karena rasa penasaran lah yang membuat saya mempelajari sesuatu</p>
      </div>
    </div>
  )
}