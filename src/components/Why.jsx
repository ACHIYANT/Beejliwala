import React from "react";
import Header from "./Header";

function Why() {
  const whyChooseUs = [
    {
      id: 1,
      title: "AutoCAD designs",
      description:
        "Our team of AutoCAD engineers can create detailed electrical designs for new construction and renovation projects. We use the latest software and best practices to develop accurate and efficient electrical plans.",
      image:
        "https://cdn.usegalileo.ai/sdxl10/56853fc9-be8e-4c8b-bf67-8e8810e1e78f.png",
    },
    {
      id: 2,
      title: "Professional electricians",
      description:
        "We employ licensed electricians with extensive experience in commercial and industrial settings. Our team is trained to handle complex electrical systems and ensure that all work meets industry standards and safety regulations.",
      image:
        "https://cdn.usegalileo.ai/stability/43eb5bad-478d-4f68-b060-15941ca1611a.png",
    },
    {
      id: 3,
      title: "Quality assurance",
      description:
        "The Beejliwala provides comprehensive electrical inspection services to verify the performance and safety of your electrical systems. Our inspectors are trained to identify potential issues and provide recommendations for improving system reliability and efficiency.",
      image:
        "https://cdn.usegalileo.ai/sdxl10/f1742831-9102-4613-84ed-2af46a6dd844.png",
    },
  ];
  const services = [
    {
      id: 1,
      title: "Electrical design",
      description:
        "AutoCAD electrical plans for new construction and renovation projects",
    },
    {
      id: 2,
      title: "Lighting installation",
      description:
        "Interior and exterior lighting installation for commercial and industrial buildings",
    },
    {
      id: 3,
      title: "Power distribution",
      description:
        "Design and installation of power distribution systems for equipment and machinery",
    },
    {
      id: 4,
      title: "Control systems",
      description:
        "Custom control systems for HVAC, lighting, and other building systems",
    },
    {
      id: 5,
      title: "Energy management",
      description:
        "Energy-efficient solutions to reduce electricity costs and environmental impact",
    },
    {
      id: 6,
      title: "Fire alarm systems",
      description:
        "Fire alarm system design, installation, and testing to meet safety code requirements",
    },
    {
      id: 7,
      title: "Security systems",
      description:
        "Security system installation for intrusion detection, access control, and surveillance",
    },
    {
      id: 8,
      title: "Emergency repairs",
      description:
        "24/7 emergency electrical repairs for power outages, equipment failures, and safety hazards",
    },
  ];
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <Header />
      <div className="layout-container flex h-full grow flex-col px-4 sm:px-10 md:px-20 lg:px-40">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl sm:gap-8 sm:rounded-xl items-start justify-end px-4 pb-10 md:px-10 sm:px-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/c8ef7bdf-2e03-43f8-b82b-c78dbd9bd2f8.png")`,
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-3xl sm:text-4xl font-black leading-tight">
                      Professional electrical work for construction sites
                    </h1>
                    <h2 className="text-white text-sm sm:text-base font-normal leading-normal">
                      The Beejliwala is a professional electrical company that
                      provides high-quality electrical services...
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#0d7cf2] text-white text-sm sm:text-base font-bold">
                    <span className="truncate">Get started</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 px-4 md:gap-8 lg:gap-10 py-10 md:py-8 lg:py-10">
              <h1 className="text-[#111418] text-xl md:text-2xl lg:text-3xl font-bold max-w-[720px]">
                Why choose The Beejliwala?
              </h1>
              <p className="text-[#111418] text-sm md:text-base max-w-[720px]">
                We are committed to delivering exceptional service and results
                on every project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {whyChooseUs.map((_, index) => (
                  <div key={index} className="flex flex-col gap-3 pb-3">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                      style={{
                        backgroundImage: `url(${whyChooseUs[index].image})`,
                      }}
                    ></div>
                    <div>
                      <p className="text-[#111418] text-base font-medium leading-normal">
                        {whyChooseUs[index].title}
                      </p>
                      <p className="text-[#60758a] text-sm font-normal leading-normal">
                        {whyChooseUs[index].description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-[#111418] text-lg md:text-xl lg:text-2xl font-bold px-4 py-3">
              Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {services.map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 p-4 border rounded-lg"
                >
                  <div
                    className="text-[#111418]"
                    data-icon="Lightning"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>
                    </svg>
                  </div>
                  <h2 className="text-[#111418] text-base font-bold">
                    {services[index].title}
                  </h2>
                  <p className="text-[#60758a] text-sm font-normal">
                    {services[index].description}
                  </p>
                </div>
              ))}
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/d71311d4-48e0-490f-a553-c40c90c22867.png")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/stability/96d13431-88ba-4fde-9162-e5e4551200e8.png")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/743b9307-c32c-414f-95c3-3b63ebd3fe5b.png")',
                  }}
                ></div>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-center mb-8">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold">
                <a href="/Projects" className="truncate">
                  View more projects
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
