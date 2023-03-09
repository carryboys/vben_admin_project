import { Ref, h } from 'vue';
import { duplicateCheck } from '/@/views/system/user/user.api';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description';
import { findTree } from '/@/utils/common/compUtils';
import { contextmenu } from '/@/tools/contextMenu';
import { Switch } from 'ant-design-vue';

// 属性信息 columns
//一级表
export const codeParentColumns1: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 50,
    customCell: contextmenu,
  },
  {
    title: '表名',
    dataIndex: 'tablename',
    width: 120,
    edit: true,
    sorter: (a: any, b: any) => a.tablename.length - b.tablename.length,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.tablename == value;
    },
    customCell: contextmenu,
  },
  {
    title: '短描述',
    dataIndex: 'shortDescription',
    width: 120,
    edit: true,
    sorter: (a: any, b: any) => a.shortDescription.length - b.shortDescription.length,
    customCell: contextmenu,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.shortDescription == value;
    },
  },
  {
    title: '长描述',
    dataIndex: 'longDescription',
    width: 120,
    edit: true,
    sorter: (a: any, b: any) => a.longDescription.length - b.longDescription.length,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.longDescription == value;
    },
    customCell: contextmenu,
  },
  {
    title: '主表',
    dataIndex: 'pclass',
    width: 80,
    edit: true,
    editComponent: 'Switch',
    editRender: ({ text }) => {
      return h(Switch, { checked: Boolean(text) });
    },
    customCell: contextmenu,
  },
  {
    title: '尺寸',
    dataIndex: 'size',
    width: 80,
    edit: true,
    editComponent: 'Switch',
    editRender: ({ text }) => {
      return h(Switch, { checked: Boolean(text) });
    },
    customCell: contextmenu,
  },
  {
    title: 'ident NLS',
    dataIndex: 'ident',
    width: 80,
    edit: true,
    editComponent: 'Switch',
    editRender: ({ text }) => {
      return h(Switch, { checked: Boolean(text) });
    },
    customCell: contextmenu,
  },
  {
    title: '关联表',
    dataIndex: 'linksExit',
    width: 80,
    edit: true,
    editComponent: 'Switch',
    editRender: ({ text }) => {
      return h(Switch, { checked: Boolean(text) });
    },
    customCell: contextmenu,
  },
];

// 二级表
export const codeParentColumns2: BasicColumn[] = [
  {
    title: '表类',
    dataIndex: 'tablename',
    edit: true,
    width: 120,
    sorter: (a: any, b: any) => a.tablename.length - b.tablename.length,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.tablename == value;
    },
    customCell: contextmenu,
  },
  {
    title: 'standard',
    dataIndex: 'standard',
    edit: true,
    width: 120,
    sorter: (a: any, b: any) => a.standard.length - b.standard.length,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.standard == value;
    },
    customCell: contextmenu,
  },
  {
    title: '短描述',
    dataIndex: 'shortDescription',
    edit: true,
    width: 120,
    sorter: (a: any, b: any) => a.shortDescription.length - b.shortDescription.length,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.shortDescription == value;
    },
    customCell: contextmenu,
  },
  {
    title: '长描述',
    dataIndex: 'longDescription',
    edit: true,
    width: 120,
    sorter: (a: any, b: any) => a.longDescription.length - b.longDescription.length,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.longDescription == value;
    },
    customCell: contextmenu,
  },
  {
    title: '状态',
    dataIndex: 'ctrl',
    width: 120,
    edit: true,
    editComponent: 'Select',
    editComponentProps: {
      options: [
        {
          label: '1',
          value: 1,
        },
        {
          label: '2',
          value: 2,
        },
      ],
    },
    customCell: contextmenu,
  },
  {
    title: '关联表',
    dataIndex: 'linksExit',
    width: 80,
    edit: true,
    editComponent: 'Switch',
    editRender: ({ text }) => {
      return h(Switch, { checked: Boolean(text) });
    },
    customCell: contextmenu,
  },
];

// 三级表
export const codeParentColumns3: BasicColumn[] = [
  {
    title: '表详情',
    dataIndex: 'tablename',
    edit: true,
    width: 120,
    sorter: (a: any, b: any) => a.tablename.length - b.tablename.length,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.tablename == value;
    },
    customCell: contextmenu,
  },
  {
    title: '短描述',
    dataIndex: 'shortDescription',
    edit: true,
    width: 120,
    sorter: (a: any, b: any) => a.shortDescription.length - b.shortDescription.length,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.shortDescription == value;
    },
    customCell: contextmenu,
  },
  {
    title: '长描述',
    dataIndex: 'longDescription',
    edit: true,
    width: 120,
    sorter: (a: any, b: any) => a.longDescription.length - b.longDescription.length,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.longDescription == value;
    },
    customCell: contextmenu,
  },
  {
    title: '状态',
    dataIndex: 'ctrl',
    width: 120,
    edit: true,
    editComponent: 'Select',
    editComponentProps: {
      options: [
        {
          label: '1',
          value: 1,
        },
        {
          label: '2',
          value: 2,
        },
      ],
    },
    customCell: contextmenu,
  },
  {
    title: '上级详情',
    dataIndex: 'pTablename',
    width: 80,
    sorter: (a: any, b: any) => a.pTablename.length - b.pTablename.length,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.pTablename == value;
    },
    customCell: contextmenu,
  },
  {
    title: '上级短描述',
    dataIndex: 'pShortDescription',
    width: 80,
    sorter: (a: any, b: any) => a.pShortDescription.length - b.pShortDescription.length,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.pShortDescription == value;
    },
    customCell: contextmenu,
  },
  {
    title: 'TD',
    dataIndex: 'td',
    width: 80,
    sorter: (a: any, b: any) => a.td - b.td,
    slots: {
      filterDropdown: 'filterDropdown',
    },
    onFilter: (value, record: any) => {
      return record.td == value;
    },
    customCell: contextmenu,
  },
  {
    title: '关联表',
    dataIndex: 'linksExit',
    width: 80,
    edit: true,
    editComponent: 'Switch',
    editRender: ({ text }) => {
      return h(Switch, { checked: Boolean(text) });
    },
    customCell: contextmenu,
  },
];

// 四级表
export const codeParentColumns4: BasicColumn[] = [];

// 属性信息查询条件表单
export const codePropertyDetailSearchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '名称',
    component: 'Input',
  },
];

// 部门角色 columns
export const departRoleColumns: BasicColumn[] = [
  {
    title: '部门角色名称',
    dataIndex: 'roleName',
    width: 100,
  },
  {
    title: '部门角色编码',
    dataIndex: 'roleCode',
    width: 100,
  },
  {
    title: '部门',
    dataIndex: 'departId_dictText',
    width: 100,
  },
  {
    title: '备注',
    dataIndex: 'description',
    width: 100,
  },
];

// 部门角色查询条件表单
export const departRoleSearchFormSchema: FormSchema[] = [
  {
    field: 'roleName',
    label: '部门角色名称',
    component: 'Input',
  },
];

// 部门角色弹窗form表单
export const departRoleModalFormSchema: FormSchema[] = [
  {
    label: 'id',
    field: 'id',
    component: 'Input',
    show: false,
  },
  {
    field: 'roleName',
    label: '部门角色名称',
    component: 'Input',
    propertys: [
      { required: true, message: '部门角色名称不能为空！' },
      { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' },
    ],
  },
  {
    field: 'roleCode',
    label: '部门角色编码',
    component: 'Input',
    dynamicDisabled: ({ values }) => {
      return !!values.id;
    },
    dynamicPropertys: ({ model }) => {
      return [
        { required: true, message: '部门角色编码不能为空！' },
        { min: 0, max: 64, message: '长度不能超过 64 个字符', trigger: 'blur' },
        {
          validator: (_, value) => {
            if (/[\u4E00-\u9FA5]/g.test(value)) {
              return Promise.reject('部门角色编码不可输入汉字！');
            }
            return new Promise((resolve, reject) => {
              const params = {
                tableName: 'sys_depart_role',
                fieldName: 'role_code',
                fieldVal: value,
                dataId: model.id,
              };
              duplicateCheck(params)
                .then((res) => {
                  res.success ? resolve() : reject(res.message || '校验失败');
                })
                .catch((err) => {
                  reject(err.message || '验证失败');
                });
            });
          },
        },
      ];
    },
  },
  {
    field: 'description',
    label: '描述',
    component: 'Input',
    propertys: [{ min: 0, max: 126, message: '长度不能超过 126 个字符', trigger: 'blur' }],
  },
];

// 基本信息form
export function useBaseInfoForm(treeData: Ref<any[]>) {
  const descItems: DescItem[] = [
    {
      field: 'departName',
      label: '机构名称',
    },
    {
      field: 'parentId',
      label: '上级部门',
      render(val) {
        if (val) {
          const data = findTree(treeData.value, (item) => item.key == val);
          return data?.title ?? val;
        }
        return val;
      },
    },
    {
      field: 'orgCode',
      label: '机构编码',
    },
    {
      field: 'orgCategory',
      label: '机构类型',
      render(val) {
        if (val === '1') {
          return '公司';
        } else if (val === '2') {
          return '部门';
        } else if (val === '3') {
          return '岗位';
        }
        return val;
      },
    },
    {
      field: 'departOrder',
      label: '排序',
    },

    {
      field: 'mobile',
      label: '手机号',
    },
    {
      field: 'address',
      label: '地址',
    },
    {
      field: 'memo',
      label: '备注',
    },
  ];

  return { descItems };
}
