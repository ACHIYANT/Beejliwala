import React from "react";
import Header from "./Header";
function Services() {
  const featuredServices = [
    {
      id: 1,
      title: "Temporary Power",
      description: "Temporary power distribution system",
    },
    {
      id: 2,
      title: "Decorative Lighting",
      description: "Interior and exterior fancy lighting",
    },
    {
      id: 3,
      title: "Data & Communications",
      description: "Structured cabling, fiber optics, wireless networks",
    },
    {
      id: 4,
      title: "Fire Alarm system",
      description: "Fire detection and notification systems",
    },
    {
      id: 5,
      title: "Security Systems",
      description: "Access control, surveillance, intrusion detection",
    },
    {
      id: 6,
      title: "Special Systems",
      description: "Nurse call, intercom, public address, clock systems",
    },
    {
      id: 7,
      title: "Energy Management Systems",
      description: "Building automation, energy monitoring, controls",
    },
    {
      id: 8,
      title: "UPS Systems",
      description: "Uninterruptible power supply systems",
    },
    {
      id: 9,
      title: "Generator Systems",
      description: "Emergency backup power generation systems",
    },
    {
      id: 10,
      title: "Solar Photovoltaic Systems",
      description: "Renewable energy power systems",
    },
  ];
  const howwework = [
    {
      id: 1,
      title: "We Deliver",
      description: "On-time delivery of materials and equipment",
    },
    {
      id: 2,
      title: "We Install",
      description: "Quality installation by skilled electricians",
    },
    {
      id: 3,
      title: "We Inspect",
      description: "Thorough inspection to ensure compliance",
    },
    {
      id: 4,
      title: "We Train",
      description: "Hands-on training for system users",
    },
    {
      id: 5,
      title: "We Maintain",
      description: "Proactive maintenance to prevent downtime",
    }
  ];
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <Header />
      <div className="layout-container flex h-full grow flex-col px-4 md:px-40">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10 md:px-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("Services/hero.png")`,
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                      Electrical Services for construction sites
                    </h1>
                    <h2 className="text-white text-sm sm:text-base font-normal leading-normal">
                      Beejliwala is your partner in getting the job done. We
                      provide a wide range of electrical services to help you
                      meet your projects needs.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#111418] text-lg font-bold leading-tight max-w-[720px]">
                  Featured Services
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {featuredServices.map((_, i) => (
                  <div key={i} className="flex flex-col gap-3 pb-3">
                    <div
                      className="w-full h-44 bg-center bg-no-repeat aspect-[16/9] bg-cover rounded-xl"
                      style={{
                        backgroundImage: `url("Services/featured-services/${i}.png")`,
                      }}
                    ></div>
                    <div>
                      <p className="text-[#111418] text-base font-medium leading-normal">
                        {featuredServices[i].title}
                      </p>
                      <p className="text-[#60758a] text-sm font-normal leading-normal">
                        {featuredServices[i].description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="text-[#111418] text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              How We Work ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4">
              {howwework.map((_, index) => (
                <div
                  key={index}
                  className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col"
                >
                  <div className="text-[#111418]">
                    <img
                      src={`Services/icons/icon-${index + 1}.svg`}
                      alt={howwework[index].title}
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight">
                      {howwework[index].title}
                    </h2>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                      {howwework[index].description}.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex px-4 py-3 justify-center mb-8">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                <a href="/Projects" className="truncate">
                  View Our Projects
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
