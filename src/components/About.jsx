import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full  h-screen bg-[#0a1c37] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Quién soy
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              Hola soy Jorge, un placer tenerte aquí. Te invito a visitarr mi
              web
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
              optio placeat omnis facilis molestias, dignissimos eaque autem
              officia laborum quas ratione quia blanditiis sequi voluptatum.
              Porro hic incidunt odit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
