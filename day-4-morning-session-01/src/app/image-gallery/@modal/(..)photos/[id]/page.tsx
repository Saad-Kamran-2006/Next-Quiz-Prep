import { Photo, photos } from "@/utils/photos";
import Image from "next/image";
import React from "react";

interface Param {
  params: {
    id: string;
  };
}

const page = ({ params }: Param) => {
  // console.log(params.id);
  const images: Photo[] = photos;
  // console.log(images);
  const photo: Photo | undefined = images.find(
    (image: Photo) => image.id === params.id
  );
  // console.log(photo);
  return (
    <div className="fixed z-10 top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-black/[.70]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={photo!.imageSrc}
          alt="Image"
          height={800}
          width={900}
          className="object-contain max-h-[90vh]"
        />
      </div>
    </div>
  );
};

export default page;
