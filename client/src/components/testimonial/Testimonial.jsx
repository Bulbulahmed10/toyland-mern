import React from "react";
import Rating from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const testimonialData = [
  {
    id: "454554546df4sd5",
    name: "kadrokaze Farlim",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1555168945-6c11dbe1bb67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=375&q=80",
    message:
      "I'm so glad I found this website! They have such a great selection of toys, and the prices are really reasonable. My kids love all of their new toys, and I'm so happy that I was able to find them here.",
  },
  {
    id: "45fddfgh5sd5",
    name: "Tasrika Alworal",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1496203695688-3b8985780d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=695&q=80",
    message:
      "I've been shopping at this website for years, and I've never been disappointed. The toys are always high quality, and the customer service is excellent. I would definitely recommend this website to anyone ",
  },
  {
    id: "4s24254dfd5",
    name: "Jasika Salsarik",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    message:
      "I was really skeptical about ordering toys online, but I'm so glad I did! The toys arrived quickly and in perfect condition. My kids love them, and I'm so happy with my purchase.",
  },
  {
    id: "454sfsdf4sd5",
    name: "Nathan Dumlao",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1579042877185-396212310117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    message:
      "I was looking for a specific toy for my son's birthday, and I was having trouble finding it in stores. I was about to give up when I found this website. They had the toy I was looking for, and it arrived in perfect ",
  },
];

const Testimonial = () => {
  return (
    <div className="my-16">
      <h2 className="text-center text-3xl tracking-wide">Customer Saying</h2>
      <p className="text-center text-blue-500 mb-10">Customer Testimonials</p>
      <Marquee pauseOnHover>
        {testimonialData.map((singleTestimonial) => (
          <div
            key={singleTestimonial.id}
            className="w-[600px] bg-[#F8F8F8] p-6 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md ml-8">
            <div className="flex justify-between">
              <div className="flex items-center gap-3 mb-3">
                <img
                  className="w-16 h-16 object-cover rounded-full"
                  src={singleTestimonial.image}
                  alt={singleTestimonial.name}
                />
                <div>
                  <h2 className="font-semibold tracking-wide">
                    {singleTestimonial.name}
                  </h2>
                  <Rating
                    placeholderRating={singleTestimonial.rating}
                    emptySymbol={<AiFillStar className="text-xl" />}
                    placeholderSymbol={
                      <AiFillStar className="text-xl text-yellow-500" />
                    }
                    fullSymbol={
                      <AiFillStar className="text-xl text-violet-500" />
                    }
                  />
                </div>
              </div>
              <FaQuoteRight />
            </div>
            <p>{singleTestimonial.message}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonial;
