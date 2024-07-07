import { delay } from "@/utils/delay";
import React from "react";

const page = async () => {
  await delay(2000);
  return <div>About Page</div>;
};

export default page;
