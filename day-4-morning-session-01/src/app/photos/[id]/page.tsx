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
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center items-center max-h-[80vh]">
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
