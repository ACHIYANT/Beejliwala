import Header from "./Header";

function ContactUs() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <Header />
      <div className="layout-container flex h-full grow flex-col px-4 md:px-10">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] w-full">
            <div className="@container">
              <div className="p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/ContactUsBackground.png")',
                  }}
                >
                  <h1 className="text-white text-3xl md:text-5xl font-black leading-tight text-center">
                    We're here to help with any electrical need
                  </h1>
                </div>
              </div>
            </div>
            <h2 className="text-[#111418] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Contact us
            </h2>
            <div className="p-4 grid grid-cols-1 md:grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#60758a] text-sm font-normal">Office</p>
                <p className="text-[#111418] text-sm font-normal">
                  1515 SVH-83 Metro Street, Sector-83, Gurugram
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#60758a] text-sm font-normal">Phone</p>
                <p className="text-[#111418] text-sm font-normal">
                  +91 701 575 0031
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#60758a] text-sm font-normal">Email</p>
                <p className="text-[#111418] text-sm font-normal">
                  official@beejliwala.com
                </p>
              </div>
            </div>
            <div className="@container flex flex-col h-full flex-1 mb-8">
              <iframe
                className="bg-cover rounded-3xl bg-center flex min-h-[300px] md:min-h-[500px] w-full flex-col justify-between px-4 pb-4 pt-5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.477958213999!2d76.9730033!3d28.404831499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d760cf2d077%3A0x741b49f09bb5fd3f!2sSVH%2083%20Metro%20Street!5e0!3m2!1sen!2sin!4v1738493347144!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
