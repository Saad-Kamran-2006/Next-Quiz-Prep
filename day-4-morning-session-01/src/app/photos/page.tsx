import React from "react";
import { Photo, photos } from "@/utils/photos";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const images: Photo[] = photos;
  // console.log(images)
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-screen w-full grid grid-cols-3 gap-10 p-16">
        {images.map((image: Photo) => (
          <div
            key={image.id}
            className="h-52 w-80 place-self-center"
          >
            <Link href={`/photos/${image.id}`}>
              <Image
                src={image.imageSrc}
                alt="Image"
                height={200}
                width={250}
                className="object-cover min-w-80 max-h-52"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
