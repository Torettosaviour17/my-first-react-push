import React from "react";

function Advantage() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <img
              src="https://via.placeholder.com/400"
              alt="Gallery  1"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/400"
              alt="Gallery  2"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/400"
              alt="Gallery 3"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
