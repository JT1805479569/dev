import React, { memo } from "react";
import { EntirePaginationWrapper } from "./style";
import { useDispatch,useSelector } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/createActions";

const EntirePagination = memo((props) => {
  // 从redux中获取roomList数据
  const { roomList, totalCount, currentPage } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
  }));
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  const dispatch = useDispatch();
  function pageChangeHandle(event, pageCount) {
    //回到顶部
    window.scrollTo(0, 0);
    // 更新最新的页码:redux => currentPage
    dispatch(fetchRoomListAction(pageCount - 1));
  }
  return <EntirePaginationWrapper>EntirePagination</EntirePaginationWrapper>;
});

EntirePagination.propTypes = {};

export default EntirePagination;
