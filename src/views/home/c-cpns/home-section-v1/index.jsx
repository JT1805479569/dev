import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV1Wrapper } from "./style";
import SecitonHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
const HomeSectionV1 = memo((props) => {
  // 从props获取数据
  const { infoData } = props;
  return (
    <SectionV1Wrapper>
      <SecitonHeader title={infoData.title} />
      <SectionRooms roomList={infoData.list} />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV1;
