<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-07 09:14:32
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-09 14:25:28
 * @FilePath: \vue-vben-admin_20230306-1\src\views\code\codeProperty\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-row :class="['code-main', 'p-4', `${prefixCls}--box`]" :gutter="10">
    <a-col :xl="4" :lg="6" :md="8" :sm="24" style="flex: 1">
      <a-card :bordered="false" class="hexagon-card" style="height: 100%">
        <CodePropertyTree @select="onTreeSelect" />
      </a-card>
    </a-col>
    <a-col :xl="20" :lg="18" :md="16" :sm="24" style="flex: 1">
      <a-card :bordered="false" style="height: 100%">
        <a-tabs defaultActiveKey="code-info">
          <a-tab-pane tab="属性详情" key="base-info" forceRender>
            <CodePropertyInfoTab :data="codeData" />
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup name="system-code-property">
  import { provide, ref } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  import CodePropertyTree from './components/CodePropertyTree.vue';
  import CodePropertyInfoTab from './components/CodePropertyInfoTab.vue';

  const { prefixCls } = useDesign('code-property');
  provide('prefixCls', prefixCls);

  // 当前选中的部门信息
  let codeData = ref({});

  // 左侧树选择后触发
  function onTreeSelect(data) {
    codeData.value = data;
  }
</script>

<style lang="less">
  @import './index.less';
</style>
<style lang="less" scoped>
  // Added By zzx 20230305
  // :deep(.ant-input-group-addon) {
  //   top: -1px !important;
  // }

  :deep(.hexagon-card .ant-card-body) {
    padding: 12px !important;
  }

  :deep(.hexagon-basic-table-form-container) {
    padding: 0px !important;
  }
</style>
