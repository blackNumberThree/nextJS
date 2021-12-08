// import Image from "./Image";
import { FC } from "react";
import litleImage from "./foto.png";
import Image from "next/image";
const FourPage: FC = () => {
  return (
    <>
      <video controls>
        <source src="/star.mp4" type="video/mp4" />
      </video>
      <Image src={litleImage} />
      <div>
        <img src={"./1111.jpg"} />
      </div>
    </>
  );
};

export default FourPage;
