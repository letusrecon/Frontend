
import {ThreeCircles} from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center  items-center fixed left-0 top-0 bg-black bg-opacity-50 w-[100%] h-[90vh] z-10 ">
     

      <ThreeCircles
        height="40"
        width="40"
        color="#61c1d1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
   
    </div>
  );
}
