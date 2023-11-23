// import PropTypes from "prop-types";
import React, { memo, useEffect, useState, useRef } from "react";
import { ScrollViewWrapper, OutWrapper } from "./style";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";

const ScrollView = memo((props) => {
  // 定义内部状态
  const [showRight, setShowRight] = useState(false); // 控制右边按钮
  const [showLeft, setShowLeft] = useState(false); // 控制左边按钮
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();
  // 组件渲染完毕，判断是否显示右侧按钮
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);
  function controlClick(direction) {
    if (direction === "left") {
      const newIndex = posIndex - 1;
      const newEl = scrollContentRef.current.children[0].children[newIndex];
      const newOffsetLeft = newEl.offsetLeft;
      scrollContentRef.current.style.transform = `translate(+${newOffsetLeft}px)`;
      setPosIndex(newIndex);
      setShowLeft(newIndex > 0);
      // 是否继续显示右边的按钮
      setShowRight(totalDistanceRef.current > newOffsetLeft);
    } else {
      const newIndex = posIndex + 1;
      const newEl = scrollContentRef.current.children[0].children[newIndex];
      const newOffsetLeft = newEl.offsetLeft;
      scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
      setPosIndex(newIndex);
      setShowLeft(newIndex > 0);
      // 是否继续显示右边的按钮
      setShowRight(totalDistanceRef.current > newOffsetLeft);
    }
  }
  return (
    <OutWrapper>
      {showLeft && (
        <div className="direction-button" onClick={(e) => controlClick("left")}>
          <IconArrowLeft />
        </div>
      )}

      <ScrollViewWrapper>
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </ScrollViewWrapper>
      {showRight && (
        <div className="direction-button" onClick={(e) => controlClick("right")}>
          <IconArrowRight></IconArrowRight>
        </div>
      )}
    </OutWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
