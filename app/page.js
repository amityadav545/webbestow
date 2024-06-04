import Image from "next/image";
import Herosection from "./Components/Herosection";
import Overlay from "./Components/Overlay";

export default function Home() {
  return (
   <>
   <div className=" h-screen w-screen">
  <Herosection/>
  <Overlay/>
  </div>
   </>
  );
}
