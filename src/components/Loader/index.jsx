import Lottie from "react-lottie";
import animationData from  '../../assets/51053-delivery.json';



function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
   
      return <Lottie options={defaultOptions}/>
}

export default Loader;