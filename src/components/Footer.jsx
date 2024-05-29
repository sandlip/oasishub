import React from "react";

function Footer() {
  return (
    <section className="flex justify-between appWidth h-screen w-full bg-[url('/images/footerImage.png')] bg-no-repeat bg-center bg-cover">
      <div className="flex flex-row md:flex-col gap-16 w-1/2">
        <img
          src="/images/footerLogo.png"
          alt="Company's Logo"
          className="h-20 w-2/6"
        />
        <div className="flex flex-col gap-5 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Contact Us
          </h1>
          <div>
            <h2 className="font-bold text-lg text-white">Address</h2>
            <p>Opposite Taraba State Polytechnic</p>
          </div>
          <div>
            <h2 className="font-bold text-lg text-white">Phone</h2>
            <p>09161688902</p>
          </div>
          <div>
            <h2 className="font-bold text-lg text-white">Email</h2>
            <p>Oasis@sandlip.com</p>
          </div>
        </div>
      </div>

      {/* form */}
      <form action="" className="flex flex-col gap-5 bg-gray-100 h-full w-2/5 p-10 rounded-xl">
        <h1 className="text-3xl font-extrabold">Get In Touch</h1>
        <div className="flex gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold">Name</label>
            <input type="text" name="name" placeholder="John" className="p-2 rounded-lg border-2 border-bg-gray-300"required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="surname" className="font-semibold">Surname</label>
            <input type="text" name="surname" placeholder="Doe" className="p-2 rounded-lg border-2 border-bg-gray-300"required />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold">Mail</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@mail.net"
            className="p-2 rounded-lg border-2 border-bg-gray-300"required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="address" className="font-semibold">Address</label>
          <input
            type="text"
            name="address"
            placeholder="jalingo, Taraba State"
            className="p-2 rounded-lg border-2 border-bg-gray-300"required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="font-semibold">Description</label>
          <textarea name="description" className="p-2 rounded-lg border-2 border-bg-gray-300"required />
        </div>
        <button className="bg-black text-white p-2 rounded-lg hover:bg-[#201f1f]">
            Send Message
        </button>
      </form>
    </section>
  );
}

export default Footer;
