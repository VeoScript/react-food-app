import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { images } from '~/mocks/data';

const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handlePrevClick = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col items-center w-full h-full space-y-5">
        <div className="relative flex w-full">
          <Image
            src={currentImage.src}
            blurDataURL={currentImage.src}
            width={1000}
            height={1000}
            className="w-full h-[30rem] object-cover bg-neutral-200"
            quality={100}
            alt={currentImage.caption}
            placeholder="blur"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full space-y-5">
            <p className="font-bold text-3xl p-3 rounded-md bg-white bg-opacity-50">{currentImage.caption}</p>
            <div className="flex flex-row items-center justify-center w-full space-x-1">
              <button
                className="px-3 py-1 rounded-md text-white bg-black bg-opacity-80 transition ease-in-out duration-200 hover:bg-opacity-50"
                onClick={handlePrevClick}
              >
                Prev
              </button>
              <Link
                className="px-3 py-1 rounded-md text-white bg-orange-600 bg-opacity-80 transition ease-in-out duration-200 hover:bg-opacity-50"
                href={`/${currentImage.id}`}
              >
                View
              </Link>
              <button
                className="px-3 py-1 rounded-md text-white bg-black bg-opacity-80 transition ease-in-out duration-200 hover:bg-opacity-50"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full space-y-2">
          <h3 className="font-bold text-xl">Jerome Villrauel (VEOSCRIPT)</h3>
          <Link
            className="px-3 py-1 rounded-md text-white bg-orange-600 bg-opacity-80 transition ease-in-out duration-200 hover:bg-opacity-50"
            href="https://github.com/veoscript"
            target='_blank'
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
