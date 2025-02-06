import React from "react";
function Services() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("Services/hero.png")`,
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Electrical Services construction sites
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Beejliwala is your partner in getting the job done. We
                      provide a wide range of electrical services to help you
                      meet your projects needs.
                    </h2>
                  </div>
                  {/* <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0d7cf2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Get started</span>
                  </button> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#111418] tracking-light text-lg font-bold leading-tight @[480px]:text-lg @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Featured Services
                </h1>
                {/* <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                  We are committed to delivering exceptional service and results
                  on every project.
                </p> */}
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full h-44 bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("Services/featured-services/0.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Temporary Power
                    </p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                      Temporary power distribution system
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full h-44 bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("Services/featured-services/1.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Fancy Lighting
                    </p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                      Interior and exterior fancy lighting.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full h-44 bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("Services/featured-services/2.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Data & Communications
                    </p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                      Structured cabling, fiber optics, wireless networks
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full h-44 bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("Services/featured-services/3.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Fire Alarm system
                    </p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                      Fire detection and notification systems
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full h-44 bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("Services/featured-services/4.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Security Systems
                    </p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                      Access control, surveillance, intrusion detection
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full h-44 bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("Services/featured-services/5.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Special Systems
                    </p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                      Nurse call, intercom, public address, clock systems
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full h-44 bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("Services/featured-services/6.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Energy Management Systems
                    </p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                      Building automation, energy monitoring, controls
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full h-44 bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("Services/featured-services/7.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      UPS Systems
                    </p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                      Uninterruptible power supply systems
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full h-44 bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("Services/featured-services/8.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Generator Systems
                    </p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                      Emergency backup power generation systems
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full h-44 bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("Services/featured-services/9.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#111418] text-base font-medium leading-normal">
                      Solar Photovoltaic Systems
                    </p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                      Renewable energy power systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              How We Work ?
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
                <div
                  className="text-[#111418]"
                  data-icon="Lightning"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    width="24"
                    height="16"
                    viewBox="0 0 24 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.1956 5.96875L21.8831 2.6875C21.6553 2.11944 21.1039 1.74789 20.4919 1.75H17.25V1C17.25 0.585786 16.9142 0.25 16.5 0.25H2.25C1.42157 0.25 0.75 0.921573 0.75 1.75V12.25C0.75 13.0784 1.42157 13.75 2.25 13.75H3.84375C4.18363 15.0774 5.37974 16.0059 6.75 16.0059C8.12026 16.0059 9.31637 15.0774 9.65625 13.75H14.3438C14.6836 15.0774 15.8797 16.0059 17.25 16.0059C18.6203 16.0059 19.8164 15.0774 20.1562 13.75H21.75C22.5784 13.75 23.25 13.0784 23.25 12.25V6.25C23.2503 6.15361 23.2318 6.0581 23.1956 5.96875V5.96875ZM17.25 3.25H20.4919L21.3919 5.5H17.25V3.25ZM2.25 1.75H15.75V7.75H2.25V1.75ZM6.75 14.5C5.92157 14.5 5.25 13.8284 5.25 13C5.25 12.1716 5.92157 11.5 6.75 11.5C7.57843 11.5 8.25 12.1716 8.25 13C8.25 13.8284 7.57843 14.5 6.75 14.5V14.5ZM14.3438 12.25H9.65625C9.31637 10.9226 8.12026 9.99412 6.75 9.99412C5.37974 9.99412 4.18363 10.9226 3.84375 12.25H2.25V9.25H15.75V10.4041C15.0534 10.8067 14.547 11.4715 14.3438 12.25V12.25ZM17.25 14.5C16.4216 14.5 15.75 13.8284 15.75 13C15.75 12.1716 16.4216 11.5 17.25 11.5C18.0784 11.5 18.75 12.1716 18.75 13C18.75 13.8284 18.0784 14.5 17.25 14.5V14.5ZM21.75 12.25H20.1562C19.8124 10.9261 18.6179 10.0013 17.25 10V7H21.75V12.25Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight">
                    We Deliver
                  </h2>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    On-time delivery of materials and equipment
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
                <div
                  className="text-[#111418]"
                  data-icon="Lightning"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.5631 9.49998L15.2388 3.13248C11.7218 -0.377412 6.02724 -0.377412 2.51032 3.13248L2.50188 3.14092L1.21095 4.47498C0.932771 4.77393 0.944878 5.24048 1.23818 5.5246C1.53149 5.80871 1.99819 5.80597 2.28813 5.51842L3.57532 4.18904C4.09319 3.67128 4.68416 3.23224 5.32938 2.88592L9.68876 7.24998L0.688759 16.25C0.40738 16.5313 0.249298 16.9129 0.249298 17.3108C0.249298 17.7086 0.40738 18.0902 0.688759 18.3715L2.62845 20.3112C2.90976 20.5926 3.29134 20.7507 3.68923 20.7507C4.08711 20.7507 4.46869 20.5926 4.75001 20.3112L13.75 11.3112L15.0944 12.6556L16.75 14.3094C17.0313 14.5907 17.4129 14.7488 17.8108 14.7488C18.2087 14.7488 18.5903 14.5907 18.8716 14.3094L21.5613 11.6197C22.1465 11.0346 22.1473 10.0861 21.5631 9.49998ZM3.68876 19.25L1.75001 17.3103L8.12501 10.9353L10.0638 12.875L3.68876 19.25ZM13.2194 9.71748L11.125 11.8128L9.18532 9.87498L11.2806 7.77967C11.4215 7.63899 11.5006 7.4481 11.5006 7.24904C11.5006 7.04999 11.4215 6.85909 11.2806 6.71842L6.84251 2.28123C9.45334 1.54593 12.2577 2.27759 14.1766 4.19467L18.3222 8.36748L15.625 11.0619L14.2806 9.71748C14.14 9.57665 13.9491 9.49752 13.75 9.49752C13.551 9.49752 13.3601 9.57665 13.2194 9.71748ZM17.8131 13.2481L16.6881 12.1231L19.375 9.42967L20.5 10.5547L17.8131 13.2481Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight">
                    We Install
                  </h2>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Quality installation by skilled electricians
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
                <div
                  className="text-[#111418]"
                  data-icon="Lightning"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5 0.75H1.5C0.671573 0.75 0 1.42157 0 2.25V7.76062C0 16.1616 7.10812 18.9488 8.53125 19.4222C8.8352 19.5256 9.1648 19.5256 9.46875 19.4222C10.8937 18.9488 18 16.1616 18 7.76062V2.25C18 1.42157 17.3284 0.75 16.5 0.75ZM16.5 7.76156C16.5 15.1134 10.2797 17.5697 9 17.9972C7.73156 17.5744 1.5 15.12 1.5 7.76156V2.25H16.5V7.76156ZM4.71938 10.2806C4.42632 9.98757 4.42632 9.51243 4.71938 9.21937C5.01243 8.92632 5.48757 8.92632 5.78063 9.21937L7.5 10.9388L12.2194 6.21937C12.5124 5.92632 12.9876 5.92632 13.2806 6.21937C13.5737 6.51243 13.5737 6.98757 13.2806 7.28063L8.03063 12.5306C7.88995 12.6715 7.69906 12.7506 7.5 12.7506C7.30094 12.7506 7.11005 12.6715 6.96937 12.5306L4.71938 10.2806Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight">
                    We Inspect
                  </h2>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Thorough inspection to ensure compliance
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
                <div
                  className="text-[#111418]"
                  data-icon="Lightning"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.95 10.1C22.6186 10.3485 22.1485 10.2814 21.9 9.94999C20.9833 8.71774 19.5358 7.99403 18 7.99999C17.6985 7.99996 17.4263 7.81936 17.3091 7.54155C17.2304 7.35514 17.2304 7.14485 17.3091 6.95843C17.4263 6.68062 17.6985 6.50002 18 6.49999C19.1692 6.49989 20.1435 5.60424 20.2418 4.43915C20.3401 3.27405 19.5297 2.22783 18.377 2.03183C17.2243 1.83583 16.1136 2.55538 15.8212 3.68749C15.7177 4.08876 15.3085 4.33011 14.9072 4.22655C14.5059 4.123 14.2646 3.71376 14.3681 3.31249C14.7687 1.76265 16.1088 0.63793 17.7047 0.512357C19.3005 0.386784 20.8001 1.28805 21.4381 2.75617C22.0761 4.22429 21.7119 5.93554 20.5312 7.01655C21.5511 7.45811 22.4376 8.15882 23.1028 9.04905C23.2222 9.20859 23.2731 9.40906 23.2444 9.60623C23.2158 9.80339 23.1098 9.98105 22.95 10.1ZM17.8987 15.875C18.0465 16.1075 18.055 16.4023 17.9207 16.6429C17.7865 16.8834 17.5311 17.031 17.2557 17.0273C16.9802 17.0236 16.7289 16.8691 16.6012 16.625C15.64 14.9973 13.8903 13.9986 12 13.9986C10.1097 13.9986 8.36001 14.9973 7.39875 16.625C7.27105 16.8691 7.0198 17.0236 6.74433 17.0273C6.46887 17.031 6.21353 16.8834 6.07927 16.6429C5.94502 16.4023 5.95345 16.1075 6.10125 15.875C6.82837 14.6257 7.93705 13.6425 9.26437 13.07C7.73297 11.8975 7.11905 9.87947 7.73804 8.05278C8.35704 6.22609 10.0713 4.99699 12 4.99699C13.9287 4.99699 15.643 6.22609 16.262 8.05278C16.8809 9.87947 16.267 11.8975 14.7356 13.07C16.0629 13.6425 17.1716 14.6257 17.8987 15.875ZM12 12.5C13.6569 12.5 15 11.1568 15 9.49999C15 7.84314 13.6569 6.49999 12 6.49999C10.3431 6.49999 9 7.84314 9 9.49999C9 11.1568 10.3431 12.5 12 12.5ZM6.75 7.24999C6.75 6.83578 6.41421 6.49999 6 6.49999C4.83076 6.49989 3.85646 5.60424 3.75816 4.43915C3.65986 3.27405 4.47034 2.22783 5.62303 2.03183C6.77572 1.83583 7.88644 2.55538 8.17875 3.68749C8.2823 4.08876 8.69154 4.33011 9.09281 4.22655C9.49408 4.123 9.73543 3.71376 9.63187 3.31249C9.23134 1.76265 7.89116 0.63793 6.29533 0.512357C4.6995 0.386784 3.1999 1.28805 2.56189 2.75617C1.92388 4.22429 2.28813 5.93554 3.46875 7.01655C2.44995 7.45853 1.56442 8.1592 0.899997 9.04905C0.65121 9.38043 0.718158 9.85074 1.04953 10.0995C1.3809 10.3483 1.85121 10.2814 2.1 9.94999C3.01674 8.71774 4.46415 7.99403 6 7.99999C6.41421 7.99999 6.75 7.6642 6.75 7.24999Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight">
                    We Train
                  </h2>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Hands-on training for system users
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
                <div
                  className="text-[#111418]"
                  data-icon="Lightning"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5C12.4853 14.5 14.5 12.4853 14.5 10C14.4974 7.51579 12.4842 5.50258 10 5.5V5.5ZM10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10C13 11.6569 11.6569 13 10 13V13ZM18.25 10.2025C18.2537 10.0675 18.2537 9.9325 18.25 9.7975L19.6488 8.05C19.7975 7.86393 19.849 7.61827 19.7875 7.38813C19.5582 6.52619 19.2152 5.69861 18.7675 4.92719C18.6486 4.72249 18.4401 4.58592 18.205 4.55875L15.9813 4.31125C15.8888 4.21375 15.795 4.12 15.7 4.03L15.4375 1.80063C15.4101 1.56531 15.2732 1.35677 15.0681 1.23813C14.2964 0.791263 13.4689 0.448595 12.6072 0.219063C12.3769 0.157836 12.1312 0.209687 11.9453 0.35875L10.2025 1.75C10.0675 1.75 9.9325 1.75 9.7975 1.75L8.05 0.354063C7.86393 0.205326 7.61827 0.153827 7.38813 0.215312C6.52633 0.445025 5.6988 0.788016 4.92719 1.23531C4.72249 1.35417 4.58592 1.56268 4.55875 1.79781L4.31125 4.02531C4.21375 4.11844 4.12 4.21219 4.03 4.30656L1.80063 4.5625C1.56531 4.58988 1.35677 4.72682 1.23813 4.93188C0.791263 5.70359 0.448595 6.5311 0.219063 7.39281C0.157836 7.6231 0.209687 7.86878 0.35875 8.05469L1.75 9.7975C1.75 9.9325 1.75 10.0675 1.75 10.2025L0.354063 11.95C0.205326 12.1361 0.153827 12.3817 0.215312 12.6119C0.444615 13.4738 0.787627 14.3014 1.23531 15.0728C1.35417 15.2775 1.56268 15.4141 1.79781 15.4412L4.02156 15.6887C4.11469 15.7862 4.20844 15.88 4.30281 15.97L4.5625 18.1994C4.58988 18.4347 4.72682 18.6432 4.93188 18.7619C5.70359 19.2087 6.5311 19.5514 7.39281 19.7809C7.6231 19.8422 7.86878 19.7903 8.05469 19.6413L9.7975 18.25C9.9325 18.2537 10.0675 18.2537 10.2025 18.25L11.95 19.6488C12.1361 19.7975 12.3817 19.849 12.6119 19.7875C13.4738 19.5582 14.3014 19.2152 15.0728 18.7675C15.2775 18.6486 15.4141 18.4401 15.4412 18.205L15.6887 15.9813C15.7862 15.8888 15.88 15.795 15.97 15.7L18.1994 15.4375C18.4347 15.4101 18.6432 15.2732 18.7619 15.0681C19.2087 14.2964 19.5514 13.4689 19.7809 12.6072C19.8422 12.3769 19.7903 12.1312 19.6413 11.9453L18.25 10.2025ZM16.7406 9.59313C16.7566 9.86414 16.7566 10.1359 16.7406 10.4069C16.7295 10.5924 16.7876 10.7755 16.9037 10.9206L18.2341 12.5828C18.0814 13.0679 17.886 13.5385 17.65 13.9891L15.5312 14.2291C15.3467 14.2495 15.1764 14.3377 15.0531 14.4766C14.8727 14.6795 14.6805 14.8717 14.4775 15.0522C14.3387 15.1754 14.2505 15.3458 14.23 15.5303L13.9947 17.6472C13.5442 17.8833 13.0736 18.0787 12.5884 18.2313L10.9253 16.9009C10.7922 16.7946 10.6269 16.7367 10.4566 16.7369H10.4116C10.1405 16.7528 9.86883 16.7528 9.59781 16.7369C9.41226 16.7257 9.22918 16.7838 9.08406 16.9L7.41719 18.2313C6.93206 18.0786 6.46146 17.8831 6.01094 17.6472L5.77094 15.5312C5.75046 15.3467 5.66227 15.1764 5.52344 15.0531C5.32048 14.8727 5.12827 14.6805 4.94781 14.4775C4.82456 14.3387 4.6542 14.2505 4.46969 14.23L2.35281 13.9937C2.11674 13.5433 1.92128 13.0727 1.76875 12.5875L3.09906 10.9244C3.21522 10.7793 3.27336 10.5962 3.26219 10.4106C3.24625 10.1396 3.24625 9.86789 3.26219 9.59688C3.27336 9.41133 3.21522 9.22824 3.09906 9.08313L1.76875 7.41719C1.9214 6.93206 2.11685 6.46146 2.35281 6.01094L4.46875 5.77094C4.65326 5.75046 4.82362 5.66227 4.94688 5.52344C5.12733 5.32048 5.31954 5.12827 5.5225 4.94781C5.66188 4.82448 5.75043 4.65373 5.77094 4.46875L6.00625 2.35281C6.45672 2.11674 6.92733 1.92128 7.4125 1.76875L9.07563 3.09906C9.22074 3.21522 9.40383 3.27336 9.58937 3.26219C9.86039 3.24625 10.1321 3.24625 10.4031 3.26219C10.5887 3.27336 10.7718 3.21522 10.9169 3.09906L12.5828 1.76875C13.0679 1.9214 13.5385 2.11685 13.9891 2.35281L14.2291 4.46875C14.2495 4.65326 14.3377 4.82362 14.4766 4.94688C14.6795 5.12733 14.8717 5.31954 15.0522 5.5225C15.1754 5.66133 15.3458 5.74952 15.5303 5.77L17.6472 6.00531C17.8833 6.45578 18.0787 6.9264 18.2313 7.41156L16.9009 9.07469C16.7837 9.22103 16.7255 9.406 16.7378 9.59313H16.7406Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight">
                    We Maintain
                  </h2>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Proactive maintenance to prevent downtime
                  </p>
                </div>
              </div>
            </div>

            <div className="flex px-4 py-3 justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                <a href="/Projects" className="truncate">
                  View Our projects
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
