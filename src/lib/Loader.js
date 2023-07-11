
import {ThreeCircles} from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center h-70 items-center fixed left-0 top-0 bg-black bg-opacity-50 w-[100%] h-[100vh] z-10 ">
     

      <ThreeCircles
        height="60"
        width="60"
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
