import React from "react";
import "./Autocarousel.css";

import V1 from "../../../public/assets/imgs/artists/video1.mp4";
import V2 from "../../../public/assets/imgs/artists/video2.mp4";
import V3 from "../../../public/assets/imgs/artists/video3.mp4";
import V4 from "../../../public/assets/imgs/artists/video4.mp4";
// import V4 from "../../../public/assets/imgs/artists/video5.mp4";

const Autocarousel = () => {
    return (
        <div className="autocarousel-wrapper">
            <div className="elements">
                {/* <img src={A1} /> */}
                <video muted autoPlay loop>
                    <source src={V4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay loop>
                    <source src={V1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay loop>
                    <source src={V4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay loop>
                    <source src={V1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay loop>
                    <source src={V4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="elements">
                {/* <img src={A1} /> */}
                <video muted autoPlay loop>
                    <source src={V4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay loop>
                    <source src={V1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay loop>
                    <source src={V4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay loop>
                    <source src={V1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay loop>
                    <source src={V4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={A2} /> */}
                <video muted autoPlay loop>
                    <source src={V3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Autocarousel;
