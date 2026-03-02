import React from "react";
import UploadIcon from "./UploadIcon";
import SparklesIcon from "./SparklesIcon";
import Image from "next/image";

const HomePageContent = () => {
  return (
    <div className="home-page">

      <div>
        <h1 className="mt-10 sm:mt-24 text-2xl sm:text-4xl font-semibold">
          How to Auto Generate Captions
        </h1>
        <h3 className="mt-8 text-l font-light">
          In just three simple steps
        </h3>
      </div>

      <div className="relative mt-12 lg:mt-20">
        <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">

          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow">
              <span className="text-xl font-semibold">1</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold flex items-center gap-4 justify-center">
              <UploadIcon /> Upload Video
            </h3>
            <p className="mt-4 text-base text-white/70">
              Upload your video and let the system process it automatically.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow">
              <span className="text-xl font-semibold">2</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold flex items-center gap-4 justify-center">
              <SparklesIcon /> Apply Captions
            </h3>
            <p className="mt-4 text-base text-white/70">
              Click “Apply Captions” and generate subtitles instantly.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow">
              <span className="text-xl font-semibold">3</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold flex items-center gap-4 justify-center">
              <Image src="/download.png" height={25} width={25} alt="download"/> 
              Edit & Download
            </h3>
            <p className="mt-4 text-base text-white/70">
              Customize your captions and download your final video.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HomePageContent;