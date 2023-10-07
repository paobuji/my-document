# 树状结构数据
```js
const { Service } = require("egg");

// 根据menuId和parentId生成树形结构
function buildTree(data, parentId = 0) {
  const tree = [];
  for (const item of data) {
    if (item.parentId === parentId) {
      const children = buildTree(data, item.menuId);
      if (children.length > 0) {
        item.children = children;
      } else {
        item.children = []; // 如果没有子节点，赋值一个空数组
      }
      tree.push(item);
    }
  }
  return tree;
}

class MenuSerice extends Service {
  async getAllMenu() {
    const { app } = this;
    const sql =
      "SELECT menu_id as menuId, parent_id as parentId, name, path, component FROM menu";
    const result = await app.mysql.query(sql);
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    return buildTree(result);
  }

  async updateMenu(params) {
    const { app } = this;
    const sql =
      "UPDATE menu SET parent_id = ?, name = ?, path = ?,component= ? WHERE menu_id = ?";
    const result = await app.mysql.query(sql, [
      params.parentId,
      params.name,
      params.path,
      params.component,
      params.menuId,
    ]);
    return result;
  }

  async addMenu(params) {
    const { app } = this;
    const sql =
      "INSERT INTO menu (parent_id, name, path, component) VALUES (?, ?, ?, ?)";
    const result = await app.mysql.query(sql, [
      params.parentId,
      params.name,
      params.path,
      params.component,
    ]);
    return result;
  }
}

module.exports = MenuSerice;
```