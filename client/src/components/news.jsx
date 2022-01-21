import { Services } from ".";
import NewsCard from "../widgets/NewsCard";

const News = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center ">
        <div className="flex-row  md:flex w-11/12 items-start justify-evenly md:p-3 py-2 px-2">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className="flex-row  md:flex w-11/12 items-start justify-evenly md:p-3 py-2 px-2">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <Services />
    </>
  );
};

export default News;
