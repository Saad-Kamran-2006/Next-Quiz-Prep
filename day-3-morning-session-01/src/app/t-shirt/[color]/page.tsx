import React from "react";

interface Param {
  params: {
      color: string;
  };
}

const page = ({ params }: Param) => {
    // console.log(params.color)
  return <div>{params.color} Shirts</div>;
};

export default page;
