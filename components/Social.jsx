import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/JS-JeevaSaravanan" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/jeeva-saravanan-a22951166/",
  },
  {
    icon: <FaStackOverflow />,
    path: "https://stackoverflow.com/users/15811844/js-jeevasaravanan",
  },
  { icon: <TbBrandLeetcode />, path: "https://leetcode.com/JS_JeevaSaravanan" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
