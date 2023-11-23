import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import { SectionV2Wrapper } from "./style";
import SecitonHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  // 从props获取数据
  const { infoData } = props;
  // 定义内部的state
  const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? "";
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);
  const tabClickHandle = useCallback(function (index, name) {
    setName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <SecitonHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SecitonHeader>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemwidth="33.3%" />
      <SectionFooter name={name}></SectionFooter>
    </SectionV2Wrapper>
  );
});
HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
