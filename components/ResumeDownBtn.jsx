"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/assets/JeevaSaravanan_FullStackDeveloper.pdf";
  link.download = "JeevaSaravanan_FullStackDeveloper.pdf";
  link.click();
};

const ResumeDownBtn = () => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default ResumeDownBtn;
