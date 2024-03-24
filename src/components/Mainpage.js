import { useState } from 'react';
import  { Header }  from "./Header";
import Searchbox from './Searchbox';
import { StationList } from '../pages/StationList';
import { Footer } from './Footer';
import LoadingBar from 'react-top-loading-bar';

function Mainpage() {
   const [locoid, setLocoid] = useState("");
  const [position, setPosition] = useState({ latitude: null, longitude: null, city:"", lodded:false });
  const [progress, setProgress] = useState(0);
   
  // window.localStorage.removeItem("isLoggedIn")
  return (
    <div className='Mainpage'>
        <LoadingBar
        color='#d1d5db'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className='sticky top-0'>
            <Header />
            <Searchbox setLocoid={setLocoid}  position={position} setPosition={setPosition} progress={progress} setProgress={setProgress}/>
      </div>
            <StationList locoid={locoid} position={position}/>
            <Footer/>
    </div>
  )
}

export default Mainpage;