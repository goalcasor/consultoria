'use client';

import Image from "next/image";
import { useParams } from "next/navigation";

function RPAPage() {

    const params = useParams();

    console.log(params)

  return (
    <div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1
        >Optimiza tus procesos con soluciones de RPA</h1>

        <Image
            src="/image/examples/03.webp"
            alt="Marketing IA"
            width={1920}
            height={1080}
        />
        
    </div>
  )
}

export default RPAPage
