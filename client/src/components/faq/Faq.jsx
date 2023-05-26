import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const faqData = [
  {
    id: "54545d4gf5g45f",
    qus: "What is the age range of toys available in the store?",
    ans: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: "gfddg54df5g4",
    qus: "Do you offer a warranty or return policy for your products?",
    ans: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: "4545454dfg45d4fg5",
    qus: " Do you offer a warranty or return policy for your products",
    ans: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: "4534gds5f445fsd4f",
    qus: "Can I order toys online or do I need to visit the store?",
    ans: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: "4s5f46sd4f6sdf4",
    qus: "Do I need to pick them up in-store or delivered at home?",
    ans: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: "g4d6f5g6d4g5",
    qus: "Are your toys environmentally friendly and sustainable?",
    ans: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: "4d4f56g5dfg54f",
    qus: "What age range of toys do you have in your store?",
    ans: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

const Faq = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <h2 className="text-center text-3xl tracking-wide ">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-blue-500 mb-10">
        Find your answer from here
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-2">
          <img
            data-aos="fade-down"
            className="w-full h-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1501686637-b7aa9c48a882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
            alt=""
          />
          <img
            data-aos="flip-down"
            className="w-full h-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1603557092510-263cac6e7ae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
        <div data-aos="flip-up">
          {faqData.map((singleFaqData) => (
            <div
              key={singleFaqData.id}
              tabIndex={0}
              className="collapse collapse-plus border-b bg-base-100 ">
              <div className="collapse-title text-lg  hover:text-blue-500">
                {singleFaqData.qus}
              </div>
              <div className="collapse-content">
                <p>{singleFaqData.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
