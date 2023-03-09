<template>
  <!--引用表格-->
  <BasicTable
    ref="tableRef"
    @register="registerTable"
    :rowSelection="rowSelection"
    @edit-end="handleEdit"
    @row-click="handleRowclick"
  >
    <!--插槽:table标题-->
    <template #tableTitle>
      <a-button type="primary" preIcon="ant-design:save-outlined" @click="createUser"
        >保存</a-button
      >
      <a-button type="primary" @click="createUser">插入</a-button>
      <!-- <a-button type="primary" @click="createUser">获取数据</a-button> -->
      <a-button type="primary" @click="createUser">导入</a-button>
      <a-button type="primary" @click="createUser">导出</a-button>
      <a-button type="primary" @click="createUser">打印</a-button>
      <a-switch
        v-model:checked="isEdit"
        checked-children="编辑"
        un-checked-children="编辑"
        style="margin-top: 4px"
      />
      <template v-if="selectedRowKeys.length > 0">
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" @click="onUnlinkDepartUserBatch">
                <icon icon="bx:bx-unlink" />
                <span>删除</span>
              </a-menu-item>
            </a-menu>
          </template>
          <a-button>
            <span>批量操作 </span>
            <icon icon="akar-icons:chevron-down" />
          </a-button>
        </a-dropdown>
      </template>
    </template>

    <!-- 筛选 -->
    <template #filterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
      <div style="padding: 8px">
        <a-input
          ref="searchInput"
          :placeholder="`筛选${column.customTitle}`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])"
          @keyup.enter="handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <a-button
          type="primary"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          筛选
        </a-button>
        <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
          重置
        </a-button>
      </div>
    </template>
  </BasicTable>
  <!--子表表格tab-->
  <a-tabs defaultActiveKey="1" style="margin: 10px">
    <a-tab-pane tab="关联表" key="1">
      <CodePropertyInfoTabSub :departId="departId" :orgType="orgType" />
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
  import { computed, inject, ref, unref, watch, provide } from 'vue';
  import { ActionItem, BasicTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import { useDrawer } from '/@/components/Drawer';
  import { useListPage } from '/@/hooks/system/useListPage';

  import UserDrawer from '/@/views/system/user/UserDrawer.vue';
  import UserSelectModal from '/@/components/Form/src/hexagon/components/modal/UserSelectModal.vue';
  import { codePropertyDetail } from '../code.property.api';
  import { codePropertyDetailSearchFormSchema } from '../code.property.data';
  import * as property from '../code.property.data';

  import { ColEx } from '/@/components/Form/src/types';

  import CodePropertyInfoTabSub from './CodePropertyInfoTabSub.vue';
  import { func } from 'vue-types';
  import { darkStyleTagId } from 'vite-plugin-theme/es/client';

  const isEdit = ref(false);

  const prefixCls = inject('prefixCls');
  const props = defineProps({
    data: { require: true, type: Object },
  });
  // 当前选中的部门ID，可能会为空，代表未选择部门
  const departId = computed(() => props.data?.id);
  //树的层级
  const orgType = computed(() => props.data?.orgType);
  // 现在使用的列
  const nowColumns = computed(() => {
    return property['codeParentColumns' + orgType.value] || [];
  });
  // 自适应列配置
  const adaptiveColProps: Partial<ColEx> = {
    xs: 24, // <576px
    sm: 24, // ≥576px
    md: 24, // ≥768px
    lg: 12, // ≥992px
    xl: 12, // ≥1200px
    xxl: 8, // ≥1600px
  };
  // 列表页面公共参数、方法
  const { tableContext, createMessage } = useListPage({
    tableProps: {
      api: codePropertyDetail,
      columns: nowColumns,
      canResize: false,
      showActionColumn: false, // 是否显示操作列
      rowClassName: setClassName,
      formConfig: {
        schemas: codePropertyDetailSearchFormSchema,
        baseColProps: adaptiveColProps,
        labelAlign: 'left',
        labelCol: {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 9,
          xl: 7,
          xxl: 5,
        },
        wrapperCol: {},
        // 操作按钮配置
        actionColOptions: {
          ...adaptiveColProps,
          style: { textAlign: 'left' },
        },
      },
      // 请求之前对参数做处理
      beforeFetch(params) {
        params.depId = departId.value;
      },
    },
  });

  // 注册 ListTable
  const [
    registerTable,
    { reload, getRawDataSource, setTableData, setLoading, updateTableDataRecord },
    { rowSelection, selectedRowKeys },
  ] = tableContext;
  const tableRef = ref<any>(null);
  function getTableAction() {
    console.log(34324);
    const tableAction = unref(tableRef);
    if (!tableAction) {
      throw new Error('tableAction is null');
    }
    return tableAction;
  }
  watch(
    () => props.data,
    () => {
      id.value = 0;
      getTableAction().reload();
    },
  );

  // Added By zzx 20230305 下发 id,子组件接收
  const id = ref(0);
  provide('id', id);

  // 清空选择的行
  // function clearSelection() {
  //   selectedRowKeys.value = [];
  // }

  //编辑完成
  function handleEdit({ record, index, key, value }) {
    console.log('编辑完成', record, index, key, value);
  }
  //单击行高亮
  function setClassName(record) {
    return id.value == record.id ? 'dbclick' : '';
  }
  //单击行触发
  function handleRowclick(record, index, event) {
    id.value = record.id;
  }
  function createUser() {}
  //筛选
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };
  const handleReset = (clearFilters) => {
    clearFilters();
  };
</script>
