import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <main className="container grid text-white min-h-[calc(100vh-72px)] grid-cols-1 justify-between pb-24 md:h-auto md:grid-cols-[1fr_1fr] md:items-center w-full">
        <img className="w-auto" src="/dksh.webp" alt="" />
        <div className="font-display mx-10">
          <h1>"단대소고는 혁신입니다"</h1>
          <div>어떤 학우분께서 해주신 말씀입니다</div>
        </div>
        <div className=" -z-10  absolute inset-0">
          <Image
            src="/dksh.webp"
            fill
            alt=""
            className=" object-cover object-center "
          />
          <div className="bg-black/30 absolute inset-0 z-0"></div>
        </div>
      </main>
    </div>
  );
};

export default about;
