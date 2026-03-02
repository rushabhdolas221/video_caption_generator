import SparklesIcon from "@/components/SparklesIcon";

export default function DemoSection() {
  return (
    <section className="flex justify-around mt-10 sm:mt-12 items-center">
      
      {/* Without Captions */}
      <div
        data-aos="fade-left"
        className="hidden sm:block bg-gray-300/15 w-[260px] rounded-xl overflow-hidden"
        style={{ border: "15px solid #0d1127" }}
      >
        <video
          src="https://dawid-epic-captions.s3.us-east-1.amazonaws.com/without-captions.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        />
      </div>

      {/* Sparkle Icon */}
      <div className="hidden sm:block">
        <SparklesIcon />
      </div>

      {/* With Captions */}
      <div
        data-aos="fade-right"
        className="bg-gray-300/15 w-[260px] rounded-xl overflow-hidden"
        style={{ border: "15px solid #0d1127" }}
      >
        <video
          src="https://dawid-epic-captions.s3.us-east-1.amazonaws.com/with-captions.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        />
      </div>

    </section>
  );
}