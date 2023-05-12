import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { images } from "~/mocks/data";

const ImageView = () => {

  const { query } = useRouter();

  const details = images.find((item: { id: number }) => item.id === Number(query.id))

  if (!details) return <div className="flex flex-row items-center w-full h-screen">Loading...</div>;

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col items-center w-full max-w-5xl space-y-5">
        <Image
          src={details.src}
          blurDataURL={details.src}
          width={1000}
          height={1000}
          className="w-full h-[20rem] object-cover rounded-b-xl bg-neutral-200"
          quality={100}
          alt={details.caption}
          placeholder="blur"
        />
        <div className="flex flex-col items-center w-full space-y-2">
          <h3 className="font-bold text-2xl">{details.caption}</h3>
          <Link
            className="px-3 py-1 rounded-md text-white bg-orange-600 bg-opacity-80 transition ease-in-out duration-200 hover:bg-opacity-50"
            href="/"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
