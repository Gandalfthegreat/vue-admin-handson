import request from "../utils/request";
export function fetchList(query) {
  return request({
    url: "/article/list",
    method: "get",
    params: query
  });
}
export function fetchComments(id) {
  return request({
    url: `article/${id}/comments`,
    method: "get"
  });
}
