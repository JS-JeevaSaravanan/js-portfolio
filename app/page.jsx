// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import ResumeDownBtn from "@/components/ResumeDownBtn";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text  */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Jeeva Saravanan</span>
            </h1>
            <p className="max-w-[500px mb-9 text-white/80">
              A Full Stack Developer skilled in building high-performance web
              applications using React, Next.js, Node.js, and Python. I enjoy
              crafting seamless user experiences and solving complex challenges
              with innovative solutions.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-2">
              <ResumeDownBtn />
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo  */}
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
