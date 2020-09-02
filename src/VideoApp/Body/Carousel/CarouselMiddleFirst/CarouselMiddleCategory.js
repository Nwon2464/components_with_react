import React, { useEffect, useState } from "react";
import "./CarouselMiddleCategory.css";
import axios from "axios";

const CarouselMiddleCategory = () => {
  const [topGames, setTopGames] = useState([]);
  useEffect(() => {
    const fetchTopGames = async () => {
      const {
        data: { data },
      } = await axios.get("http://localhost:5000/api/v1/twitch/topgames");
      //   console.log(data.data);
      let dataArray = data;
      dataArray.map((game) => {
        let newUrl = game.box_art_url
          .replace("{width}", "150")
          .replace("{height}", "190");
        game.box_art_url = newUrl;
      });
      // console.log(finalArray);
      setTopGames(data);
    };
    fetchTopGames();
  }, []);
  console.log(topGames);
  return (
    <div className="game__category">
      {topGames.map((e, i) => {
        return (
          <div key={i} className="game__all">
            <img src={e.box_art_url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default CarouselMiddleCategory;
