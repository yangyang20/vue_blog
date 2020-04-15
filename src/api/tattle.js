import {request} from "./request";

export function getDataList(page) {
  return request({
    url:`tattle/${page}`,
  })
}

export function getDataDetail(id) {
  return request({
    url:`tattle/detail/${id}`,
  })
}