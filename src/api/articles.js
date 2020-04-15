import {request} from "./request";

export function getDataList(page) {
  return request({
    url:`articles/${page}`,
  })
}

export function getDataInfo(id) {
  return request({
    url:`articles/detail/${id}`,
  })
}