import {request} from "./request";

export function getDataList(page) {
  return request({
    url:`timeline/${page}`,
  })
}