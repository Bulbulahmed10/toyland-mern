import React from "react";

const imageUrl = [
  "https://images.unsplash.com/photo-1658233427331-088df3be7ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80",
  "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1608889175419-ac2a18682fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2ZW5nZXJzJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1657558045738-21507cf53606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1588862081167-d5b98006637e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1608889175157-718b6205a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  "https://images.unsplash.com/photo-1608889622453-cc5752d291d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
];

const ToyGallery = () => {
  return (
    <>
      <div className="mt-16">
        <h2 className="text-center text-3xl tracking-wide">
          Recent Photoshoots
        </h2>
        <p className="text-center text-blue-500 mb-10">Check Gallery</p>
      </div>

      <div className="grid grid-cols-4 ">
        {imageUrl.map((singleImageUrl, index) => (
          <div data-aos="zoom-in" key={index} className="h-[400px] overflow-hidden">
            <img
              key={index}
              className="h-full transition-transform duration-300 hover:scale-125 transform-gpu overflow-hidden w-full object-cover"
              src={singleImageUrl}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ToyGallery;
