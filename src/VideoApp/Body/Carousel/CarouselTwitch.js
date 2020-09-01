import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { datas } from "./carouseldata";
import "./Carousel.css";
import CarouselRight from "./CarouseRight";
import _ from "lodash";
const CarouselTwitch = () => {
  const [getTwitchLiveStream, setGetTwitchLiveStream] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/api/v1/twitch");
      setGetTwitchLiveStream(data);
    };
    fetchData();
  }, []);
  const check = (streams, i) => {
    if (streams.localization_names.length !== 1) {
      let a = _.mapKeys(streams.localization_names, "en-us");
      let b = Object.keys(a);
      return (
        <div>
          {b.map((e, i) => {
            return (
              <a style={{ marginLeft: "calc(15px * ${i})" }} href="#">
                {e}
              </a>
            );
          })}
        </div>
      );
    }

    return <a href="#">{streams.localization_names[0]["en-us"]}</a>;
  };

  const checkViewers = (views) => {
    if (views <= 999) {
      return <>{`${views} viewers`}</>;
    } else if (views < 999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000).toFixed(1)
        }K viewers`}</>
      );
    } else if (views <= 9999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000000).toFixed(1)
        }M viewers`}</>
      );
    }
  };

  return (
    <React.Fragment>
      {getTwitchLiveStream.map((streams, i) => {
        console.log(streams.viewer_count < 999);
        return <div>{checkViewers(999999)}</div>;
      })}
    </React.Fragment>
  );
};

export default CarouselTwitch;
