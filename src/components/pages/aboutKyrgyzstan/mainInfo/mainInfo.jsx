import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutKyrgyzstan } from "../../../../redux/actions/aboutKyrgyzstan";
import axios from "axios";
import { useEffect } from "react";


const MainInfo = () => {

  const aboutKyrgyzstan = useSelector((state) => state.aboutKyrgyzstan.setAboutKyrgyzstan)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch (fetchAboutKyrgyzstan());
    }, []);

const renderItems = aboutKyrgyzstan.map((aboutKyrgyzstan) => {

   

  const {info} = aboutKyrgyzstan;

  return (
    <div className="main__info">
      <h1>Кыргызстан</h1>
      <div className="photo"><img   src="./img/pngCard/Kyirgyizstan-nature.jpg" alt="nature" className="nature-photo" /></div>
      <p>
        {info}
      </p>
    </div>
)

});

return <>{renderItems}</>

}

export default MainInfo;