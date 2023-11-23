import jtRequest from "..";

export function getHomeGoodPriceData() {
  return jtRequest.get({
    url: "/home/goodPrice",
  });
}

export function getHomeHighScoreData() {
  return jtRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return jtRequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return jtRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongForData() {
  return jtRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData() {
  return jtRequest.get({
    url: "/home/plus",
  });
}
