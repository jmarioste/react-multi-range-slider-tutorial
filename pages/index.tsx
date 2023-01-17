import type { NextPage } from "next";
import RangeSlider from "../components/RangeSlider";
const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <RangeSlider
        className="w-80 h-12"
        defaultValue={50}
        marks={10}
        step={10}
      />
      <RangeSlider className="w-40 h-8" defaultValue={[25, 75]} />
      <RangeSlider
        className="w-8 h-40"
        orientation="vertical"
        defaultValue={50}
      />
    </div>
  );
};
export default Home;
