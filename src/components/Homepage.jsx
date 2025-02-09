import React from "react";
import Header from "./Header";
function Homepage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/db3051ba-0da0-4eb2-8ba5-b8f3ad9236f4.png")',
                  }}
                ></div>
                <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Your One-Stop Solution for Professional Electrical Work
                    </h1>
                    <h2 className="text-[#111418] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      We provide high-quality electrical work for commercial and
                      residential projects, from new construction to remodels.
                      Our experienced team is dedicated to delivering superior
                      results, on time and on budget.
                    </h2>
                  </div>
                  <a
                    href="/ContactUs"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0d7cf2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0d7cf2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                      <span className="truncate">Get a Quote</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Our Services
                </h1>
                <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                  The Beejliwala provides a wide range of professional
                  electrical services for commercial and residential clients.
                  From new construction to remodels, upgrades, and repairs, our
                  experienced team is committed to delivering superior results,
                  on time and on budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
