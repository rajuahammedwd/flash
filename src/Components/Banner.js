import Image from "next/image";

const Banner = () => {
    return (
      <div className="border-b border-gray-300">
        <div className="max-w-[1028px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-x-5 my-2">
          <div className="group relative overflow-hidden">
            <Image
              className="rounded-md overflow-hidden transition-transform duration-700 transform-gpu group-hover:scale-110"
              width={660}
              height={314}
              src={"https://i.ibb.co/VjNXbs5/Banner-02.jpg"}
              alt="Banner"
            />
          </div>
          <div className="group relative overflow-hidden">
            <Image
              className="rounded-md overflow-hidden transition-transform duration-700 transform-gpu group-hover:scale-110"
              width={660}
              height={314}
              src={"https://i.ibb.co/VT0fstc/Banner-01-ZICVr5-M.jpg"}
              alt="Banner"
            />
          </div>
          <div className="group hidden lg:block relative overflow-hidden">
            <Image
              className="rounded-md h-full overflow-hidden transition-transform duration-700 transform-gpu group-hover:scale-110"
              width={660}
              height={314}
              src={"https://i.ibb.co/SrM9pjz/Banner-03-gn3-I65f.jpg"}
              alt="Banner"
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;
