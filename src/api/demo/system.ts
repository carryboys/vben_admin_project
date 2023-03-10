import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
  TenantListParams,
  TenantListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  AccountList = '/into3dbaseback/system/getAccountList',
  IsAccountExist = '/into3dbaseback/system/accountExist',
  DeptList = '/into3dbaseback/system/getDeptList',
  setRoleStatus = '/into3dbaseback/system/setRoleStatus',
  MenuList = '/into3dbaseback/system/getMenuList',
  RolePageList = '/into3dbaseback/system/getRoleListByPage',
  GetAllRoleList = '/into3dbaseback/system/getAllRoleList',
  TenantList = '/into3dbaseback/system/getTenantList',
}

// 账号管理
export const getAccountList = (params: AccountParams) => {
  const result = {
    code: 0,
    result: {
      items: [
        {
          id: '0',
          account: 'Sharon',
          email: 'h.hkjq@pqtqw.tk',
          nickname: '余芳',
          role: 'Mark',
          createTime: '2009-05-08 07:14:05',
          remark: '共较参团专决人同华厂收走少称',
          status: '1',
        },
        {
          id: '1',
          account: 'Dorothy',
          email: 'g.tsd@nlgok.中国互联.公司',
          nickname: '杨军',
          role: 'Jessica',
          createTime: '2004-09-11 10:29:21',
          remark: '向局最毛府是指形经山必增',
          status: '1',
        },
        {
          id: '2',
          account: 'Jeffrey',
          email: 'k.lmzredvstn@vkhl.pl',
          nickname: '廖军',
          role: 'Christopher',
          createTime: '1993-01-18 06:11:30',
          remark: '效团斗得飞总务更连见美看可',
          status: '0',
        },
        {
          id: '3',
          account: 'Betty',
          email: 'o.vpncn@wetjvw.as',
          nickname: '张艳',
          role: 'Matthew',
          createTime: '2016-08-24 20:31:09',
          remark: '果确科东使百华小事装',
          status: '1',
        },
        {
          id: '4',
          account: 'Steven',
          email: 'g.ttvnskljrt@xmj.tt',
          nickname: '阎秀英',
          role: 'Melissa',
          createTime: '2021-10-29 04:31:28',
          remark: '应社力支多都金火越育实是王分山必车变点',
          status: '1',
        },
        {
          id: '5',
          account: 'Ronald',
          email: 'l.xyjhm@mweyqjw.cm',
          nickname: '毛平',
          role: 'Donald',
          createTime: '1976-01-14 18:53:48',
          remark: '使清度中强委话你权山温素西教团',
          status: '0',
        },
        {
          id: '6',
          account: 'Michael',
          email: 'r.jflece@yufmuierg.td',
          nickname: '崔静',
          role: 'Matthew',
          createTime: '1975-04-06 00:38:03',
          remark: '区社如农因们术只什改特者将即他电命',
          status: '1',
        },
        {
          id: '7',
          account: 'Steven',
          email: 'i.xttsp@bfp.ng',
          nickname: '毛芳',
          role: 'Richard',
          createTime: '2012-02-17 19:52:09',
          remark: '精较精拉则等已农白多交影究青类政也但京',
          status: '1',
        },
        {
          id: '8',
          account: 'William',
          email: 't.pwsby@qnmvqyur.pl',
          nickname: '崔超',
          role: 'Paul',
          createTime: '2002-12-26 02:52:55',
          remark: '等第件完机标节离型层界风内带资系金',
          status: '1',
        },
        {
          id: '9',
          account: 'Maria',
          email: 'r.lqwrlmf@ozxunr.uy',
          nickname: '谢军',
          role: 'Jose',
          createTime: '1996-09-21 05:42:52',
          remark: '体划能标党点专级率习分列然音各无此',
          status: '0',
        },
      ],
      total: 20,
    },
    message: 'ok',
    type: 'success',
  };
  return result.result;
  // defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });
};

// 账号管理，新增/修改账号，获取所有角色列表
export const getAllRoleList = (params?: RoleParams) => {
  const result = {
    code: 0,
    result: [
      {
        id: 1,
        orderNo: '1',
        roleName: '超级管理员',
        roleValue: 'Lisa',
        createTime: '2021-08-18 10:19:52',
        remark: '但进家院置教同政体加增现用整律质',
        menu: ['0', '1', '2'],
        status: '1',
      },
      {
        id: 2,
        orderNo: '2',
        roleName: '管理员',
        roleValue: 'Elizabeth',
        createTime: '1976-12-13 16:03:52',
        remark: '习说真劳响质关现影转石温量列线在',
        menu: ['0', '1'],
        status: '0',
      },
      {
        id: 3,
        orderNo: '3',
        roleName: '文章管理员',
        roleValue: 'George',
        createTime: '1995-10-15 17:32:57',
        remark: '具根型社决例百自等维维利个',
        menu: ['0', '2'],
        status: '0',
      },
      {
        id: 4,
        orderNo: '4',
        roleName: '普通用户',
        roleValue: 'Barbara',
        createTime: '1970-07-18 20:44:09',
        remark: '省心称她受并把越应目反多地',
        menu: ['2'],
        status: '0',
      },
    ],
    message: 'ok',
    type: 'success',
  };
  return result.result;
  // defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });
};

// 账号管理，新增输入账号验证是否重复
export const isAccountExist = (account: string) => {
  // defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });
};

// 部门管理
export const getDeptList = (params?: DeptListItem) => {
  const result = {
    code: 0,
    result: [
      {
        id: '0',
        deptName: '华东分部',
        orderNo: 1,
        createTime: '2014-01-14 11:12:41',
        remark: '等说亲件却问花常却光国被数特性',
        status: '0',
        children: [
          {
            id: '0-0',
            deptName: '研发部',
            orderNo: 1,
            createTime: '1985-07-06 14:02:42',
            remark: '领严音和接查统化与平每积放月组资林规国',
            status: '1',
            parentDept: '0',
          },
          {
            id: '0-1',
            deptName: '市场部',
            orderNo: 2,
            createTime: '1989-04-25 20:21:15',
            remark: '思标装具即制然海置按作路认以整形义决',
            status: '0',
            parentDept: '0',
          },
          {
            id: '0-2',
            deptName: '商务部',
            orderNo: 3,
            createTime: '1983-09-09 18:05:48',
            remark: '劳备少角共领一很难走亲万听接半内',
            status: '0',
            parentDept: '0',
          },
          {
            id: '0-3',
            deptName: '财务部',
            orderNo: 4,
            createTime: '2002-02-08 11:05:02',
            remark: '专生属比适划精改电经特属回',
            status: '0',
            parentDept: '0',
          },
        ],
      },
      {
        id: '1',
        deptName: '华南分部',
        orderNo: 2,
        createTime: '2003-01-26 18:50:06',
        remark: '干成论温太满处数记自受',
        status: '1',
        children: [
          {
            id: '1-0',
            deptName: '研发部',
            orderNo: 1,
            createTime: '1980-12-01 16:51:05',
            remark: '九门关支查始时共办写计战际时儿成律',
            status: '1',
            parentDept: '1',
          },
          {
            id: '1-1',
            deptName: '市场部',
            orderNo: 2,
            createTime: '1990-02-11 19:44:45',
            remark: '积无十前离干心他外率也消',
            status: '0',
            parentDept: '1',
          },
          {
            id: '1-2',
            deptName: '商务部',
            orderNo: 3,
            createTime: '2011-08-04 23:47:47',
            remark: '之行式前想给周置学专器观展体省装',
            status: '1',
            parentDept: '1',
          },
          {
            id: '1-3',
            deptName: '财务部',
            orderNo: 4,
            createTime: '2000-07-07 06:43:34',
            remark: '调计政战条格或调主眼月光起论备算确',
            status: '0',
            parentDept: '1',
          },
        ],
      },
      {
        id: '2',
        deptName: '西北分部',
        orderNo: 3,
        createTime: '1994-09-03 14:29:00',
        remark: '究整品产每规可但些也风传专场有感反只不',
        status: '0',
        children: [
          {
            id: '2-0',
            deptName: '研发部',
            orderNo: 1,
            createTime: '1991-03-19 22:57:52',
            remark: '变般理条强置法照公相存把他',
            status: '0',
            parentDept: '2',
          },
          {
            id: '2-1',
            deptName: '市场部',
            orderNo: 2,
            createTime: '1981-05-10 01:53:22',
            remark: '表海规青参能研金参铁党真具',
            status: '1',
            parentDept: '2',
          },
          {
            id: '2-2',
            deptName: '商务部',
            orderNo: 3,
            createTime: '2006-07-28 09:45:53',
            remark: '米圆明收满度风区干准观响',
            status: '1',
            parentDept: '2',
          },
          {
            id: '2-3',
            deptName: '财务部',
            orderNo: 4,
            createTime: '2014-06-04 21:16:51',
            remark: '非及问海求空入事交到眼县老',
            status: '0',
            parentDept: '2',
          },
        ],
      },
    ],
    message: 'ok',
    type: 'success',
  };
  return result.result;
  // defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });
};

// 菜单管理
export const getMenuList = (params?: MenuParams) => {
  const result: any = {
    code: 0,
    result: [
      {
        id: '0',
        icon: 'ion:layers-outline',
        component: 'LAYOUT',
        type: '0',
        menuName: 'Dashboard',
        permission: '',
        orderNo: 1,
        createTime: '2013-08-25 22:30:06',
        status: '0',
        children: [
          {
            id: '0-0',
            type: '1',
            menuName: '菜单1',
            icon: 'ion:document',
            permission: 'menu1:view',
            component: '/dashboard/welcome/index',
            orderNo: 1,
            createTime: '1988-04-16 01:45:38',
            status: '1',
            parentMenu: '0',
            children: [
              {
                id: '0-0-0',
                type: '2',
                menuName: '按钮1-1',
                icon: '',
                permission: 'menu1:view:btn1',
                component: '/dashboard/welcome/index',
                orderNo: 1,
                createTime: '2008-09-02 18:27:23',
                status: '0',
                parentMenu: '0-0',
              },
              {
                id: '0-0-1',
                type: '2',
                menuName: '按钮1-2',
                icon: '',
                permission: 'menu1:view:btn2',
                component: '/dashboard/welcome/index',
                orderNo: 1,
                createTime: '1984-03-09 05:38:38',
                status: '0',
                parentMenu: '0-0',
              },
              {
                id: '0-0-2',
                type: '2',
                menuName: '按钮1-3',
                icon: '',
                permission: 'menu1:view:btn3',
                component: '/dashboard/welcome/index',
                orderNo: 1,
                createTime: '2008-02-17 19:43:26',
                status: '1',
                parentMenu: '0-0',
              },
              {
                id: '0-0-3',
                type: '2',
                menuName: '按钮1-4',
                icon: '',
                permission: 'menu1:view:btn4',
                component: '/dashboard/welcome/index',
                orderNo: 1,
                createTime: '2001-01-01 11:03:23',
                status: '0',
                parentMenu: '0-0',
              },
            ],
          },
          {
            id: '0-1',
            type: '1',
            menuName: '菜单2',
            icon: 'ion:document',
            permission: 'menu1:view',
            component: '/dashboard/analysis/index',
            orderNo: 2,
            createTime: '1975-04-04 15:48:21',
            status: '0',
            parentMenu: '0',
            children: [
              {
                id: '0-1-0',
                type: '2',
                menuName: '按钮2-1',
                icon: '',
                permission: 'menu1:view:btn1',
                component: '/dashboard/analysis/index',
                orderNo: 2,
                createTime: '1998-09-04 18:50:38',
                status: '0',
                parentMenu: '0-1',
              },
              {
                id: '0-1-1',
                type: '2',
                menuName: '按钮2-2',
                icon: '',
                permission: 'menu1:view:btn2',
                component: '/dashboard/analysis/index',
                orderNo: 2,
                createTime: '2012-07-29 10:23:09',
                status: '1',
                parentMenu: '0-1',
              },
              {
                id: '0-1-2',
                type: '2',
                menuName: '按钮2-3',
                icon: '',
                permission: 'menu1:view:btn3',
                component: '/dashboard/analysis/index',
                orderNo: 2,
                createTime: '2016-01-28 14:01:59',
                status: '0',
                parentMenu: '0-1',
              },
              {
                id: '0-1-3',
                type: '2',
                menuName: '按钮2-4',
                icon: '',
                permission: 'menu1:view:btn4',
                component: '/dashboard/analysis/index',
                orderNo: 2,
                createTime: '1990-08-21 10:21:47',
                status: '0',
                parentMenu: '0-1',
              },
            ],
          },
          {
            id: '0-2',
            type: '1',
            menuName: '菜单3',
            icon: 'ion:document',
            permission: 'menu1:view',
            component: '/dashboard/workbench/index',
            orderNo: 3,
            createTime: '1973-06-07 03:00:47',
            status: '0',
            parentMenu: '0',
            children: [
              {
                id: '0-2-0',
                type: '2',
                menuName: '按钮3-1',
                icon: '',
                permission: 'menu1:view:btn1',
                component: '/dashboard/workbench/index',
                orderNo: 3,
                createTime: '2014-09-07 19:05:19',
                status: '1',
                parentMenu: '0-2',
              },
              {
                id: '0-2-1',
                type: '2',
                menuName: '按钮3-2',
                icon: '',
                permission: 'menu1:view:btn2',
                component: '/dashboard/workbench/index',
                orderNo: 3,
                createTime: '2006-02-12 03:14:04',
                status: '1',
                parentMenu: '0-2',
              },
              {
                id: '0-2-2',
                type: '2',
                menuName: '按钮3-3',
                icon: '',
                permission: 'menu1:view:btn3',
                component: '/dashboard/workbench/index',
                orderNo: 3,
                createTime: '2004-09-17 03:48:46',
                status: '0',
                parentMenu: '0-2',
              },
              {
                id: '0-2-3',
                type: '2',
                menuName: '按钮3-4',
                icon: '',
                permission: 'menu1:view:btn4',
                component: '/dashboard/workbench/index',
                orderNo: 3,
                createTime: '1991-02-26 01:19:56',
                status: '0',
                parentMenu: '0-2',
              },
            ],
          },
          {
            id: '0-3',
            type: '1',
            menuName: '菜单4',
            icon: 'ion:document',
            permission: 'menu1:view',
            component: '/dashboard/test/index',
            orderNo: 4,
            createTime: '2022-05-25 01:25:57',
            status: '0',
            parentMenu: '0',
            children: [
              {
                id: '0-3-0',
                type: '2',
                menuName: '按钮4-1',
                icon: '',
                permission: 'menu1:view:btn1',
                component: '/dashboard/test/index',
                orderNo: 4,
                createTime: '2014-12-08 15:52:37',
                status: '0',
                parentMenu: '0-3',
              },
              {
                id: '0-3-1',
                type: '2',
                menuName: '按钮4-2',
                icon: '',
                permission: 'menu1:view:btn2',
                component: '/dashboard/test/index',
                orderNo: 4,
                createTime: '2017-07-04 00:21:32',
                status: '1',
                parentMenu: '0-3',
              },
              {
                id: '0-3-2',
                type: '2',
                menuName: '按钮4-3',
                icon: '',
                permission: 'menu1:view:btn3',
                component: '/dashboard/test/index',
                orderNo: 4,
                createTime: '2009-09-18 12:47:02',
                status: '1',
                parentMenu: '0-3',
              },
              {
                id: '0-3-3',
                type: '2',
                menuName: '按钮4-4',
                icon: '',
                permission: 'menu1:view:btn4',
                component: '/dashboard/test/index',
                orderNo: 4,
                createTime: '2001-04-20 02:17:58',
                status: '0',
                parentMenu: '0-3',
              },
            ],
          },
        ],
      },
      {
        id: '1',
        icon: 'ion:git-compare-outline',
        component: 'LAYOUT',
        type: '0',
        menuName: '权限管理',
        permission: '',
        orderNo: 2,
        createTime: '2013-06-08 05:08:22',
        status: '0',
        children: [
          {
            id: '1-0',
            type: '1',
            menuName: '菜单1',
            icon: 'ion:document',
            permission: 'menu2:add',
            component: '/dashboard/welcome/index',
            orderNo: 1,
            createTime: '1983-10-21 18:39:50',
            status: '1',
            parentMenu: '1',
            children: [
              {
                id: '1-0-0',
                type: '2',
                menuName: '按钮1-1',
                icon: '',
                permission: 'menu2:add:btn1',
                component: '/dashboard/welcome/index',
                orderNo: 1,
                createTime: '2022-04-07 00:27:12',
                status: '0',
                parentMenu: '1-0',
              },
              {
                id: '1-0-1',
                type: '2',
                menuName: '按钮1-2',
                icon: '',
                permission: 'menu2:add:btn2',
                component: '/dashboard/welcome/index',
                orderNo: 1,
                createTime: '1997-01-29 15:49:42',
                status: '1',
                parentMenu: '1-0',
              },
              {
                id: '1-0-2',
                type: '2',
                menuName: '按钮1-3',
                icon: '',
                permission: 'menu2:add:btn3',
                component: '/dashboard/welcome/index',
                orderNo: 1,
                createTime: '2020-10-26 02:18:34',
                status: '0',
                parentMenu: '1-0',
              },
              {
                id: '1-0-3',
                type: '2',
                menuName: '按钮1-4',
                icon: '',
                permission: 'menu2:add:btn4',
                component: '/dashboard/welcome/index',
                orderNo: 1,
                createTime: '1997-02-10 16:54:01',
                status: '0',
                parentMenu: '1-0',
              },
            ],
          },
          {
            id: '1-1',
            type: '1',
            menuName: '菜单2',
            icon: 'ion:document',
            permission: 'menu2:add',
            component: '/dashboard/analysis/index',
            orderNo: 2,
            createTime: '1980-01-28 02:33:57',
            status: '0',
            parentMenu: '1',
            children: [
              {
                id: '1-1-0',
                type: '2',
                menuName: '按钮2-1',
                icon: '',
                permission: 'menu2:add:btn1',
                component: '/dashboard/analysis/index',
                orderNo: 2,
                createTime: '1987-04-23 21:43:52',
                status: '1',
                parentMenu: '1-1',
              },
              {
                id: '1-1-1',
                type: '2',
                menuName: '按钮2-2',
                icon: '',
                permission: 'menu2:add:btn2',
                component: '/dashboard/analysis/index',
                orderNo: 2,
                createTime: '1978-09-14 15:52:45',
                status: '1',
                parentMenu: '1-1',
              },
              {
                id: '1-1-2',
                type: '2',
                menuName: '按钮2-3',
                icon: '',
                permission: 'menu2:add:btn3',
                component: '/dashboard/analysis/index',
                orderNo: 2,
                createTime: '1993-02-07 19:40:40',
                status: '1',
                parentMenu: '1-1',
              },
              {
                id: '1-1-3',
                type: '2',
                menuName: '按钮2-4',
                icon: '',
                permission: 'menu2:add:btn4',
                component: '/dashboard/analysis/index',
                orderNo: 2,
                createTime: '1995-08-30 14:03:50',
                status: '1',
                parentMenu: '1-1',
              },
            ],
          },
          {
            id: '1-2',
            type: '1',
            menuName: '菜单3',
            icon: 'ion:document',
            permission: 'menu2:add',
            component: '/dashboard/workbench/index',
            orderNo: 3,
            createTime: '1990-07-19 11:51:11',
            status: '0',
            parentMenu: '1',
            children: [
              {
                id: '1-2-0',
                type: '2',
                menuName: '按钮3-1',
                icon: '',
                permission: 'menu2:add:btn1',
                component: '/dashboard/workbench/index',
                orderNo: 3,
                createTime: '1971-08-10 20:43:22',
                status: '0',
                parentMenu: '1-2',
              },
              {
                id: '1-2-1',
                type: '2',
                menuName: '按钮3-2',
                icon: '',
                permission: 'menu2:add:btn2',
                component: '/dashboard/workbench/index',
                orderNo: 3,
                createTime: '1979-06-07 00:05:53',
                status: '1',
                parentMenu: '1-2',
              },
              {
                id: '1-2-2',
                type: '2',
                menuName: '按钮3-3',
                icon: '',
                permission: 'menu2:add:btn3',
                component: '/dashboard/workbench/index',
                orderNo: 3,
                createTime: '2021-12-27 10:16:39',
                status: '1',
                parentMenu: '1-2',
              },
              {
                id: '1-2-3',
                type: '2',
                menuName: '按钮3-4',
                icon: '',
                permission: 'menu2:add:btn4',
                component: '/dashboard/workbench/index',
                orderNo: 3,
                createTime: '2004-12-21 07:22:08',
                status: '1',
                parentMenu: '1-2',
              },
            ],
          },
          {
            id: '1-3',
            type: '1',
            menuName: '菜单4',
            icon: 'ion:document',
            permission: 'menu2:add',
            component: '/dashboard/test/index',
            orderNo: 4,
            createTime: '2017-07-30 22:01:02',
            status: '1',
            parentMenu: '1',
            children: [
              {
                id: '1-3-0',
                type: '2',
                menuName: '按钮4-1',
                icon: '',
                permission: 'menu2:add:btn1',
                component: '/dashboard/test/index',
                orderNo: 4,
                createTime: '1977-09-28 21:38:13',
                status: '1',
                parentMenu: '1-3',
              },
              {
                id: '1-3-1',
                type: '2',
                menuName: '按钮4-2',
                icon: '',
                permission: 'menu2:add:btn2',
                component: '/dashboard/test/index',
                orderNo: 4,
                createTime: '1991-11-10 00:14:45',
                status: '0',
                parentMenu: '1-3',
              },
              {
                id: '1-3-2',
                type: '2',
                menuName: '按钮4-3',
                icon: '',
                permission: 'menu2:add:btn3',
                component: '/dashboard/test/index',
                orderNo: 4,
                createTime: '1977-05-23 10:12:05',
                status: '1',
                parentMenu: '1-3',
              },
              {
                id: '1-3-3',
                type: '2',
                menuName: '按钮4-4',
                icon: '',
                permission: 'menu2:add:btn4',
                component: '/dashboard/test/index',
                orderNo: 4,
                createTime: '1977-03-16 09:28:11',
                status: '0',
                parentMenu: '1-3',
              },
            ],
          },
        ],
      },
    ],
    message: 'ok',
    type: 'success',
  };
  return result.result;
  // defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });
};

// 角色管理
export const getRoleListByPage = (params?: RolePageParams) => {
  const result = {
    code: 0,
    result: {
      items: [
        {
          id: 1,
          orderNo: '1',
          roleName: '超级管理员',
          roleValue: 'Linda',
          createTime: '2006-10-11 03:30:29',
          remark: '整表马九角西第革制离眼至',
          menu: ['0-0'],
          status: '0',
        },
        {
          id: 2,
          orderNo: '2',
          roleName: '管理员',
          roleValue: 'Timothy',
          createTime: '1998-11-08 23:59:40',
          remark: '常回向积治管队过义话素连高',
          menu: ['0', '1'],
          status: '1',
        },
        {
          id: 3,
          orderNo: '3',
          roleName: '文章管理员',
          roleValue: 'Kimberly',
          createTime: '1999-03-12 15:10:58',
          remark: '太区许书果划同验她集平生收他',
          menu: ['0', '2'],
          status: '0',
        },
        {
          id: 4,
          orderNo: '4',
          roleName: '普通用户',
          roleValue: 'Maria',
          createTime: '1986-06-21 14:21:25',
          remark: '完用者调出张厂节因造报求中叫必',
          menu: ['2'],
          status: '1',
        },
      ],
      total: 4,
    },
    message: 'ok',
    type: 'success',
  };
  return result.result;
  // defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });
};

// 角色管理，设置角色状态
export const setRoleStatus = (id: number, status: string) => {
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });
};

// 租户管理，INto Review的接口，可以根据我们自己的新逻辑修改
export const getTenantList = (params?: TenantListParams) => {
  const result = {
    success: true,
    message: '',
    code: 0,
    result: {
      records: [
        {
          beginDate: '2022-12-24 09:17:20',
          createBy: 'admin',
          createTime: '2022-12-22 09:28:21',
          endDate: '2022-12-29 09:27:23',
          tenantName: '测试租户默认创建角色',
          remark: '备注测试',
          id: 817,
          status_dictText: '冻结',
          status: '0',
        },
        {
          beginDate: null,
          createBy: 'admin',
          createTime: '2022-12-15 15:31:02',
          endDate: null,
          tenantName: '测试租户',
          remark: '备注测试',
          id: 1212121,
          status_dictText: '正常',
          status: '1',
        },
      ],
      total: 23,
      size: 10,
      current: 1,
      orders: [],
      optimizeCountSql: true,
      searchCount: true,
      countId: null,
      maxLimit: null,
      pages: 3,
    },
    timestamp: 1675330191928,
  };
  return result.result.records;
  // defHttp.get<TenantListGetResultModel>({ url: Api.TenantList, params });
};
