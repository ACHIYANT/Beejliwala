import React from "react";
import Header from "./Header";
const HeroSection = () => {
  return (
    <div
      className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 rounded-xl"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://cdn.usegalileo.ai/stability/907bf500-1656-430c-87dc-080ab08069a4.png')",
      }}
    >
      <div className="flex flex-col gap-2 text-left">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
          Completed Projects
        </h1>
        <h2 className="text-white text-sm font-normal leading-normal">
          Some of our most recent and exciting projects. We are proud to
          showcase our work and demonstrate our commitment to excellence.
        </h2>
      </div>
    </div>
  );
};

const ImageGrid = ({ title, images }) => {
  return (
    <div className="p-4">
      <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Test = () => {
  const residentialImages = [
    "https://cdn.usegalileo.ai/stability/de446294-7e29-433e-8882-fb24aae7c3d3.png",
    "https://cdn.usegalileo.ai/stability/a88e5a37-32b7-4fe7-9c1e-6527f2ae6e82.png",
    "https://cdn.usegalileo.ai/stability/3e9bccaa-7c08-4191-845e-d7c48e6f5147.png",
  ];

  const commercialImages = [
    "https://cdn.usegalileo.ai/sdxl10/8dec65e9-bb78-482b-bc8b-7416a89fd8ec.png",
    "https://cdn.usegalileo.ai/sdxl10/b47bfbd1-b34f-45ee-98f3-f973945653a6.png",
    "https://cdn.usegalileo.ai/sdxl10/86fce587-8a95-4811-88db-c5ed211f80f7.png",
  ];

  const industrialImages = [
    "https://cdn.usegalileo.ai/sdxl10/62636fa0-b250-4ca8-96e9-04b167002704.png",
    "https://cdn.usegalileo.ai/sdxl10/a0156cf6-570b-4600-9ff9-766de7290ef6.png",
    "https://cdn.usegalileo.ai/sdxl10/cd360c3c-223d-44af-a6ca-c538014753d8.png",
  ];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <HeroSection />
            <ImageGrid title="Residential" images={residentialImages} />
            <ImageGrid title="Commercial" images={commercialImages} />
            <ImageGrid title="Industrial" images={industrialImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
