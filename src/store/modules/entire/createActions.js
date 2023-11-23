import * as actionTypes from "./constants";
import { getEntireRoomList } from "@/services/modules/entire";

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoading = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});
export const fetchRoomListAction = (page = 0) => {
  // 新的函数
  return async (dispatch, getState) => {
    // 1.根据当前页码获取最新数据
    dispatch(changeCurrentPageAction(page));
    dispatch(changeIsLoading(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(changeIsLoading(false));
    // 2.将获取到的新数据保存到store中
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  };
};
