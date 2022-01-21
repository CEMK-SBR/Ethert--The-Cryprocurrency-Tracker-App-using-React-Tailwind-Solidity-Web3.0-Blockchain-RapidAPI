import { Services } from ".";
import CoinCard from "../widgets/CoinCard";
import MarketCard from "../widgets/MarketCard";

const Market = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center ">
        <div className="flex-row  md:flex  w-2/3 items-start justify-evenly  ">
          <MarketCard />
        </div>

        <div className="flex-row  md:flex w-11/12 items-start justify-evenly md:p-3 py-2 px-2">
          <CoinCard />
          <CoinCard />
          <CoinCard />
        </div>

        <div className="flex-row  md:flex w-5/6 items-start justify-between md:p-3 py-2 px-2 ">
          <CoinCard />
          <CoinCard />
          <CoinCard />
        </div>
        <div className="flex-row  md:flex w-5/6 items-start justify-between md:p-3 py-2 px-2 ">
          <CoinCard />
          <CoinCard />
          <CoinCard />
        </div>
        <div className="flex-row  md:flex w-5/6 items-start justify-between md:p-3 py-2 px-2 ">
          <CoinCard />
          <CoinCard />
          <CoinCard />
        </div>
      </div>
    </>
  );
};

export default Market;
