import { SiEthereum } from "react-icons/si";

const CoinCard = () => {
  return (
    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 white-glassmorphism .white-glassmorphism ">
      <div className="flex justify-between flex-col w-full h-full ">
        <div className="flex justify-between  pr-1">
          <div className=" flex items-center text-white font-bold">
            <p>1. </p>
            <p>Bitcoin</p>
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white flex justify-center items-center  ">
            <SiEthereum fontSize={21} color="#fff" />
          </div>
        </div>

        <div className=" flex justify-between text-xs pr-4 text-white">
          <div className=" flex-col items-center justify-between ">
            <p className="p-1">
              Market Cap: <span>420000</span>
            </p>
            <p className="p-1">
              Volume: <span>547000</span>
            </p>
          </div>
          <div className="flex-col items-center justify-between">
            <p className="p-1">
              Market Cap: <span>420000</span>
            </p>
            <p className="p-1">
              Volume: <span>547000</span>
            </p>
          </div>
        </div>

        <div className=" flex justify-between items-center pr-1">
          <p className="text-white font-semibold text-lg mt-1">
            Price: <span>$500</span>
          </p>
          <p className="text-white font-light text-sm">5 min ago</p>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
