import { SiEthereum } from "react-icons/si";

const NewsCard = () => {
  return (
    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-48 sm:w-80 w-full my-5 blue-glassmorphism .white-glassmorphism  cursor-pointer ">
      <div className="flex justify-between flex-col w-full h-full ">
        <div className="flex justify-between items-start  h-2/4">
          <div className=" w-3/4 h-4/5">
            <p className="text-white font-semibold text-base">
              Top Cryptocurrency News: What Happened In Cryptocurrency In 2021..
            </p>
          </div>
          <div className="w-16 h-16 rounded-md border-2 border-gray-500 flex justify-center items-center bg-zinc-700 mr-1">
            <SiEthereum fontSize={21} color="#fff" />
          </div>
        </div>

        <div className="w-5/6">
          <p className="text-white text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            usamus optio ipo ipsam eum duci ...
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-white font-normal text-base mt-1">
            Times of India
          </p>
          <p className="text-white font-light text-xs mt-1">5 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
