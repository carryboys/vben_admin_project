import { defHttp } from '/@/utils/http/axios';

enum Api {
  // list = '/sys/log/list',
  list = '/sys/log/list.json',
}

/**
 * 查询日志列表
 * @param params
 */
export const getLogList = (params) => {
  return defHttp.get({ url: Api.list, params });
};
