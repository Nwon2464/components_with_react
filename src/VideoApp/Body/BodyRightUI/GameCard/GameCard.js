import React from "react";

const GameCard = (props) => {
  return (
    <div className="game__category">
      <h3>
        <strong style={{ color: "#00b5ad" }}>{props.categories}</strong> we think you’ll
        like
      </h3>

      <div className="app__tower__gutter app__flex__tower app__flex__nowrap">
        {props.topGames.map((e, i) => {
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
                    <p>{props.checkViewers(e.gameViewers)}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="custom"></div>
    </div>
  );
};

export default GameCard;
