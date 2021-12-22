import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useSelector } from "react-redux";
import { fetchInfo } from "../../../redux/actions/info";

 
const Info = () => {
 
const info = useSelector((state) => state.info.setInfo );
const infoo = useSelector (({info}) =>info.setInfo );

const guestsComments = useSelector((state) => state.guestsComments.setGuestsComments)



const renderItems = infoo.map((infoo) => {

  const {titlee} = guestsComments
  const { title, id, text, button} = infoo;

  // useEffect(() => {
//   dispatch (fetchInfo());
//   }, []);

  return (
    <section className="section-info">
  <div className="wrapper">
    <div className="info-container">
    <div className="section-info__all">
      <div className="section-info__right">
        
        <div className="title-2"><h2 className="title-2-2">{title}</h2></div>

        <div className="tottori-card-1">
        <div className="subtitle-2">
          <p className="subtitle-2-2">
             {text}
          </p>
        </div>

        <div><a href="#" className="card-link"></a></div>
      </div>
    </div>

      <div className="section-info__left">
        <div className="title-2">
          <h2 className="title-2-2">{title}</h2>
        </div>

        <div className="slick-wrap">
            <div>
                <div className="tottori-card-2">
                <div className="ava"><img src="./img/pngCard/avatar-1.jpg" alt="ava"/></div>
                <div className="ava-info">
                    <p className="ava-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, molestiae tempore eum, sed vero doloremque explicabo earum iure, a aspernatur perspiciatis autem adipisci? Provident hic assumenda labore nobis obcaecati delectus!</p>
                    {/* <p className="ava-name">Denis Green</p>
                    <span>Guest from London</span> */}
                </div>
              </div>
            </div>
            {/* <div>
                <div className="tottori-card-2">
                <div className="ava"><img src="./img/pngCard/avatar-1.jpg" alt="ava" /></div>
                <div className="ava-info">
                    <p className="ava-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, molestiae tempore eum, sed vero doloremque explicabo earum iure, a aspernatur perspiciatis autem adipisci? Provident hic assumenda labore nobis obcaecati delectus!</p>
                    <p className="ava-name">Denis Green</p>
                    <span>Guest from London</span>
                </div>
              </div>
            </div>
            <div>
                <div className="tottori-card-2">
                <div className="ava"><img src="./img/pngCard/avatar-1.jpg" alt="ava" /></div>
                <div className="ava-info">
                    <p className="ava-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, molestiae tempore eum, sed vero doloremque explicabo earum iure, a aspernatur perspiciatis autem adipisci? Provident hic assumenda labore nobis obcaecati delectus!</p>
                    <p className="ava-name">Denis Green</p>
                    <span>Guest from London</span>
                </div>
              </div>
            </div>
            <div>
                <div className="tottori-card-2">
                <div className="ava"><img src="./img/pngCard/avatar-1.jpg" alt="ava" /></div>
                <div className="ava-info">
                    <p className="ava-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, molestiae tempore eum, sed vero doloremque explicabo earum iure, a aspernatur perspiciatis autem adipisci? Provident hic assumenda labore nobis obcaecati delectus!</p>
                    <p className="ava-name">Denis Green</p>
                    <span>Guest from London</span>
                </div>
              </div>
            </div> */}
        </div> 
    </div>
      </div>
    </div>
  </div>
  
</section>
)
});

  
return <>{renderItems}</>
}

export default Info;