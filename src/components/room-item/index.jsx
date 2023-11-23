import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";
const RoomItem = memo((props) => {
  const { itemData, itemwidth = "25%",itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const itemDatas = [];
  for (let i = 0; i < 10; i++) {
    itemDatas.push(itemData);
  }
  const swiperRef = useRef();
  function controlClickHandle(direction) {
    if (direction === "left") {
      if (selectIndex > 0) {
        setSelectIndex(selectIndex - 1);
        swiperRef.current.prev();
      }
    } else {
      if (selectIndex < itemDatas.length - 1) {
        setSelectIndex(selectIndex + 1);
        swiperRef.current.next();
      }
    }
  }
  return (
    <ItemWrapper
      verifycolor={itemData?.verify_info?.text_color || "#39576a"}
      itemwidth={itemwidth}
      onClick={itemClick}
    >
      <div className="inner">
        <div className="swiper">
          <div className="control">
            <div
              className="btn left"
              onClick={(e) => controlClickHandle("left")}
            >
              <IconArrowLeft width="30" height="30" />
            </div>
            <div
              className="btn right"
              onClick={(e) => controlClickHandle("right")}
            >
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {itemDatas?.map((item, index) => {
                return (
                  <div className="dot-item" key={index}>
                    <span
                      className={classNames("dot", {
                        active: selectIndex === index,
                      })}
                      key={index}
                    ></span>
                  </div>
                );
              })}
            </Indicator>
          </div>
          <Carousel dots={false} ref={swiperRef}>
            {itemDatas?.map((item, index) => {
              return (
                <div className="cover" key={index}>
                  <img src={item.picture_url} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="desc">{itemData.verify_info.messages.join(".")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A" }}
          ></Rating>
          <span className="count">{itemData.reviews_count}</span>
          {itemData?.bottom_info?.content && (
            <span className="extra">{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
