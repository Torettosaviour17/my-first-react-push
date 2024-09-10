import React from "react";
import { gwagons } from "../../images/index";

function TextImageSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to create an environment where innovation thrives and
            ideas come to life. We believe in the power of technology to
            transform businesses and lives. By focusing on the needs of our
            clients, we aim to deliver solutions that are not only effective but
            also scalable and future-proof. Our team of experts is committed to
            continuous learning and growth, ensuring that we stay ahead of
            industry trends. We strive to foster a culture of collaboration,
            where every voice is heard and valued. Together, we work towards a
            common goal: making a positive impact on the world through our work.
            With a deep understanding of the challenges and opportunities in
            today's digital landscape, we are dedicated to providing our clients
            with the tools they need to succeed.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src={gwagons}
            alt="Team at work"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/400"
            alt="Brainstorming session"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/400"
            alt="Innovative solutions"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/400"
            alt="Collaboration"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default TextImageSection;
