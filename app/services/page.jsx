"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Custom Web Development",
    description: `I craft tailored web solutions from the ground up, focusing on client-specific needs. By leveraging cutting-edge front-end and back-end technologies, I build feature-rich, secure, and high-performing websites that provide an exceptional user experience and drive results.`,
    href: "https://jaxel.com/top-7-benefits-of-custom-website-development/",
  },
  {
    num: "02",
    title: "Full-Stack Solutions",
    description: `With expertise across the entire tech stack, I deliver comprehensive solutions that integrate seamlessly from front-end interfaces to back-end systems. My approach ensures robust, scalable, and maintainable applications designed to handle complex business requirements with ease.`,
    href: "https://www.careerera.com/blog/advantages-of-full-stack-development",
  },
  {
    num: "03",
    title: "Web Applications Development",
    description: `From user-friendly tools to sophisticated SaaS platforms, I develop web applications that are efficient, scalable, and built for performance. My emphasis on clean, modular architecture allows applications to scale with growing traffic while maintaining high-speed response times and reliability.`,
    href: "https://decode.agency/article/web-app-development-benefits/",
  },
  {
    num: "04",
    title: "UI/UX Design & SEO Optimization",
    description: `Crafting intuitive, visually engaging user experiences is at the core of my design philosophy. I combine aesthetic design with data-driven SEO strategies to ensure your web presence not only captivates but also ranks well on search engines, driving organic traffic and engagement.`,
    href: "https://medium.com/@sharma-rohit/the-intersection-of-ui-ux-and-seo-key-strategies-for-success-ef0738d006ba",
  },
  {
    num: "05",
    title: "Code Audits & Consulting",
    description: `Ensuring code quality and architecture robustness is vital for any growing project. I offer detailed code audits to identify bottlenecks, suggest optimizations, and provide comprehensive consulting to guide your development practices toward best-in-class standards.`,
    href: "https://bigohtech.com/benefits-of-code-review-and-audit/",
  },
  {
    num: "06",
    title: "Training & Tutoring",
    description: `With years of industry experience, I offer personalized tutoring and training sessions. Whether you're an individual looking to hone your coding skills or a team seeking expert guidance on best practices, I’m here to mentor and support your growth in the tech landscape.`,
    href: "https://www.oxfordlearning.com/benefits-of-tutoring/",
  },
  {
    num: "07",
    title: "Technical Seminars & Workshops",
    description: `I offer technical seminars and workshops on modern web technologies and full-stack development. These sessions combine hands-on learning with real-world examples. Participants gain practical skills and insights to implement best practices. Perfect for developers and teams looking to stay ahead in tech.`,
    href: "https://www.meraevents.com/blog/benefits-of-attending-workshops-for-professionals-business-owners",
  },
  {
    num: "08",
    title: "Maintenance & Support",
    description: `To keep your projects running smoothly, I provide ongoing maintenance and support services. This includes performance tuning, updates, and troubleshooting to ensure your digital presence stays strong and up-to-date over time.`,
    href: "https://savvycomsoftware.com/blog/ongoing-software-maintenance-and-support/",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid gird-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top  */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all  duration-500
                  "
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    target="_blank"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* heading  */}
                <h2 className="text-[43px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-white/60">{service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
