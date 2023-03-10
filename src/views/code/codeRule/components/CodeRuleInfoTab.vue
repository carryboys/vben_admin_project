<template>
  <!--引用表格-->
  <BasicTable
    @row-contextmenu="handleContext"
    @register="registerTable"
    :rowSelection="rowSelection"
    @row-click="rowClick"
  >
    <!--插槽:table标题-->
    <template #tableTitle>
      <a-button type="primary" preIcon="ant-design:save-outlined" @click=""
        >保存</a-button
      >
      <a-button type="primary" @click="">插入</a-button>
      <!-- <a-button type="primary" @click="">获取数据</a-button> -->
      <!-- <a-button type="primary" @click="">排序</a-button> -->
      <a-button type="primary" @click="">导入</a-button>
      <a-button type="primary" @click="onExportXls">导出</a-button>
      <a-button type="primary" @click="">打印</a-button>
      <!-- <a-button type="primary" @click="getSelectRowKeys">获取keys</a-button> -->
      <!-- <a-switch
        v-model:checked="isEdit"
        checked-children="编辑"
        un-checked-children="编辑"
        style="margin-top: 4px"
      /> -->
      <a-switch
        v-model:checked="isShrink"
        checked-children="收缩"
        un-checked-children="收缩"
        style="margin-top: 4px"
      />
      <template v-if="selectedRowKeys.length > 0">
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" @click="deleteByKey">
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
  </BasicTable>
</template>

<script lang="ts" setup>
  import { computed, inject, ref, unref, watch } from 'vue';
  import { ActionItem, BasicTable, TableAction } from '/@/components/Table';
  // import { useModal } from '/@/components/Modal';
  // import { useDrawer } from '/@/components/Drawer';
  // import { useContextMenu } from '/@/hooks/web/useContextMenu';
  // import { useMessage } from '/@/hooks/web/useMessage';
  import { useListPage } from '/@/hooks/system/useListPage';
  // import { ContextMenuItem } from '/@/components/Tree';
  // import UserDrawer from '/@/views/system/user/UserDrawer.vue';
  // import UserSelectModal from '/@/components/Form/src/hexagon/components/modal/UserSelectModal.vue';
  import { codeRuleDetail } from '../code.rule.api';
  import { userInfoColumns, userInfoSearchFormSchema } from '../code.rule.data';
  import { ColEx } from '/@/components/Form/src/types';
  import { contextmenu } from '/@/tools/contextMenu';
  // import { operateFn } from '/@/tools/operate';

  const isEdit = ref(false);
  const isShrink = ref(false);

  const prefixCls = inject('prefixCls');
  const props = defineProps({
    data: { require: true, type: Object },
  });
  // 当前选中的部门ID，可能会为空，代表未选择部门
  const departId = computed(() => props.data?.id);

  // 自适应列配置
  const adaptiveColProps: Partial<ColEx> = {
    xs: 24, // <576px
    sm: 24, // ≥576px
    md: 24, // ≥768px
    lg: 12, // ≥992px
    xl: 12, // ≥1200px
    xxl: 8, // ≥1600px
  };
  // 切换是否可以编辑
  // function editStatusChange() {
  //   userInfoColumns.map((item) => {
  //     if (item.edit != undefined) {
  //       item.edit = isEdit.value;
  //     }
  //   });
  //   console.log(userInfoColumns);
  //   reload();
  // }
  const columnsData: BasicColumn[] = [
    {
      title: '输入框',
      dataIndex: 'name',
      edit: true,
      editComponentProps: {
        prefix: '$',
      },
      width: 200,
    },
    // {
    //   title: '默认输入状态',
    //   dataIndex: 'name7',
    //   edit: true,
    //   editable: true,
    //   width: 200,
    // },
    // {
    //   title: '输入框校验',
    //   dataIndex: 'name1',
    //   edit: true,
    //   // 默认必填校验
    //   editRule: true,
    //   width: 200,
    // },
    // {
    //   title: '输入框函数校验',
    //   dataIndex: 'name2',
    //   edit: true,
    //   editRule: async (text) => {
    //     if (text === '2') {
    //       return '不能输入该值';
    //     }
    //     return '';
    //   },
    //   width: 200,
    // },
    // {
    //   title: '数字输入框',
    //   dataIndex: 'id',
    //   edit: true,
    //   editRule: true,
    //   editComponent: 'InputNumber',
    //   width: 200,
    //   editComponentProps: () => {
    //     return {
    //       max: 100,
    //       min: 0,
    //     };
    //   },
    //   editRender: ({ text }) => {
    //     return h(Progress, { percent: Number(text) });
    //   },
    // },
    // {
    //   title: '下拉框',
    //   dataIndex: 'name3',
    //   edit: true,
    //   editComponent: 'Select',
    //   editComponentProps: {
    //     options: [
    //       {
    //         label: 'Option1',
    //         value: '1',
    //       },
    //       {
    //         label: 'Option2',
    //         value: '2',
    //       },
    //     ],
    //   },
    //   width: 200,
    // },
    // {
    //   title: '远程下拉',
    //   dataIndex: 'name4',
    //   edit: true,
    //   editComponent: 'ApiSelect',
    //   editComponentProps: {
    //     api: optionsListApi,
    //     resultField: 'list',
    //     labelField: 'name',
    //     valueField: 'id',
    //   },
    //   width: 200,
    // },
    // {
    //   title: '远程下拉树',
    //   dataIndex: 'name8',
    //   edit: true,
    //   editComponent: 'ApiTreeSelect',
    //   editRule: false,
    //   editComponentProps: {
    //     api: treeOptionsListApi,
    //     resultField: 'list',
    //   },
    //   width: 200,
    // },
    // {
    //   title: '日期选择',
    //   dataIndex: 'date',
    //   edit: true,
    //   editComponent: 'DatePicker',
    //   editComponentProps: {
    //     valueFormat: 'YYYY-MM-DD',
    //     format: 'YYYY-MM-DD',
    //   },
    //   width: 200,
    // },
    // {
    //   title: '时间选择',
    //   dataIndex: 'time',
    //   edit: true,
    //   editComponent: 'TimePicker',
    //   editComponentProps: {
    //     valueFormat: 'HH:mm',
    //     format: 'HH:mm',
    //   },
    //   width: 200,
    // },
    // {
    //   title: '勾选框',
    //   dataIndex: 'name5',
    //   edit: true,
    //   editComponent: 'Checkbox',
    //   editValueMap: (value) => {
    //     return value ? '是' : '否';
    //   },
    //   width: 200,
    // },
    // {
    //   title: '开关',
    //   dataIndex: 'name6',
    //   edit: true,
    //   editComponent: 'Switch',
    //   editValueMap: (value) => {
    //     return value ? '开' : '关';
    //   },
    //   width: 200,
    // },
    // {
    //   title: '单选框',
    //   dataIndex: 'radio1',
    //   edit: true,
    //   editComponent: 'RadioGroup',
    //   editComponentProps: {
    //     options: [
    //       {
    //         label: '选项1',
    //         value: '1',
    //       },
    //       {
    //         label: '选项2',
    //         value: '2',
    //       },
    //     ],
    //   },
    //   width: 200,
    // },
    // {
    //   title: '单选按钮框',
    //   dataIndex: 'radio2',
    //   edit: true,
    //   editComponent: 'RadioButtonGroup',
    //   editComponentProps: {
    //     options: [
    //       {
    //         label: '选项1',
    //         value: '1',
    //       },
    //       {
    //         label: '选项2',
    //         value: '2',
    //       },
    //     ],
    //   },
    //   width: 200,
    // },
    // {
    //   title: '远程单选框',
    //   dataIndex: 'radio3',
    //   edit: true,
    //   editComponent: 'ApiRadioGroup',
    //   editComponentProps: {
    //     api: optionsListApi,
    //     resultField: 'list',
    //     labelField: 'name',
    //     valueField: 'id',
    //   },
    //   width: 200,
    // },
  ];
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    tableProps: {
      api: codeRuleDetail,
      columns: userInfoColumns,
      canResize: true,
      showActionColumn: false, // 是否显示操作列
      formConfig: {
        schemas: userInfoSearchFormSchema,
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
    { reload, setProps, setLoading, updateTableDataRecord,deleteSelectRowByKey,getSelectRows,deleteTableDataRecord,clearSelectedRowKeys},
    { rowSelection, selectedRowKeys},
  ] = tableContext;

  watch(
    () => props.data,
    () => reload(),
  );
  // 清空选择的行
  function clearSelection() {
    selectedRowKeys.value = [];
  }
  // 行单击触发
  function rowClick(record, index) {
    selectedRowKeys.value = [];
    selectedRowKeys.value.push(record.id);
  }
  // 右键菜单
  function handleContext(record,index,e: MouseEvent) {
    contextmenu(record,index,tableContext).onContextmenu(e)
  }
  // 获取选中key
  // function getSelectRowKeys(){
  //   console.log(rowSelection)
  //   console.log(clearSelectedRowKeys())
  // }
  // 删除选中
  function deleteByKey(){
    deleteTableDataRecord(selectedRowKeys.value)
    clearSelectedRowKeys()
  }
</script>
