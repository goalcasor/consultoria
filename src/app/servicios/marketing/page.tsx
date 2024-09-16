'use client'

import Image from "next/image";
import { useParams } from "next/navigation";

function MarketingPage() {

    const params = useParams();

    console.log(params)
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1
        >Transforma tu negocio con marketing impulsado por IA</h1>

        <Image
            src="/image/examples/01.webp"
            alt="Marketing IA"
            width={1920}
            height={1080}
        />
    </div>
  )
}

export default MarketingPage
