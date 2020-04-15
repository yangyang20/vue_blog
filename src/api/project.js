import {request} from "./request";

export function getDataList(page) {
  return request({
    url:`project/${page}`,
  })
}