import { useContextMenu } from '/@/hooks/web/useContextMenu';
import type { ContextMenuItem } from '/@/components/ContextMenu';
const [createContextMenu] = useContextMenu();
function handleContext(e: MouseEvent, items: Array<ContextMenuItem>) {
  createContextMenu({
    event: e,
    items: items,
  });
}
export const contextmenu = (record, index) => ({
  onContextmenu: (event) => {
    return handleContext(event, [
      {
        label: '撤销',
        icon: 'ant-design:undo-outlined',
        handler: () => {
          console.log(event);
        },
      },
      {
        label: '复制',
        icon: 'ant-design:copy-outlined',
        handler: () => {
          console.log(event);
        },
      },
      {
        label: '粘贴',
        icon: 'ant-design:snippets-outlined',
        handler: () => {
          console.log(record);
        },
      },
      {
        label: '添加行',
        icon: 'ant-design:file-add-outlined',
        handler: () => {
          console.log(record);
        },
      },
      {
        label: '复制行',
        icon: 'ant-design:snippets-outlined',
        handler: () => {
          console.log(record);
        },
      },
      {
        label: '删除',
        icon: 'ant-design:delete-outlined',
        handler: () => {
          console.log(record);
        },
      },
    ]);
  },
});
