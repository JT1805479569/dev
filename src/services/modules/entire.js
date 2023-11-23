import jtRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return jtRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
