import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeLongforWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";
const HomeLongfor = memo((props) => {
  const { infoData } = props;
  return (
    <HomeLongforWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item, index) => {
            return (
              <div className="item" key={index}>
                <LongforItem itemData={item}></LongforItem>
              </div>
            );
          })}
        </ScrollView>
      </div>
    </HomeLongforWrapper>
  );
});

HomeLongfor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongfor;
