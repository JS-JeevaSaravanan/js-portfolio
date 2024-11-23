"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9080704586",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jeevatamil200@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Chennai, Tamil Nadu, India",
  },
];

const Contact = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormChange = (event) => {
    const form = event.target.closest("form");
    setIsFormValid(form.checkValidity());
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action="https://formsubmit.co/9a81499f210b2d1da86321027e08da0a"
              method="POST"
              onChange={handleFormChange}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>

              <p className="text-white/60">
                Interested in collaborating or have an exciting project in mind?
                Feel free to reach out, and let's turn your ideas into reality
                with innovative and scalable solutions.
              </p>

              {/* input  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname *"
                  required
                  className={`border ${!isFormValid && "border-red-500"}`}
                />
                <Input type="text" name="lastname" placeholder="Lastname" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address *"
                  required
                  className={`border ${!isFormValid && "border-red-500"}`}
                />
                <Input type="text" name="phone" placeholder="Phone number" />
              </div>

              {/* select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Offering"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="freelance_project">
                      Freelance Project
                    </SelectItem>
                    <SelectItem value="job_opportunity">
                      Job Opportunity
                    </SelectItem>
                    <SelectItem value="build_connection">
                      Build a Connection
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* text-area */}
              <Textarea
                className="h-[200px] border"
                name="message"
                placeholder="Type your message here."
              />

              {/* btn */}
              <div className="relative">
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 bottom-8 px-2 py-1 text-sm bg-gray-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity ${
                    !isFormValid ? "group" : ""
                  }`}
                >
                  Fill all required details
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`max-w-40 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    !isFormValid
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-600"
                  }`}
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
