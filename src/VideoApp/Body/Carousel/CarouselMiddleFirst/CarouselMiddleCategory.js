import React, { useEffect, useState } from "react";
// import "./CarouselMiddleCategory.css";
import "./CarouselMiddleLiveChannel.css";
import axios from "axios";

const CarouselMiddleCategory = () => {
  const [topGames, setTopGames] = useState([]);
  useEffect(() => {
    const fetchTopGames = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/twitch/topgames"
      );
      //   console.log(data);
      let dataArray = data;
      //   //   console.log(dataArray);
      dataArray.map((game) => {
        let newUrl = game.box_art_url
          .replace("{width}", "180")
          .replace("{height}", "240");
        game.box_art_url = newUrl;
      });
      // console.log(finalArray);
      setTopGames(data);
    };
    fetchTopGames();
  }, []);

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

  console.log(topGames);
  return (
    <div className="game__category">
      <div className="app__tower__gutter app__flex__tower app__flex__nowrap">
        {topGames.map((e, i) => {
          return (
            <div
              key={i}
              className="app__tower__120 app__tower__padding__gutter"
            >
              <div className="app__card__padding_bottom app__card__height">
                <div className="app__relative">
                  <div className="app__flex__column app__flex app__flex__nowrap">
                    <img src={e.box_art_url} alt="" />
                    <div className="app__ellipsis app__margin__top app__flex__shrink__1 app__flex__grow__1 app__color app__font__weight">
                      {e.name}
                    </div>
                    <p>{checkViewers(e.gameViewers)}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselMiddleCategory;
