function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
      {/* Inside the flex wrapper there are below two div . */}

      {/* Div - 1 */}

      <div className="flex items-center gap-4 text-[#111418]">
        {/* <div className="size-4 flex-1"> */}
        {/* <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_535)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect width="48" height="48" fill="white"></rect>
              </clipPath>
            </defs>
          </svg> */}
        <a href="/#">
          <img
            className="h-auto w-43 p-0 centered"
            src="beejliwala-logo-2.png"
            alt=""
          />
        </a>

        {/* </div> */}
        {/* <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
          Beejliwala
        </h2> */}
      </div>

      {/* Div - 2 */}
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a
            className="text-[#111418] text-sm font-medium leading-normal"
            href="/Services"
          >
            Services
          </a>
          <a
            className="text-[#111418] text-sm font-medium leading-normal"
            href="/Projects"
          >
            Projects
          </a>
          <a
            className="text-[#111418] text-sm font-medium leading-normal"
            href="/WhyUs"
          >
            About Us
          </a>
          <a
            className="text-[#111418] text-sm font-medium leading-normal"
            href="/ContactUs"
          >
            Contact Us
          </a>

          {/* <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Resources</a> */}
        </div>
        {/* <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0d7cf2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Get started</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Log in</span>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div className="text-[#111418]" data-icon="Globe" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
                  </svg>
                </div>
              </button>
            </div> */}
      </div>
    </header>
  );
}
export default Header;
