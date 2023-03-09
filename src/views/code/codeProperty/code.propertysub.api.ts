import { unref } from 'vue';
import { defHttp } from '/@/utils/http/axios';
import { useMessage } from '/@/hooks/web/useMessage';

const { createConfirm } = useMessage();

enum Api {
  /* treeList = '/sys/sysDepart/queryMyDeptTreeList',
  queryIdTree = '/sys/sysDepart/queryIdTree',
  searchBy = '/sys/sysDepart/searchBy', */
  treeList = '/sys/code/queryCodePropertyTreeList.json',
  queryIdTree = '/sys/code/queryIdCodePropertyTree.json',
  searchBy = '/sys/code/searchCodePropertyBy.json',
}

// 属性用户API
enum CodePropertyApi {
  /* detailsub = '/sys/code/codePropertyDetailSub', */
  detailsub = '/sys/code/codePropertyDetailSub.json',
}

/**
 * 获取属性树列表
 */
export const queryCodePropertyTreeList = (params?) =>
  defHttp.get({ url: Api.treeList, params }, { isTransformResponse: false });

/**
 * 查询数据，以树结构形式加载所有属性的名称
 */
export const queryIdTree = (params?) => defHttp.get({ url: Api.queryIdTree, params });

/**
 * 根据关键字搜索属性
 */
export const searchByKeywords = (params) => defHttp.get({ url: Api.searchBy, params });

/**
 * 查询属性下的用户信息
 */
export const codePropertyDetailSub = (params) => {
  if (!params.depId)
    return new Promise((resolve, reject) => {
      reject();
    });
  const url = '/sys/code/codePropertyDetailSub.' + params.depId + '.json';
  return defHttp.get({ url: url, params });
  // defHttp.get({ url: CodePropertyApi.detailsub, params });
};
