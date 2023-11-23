import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWrapper } from "./style";
const SectionHeader = memo((props) => {
  const { title, subtitle = "默认子标题数据" } = props;

  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  );
});

// 接受父组件传值类型严重
SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHeader;
