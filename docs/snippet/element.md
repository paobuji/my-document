# element组件库
## vue2 element2.x el-dialog
```js
<el-dialog
    width="830px"
    title="新增"
    :visible.sync="isVisible"
    :close-on-click-modal="false"
    @close="closeDialog"
    v-dialogDrag
    >
    <span slot="footer">
        <el-button icon="el-icon-close" @click="isVisible=false">取 消</el-button>
        <el-button icon="el-icon-check" type="primary" @click="isVisible=false">提 交</el-button>
    </span>
</el-dialog>

this.$refs.dynamicValidateForm.validate((valid) => {
  if (valid) {
    this.$message({
        message: '提交成功',
        type: 'success'
    });
  } else {
    return false;
  }
});
```

## vue2 element message
```javascript
this.$message({
  message: '恭喜你，这是一条成功消息',
  type: 'success'
});
this.$message.success(res.data.msg);
```

## vue2 element2.x el-table
```javascript
<el-table
    :data="tableData"
    border
    style="width: 100%"
    row-key="id"
    :expand-row-keys="expandArr"
    align="center"
    :indent=40
    >
    <el-table-column prop="text" label="菜单名称" align="left"></el-table-column>
    <el-table-column prop="attributes.code" label="费用代码" align="center"></el-table-column>
    <el-table-column prop="attributes.nodeLevel" label="节点等级" align="center"></el-table-column>
    <el-table-column align="center" label="操作">
        <template v-slot="scope">
            <el-button
                type="warning"
                icon="edit"
                size="mini"
                @click="onEdit(scope.row)"
            >编辑</el-button>
            <el-button
                type="danger"
                icon="delete"
                size="mini"
                @click="onDelete(scope.row)"
            >删除</el-button>
        </template>
    </el-table-column>
</el-table>
```
- 这里要注意下,在el-table中,如果要使用slot,那么就要使用template,然后在template中使用v-slot,然后在v-slot中使用scope,这样就可以使用scope.row来获取当前行的数据了.
- 还有的就是`prop`的使用,是用来指定当前列的数据来源的,比如这里的`prop="text"`,那么这一列的数据就是来自于text这个字段的.
- 支持树类型的数据的显示。当 `row` 中包含 `children` 字段时，被视为树形数据。渲染树形数据时，必须要指定 `row-key`。
- `expand-row-keys`:可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。
---
## vue2 element2.x el-date-picker
```javascript
<el-date-picker
    v-model="scope.row.feeTime"
    type="date"
    value-format="yyyy-MM-dd"
    :picker-options="pickerOptions"
    placeholder="选择日期">
</el-date-picker>
```
```javascript
changeStartTime() {
  if (this.startTimeStr && this.endTimeStr && this.startTimeStr > this.endTimeStr) {
    this.$message.warning('开始时间不能大于结束时间');
    this.startTimeStr = '';
  }
},
changeEndTime() {
  if (this.startTimeStr && this.endTimeStr && this.endTimeStr < this.startTimeStr) {
    this.$message.warning('结束时间不能小于开始时间');
    this.endTimeStr = '';
  }
}
```
> value-format="yyyy-MM-dd" 这个是绑定值的格式
## vue2 element2.x el-cascader
```javascript
<el-cascader 
  v-model="dynamicValidateForm.managerId"
  :props="{ expandTrigger: 'hover',emitPath:false,checkStrictly:true }"
  :options="managerIdOptions"
  :show-all-levels="false"
  //这是不展示所有级的值
  filterable
  clearable
  @change="handleManagerIdChange()"
></el-cascader>
```
> :props="{ expandTrigger: 'hover',emitPath:false,checkStrictly:true }",这句代码可以保证取得的值是最后一级的值,而不是所有级的值
> 跟value-format="yyyy-MM-dd"是差不多的意思
> checkStrictly:true 这个属性配置可以让每个节点单独选择.
## vue2 element2.x el-select
```javascript
<el-select v-model="dynamicValidateForm.projectId" clearable>
    <el-option
        v-for="item in projectList"
        :key="item.id"
        :label="item.name"
        :value="item.id"
        >
    </el-option>
</el-select>
```
## vue3 element-plus el-drawer
```javascript
<el-drawer
      v-model="dialogVisible"
      :title="title"
      direction="rtl"
      size="30%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
</el-drawer>
```

## vue3 element-plus message
```javascript
import { ElMessage } from 'element-plus'
ElMessage({
  message: 'Congrats, this is a success message.',
  type: 'success',
})
ElMessage.success('恭喜你，这是一条成功消息')
```

## vue3 watch 深度监听对象 (两种用法)
```javascript
watch(
  state,
  (newValue) => {
    console.log(newValue.count);
  },
  { deep: true }
);
```
---
```javascript
<template>
  <div>
    <p ref="eleRef">
      {{ age }}
    </p>
    <div></div>
  </div>
</template>

<script setup lang="ts" name="watch">
import { ref, watch, onMounted } from "vue";
const age = ref({
  name: "lisi",
  age: 18,
});
const eleRef = ref(null);
watch(
  age,
  (value) => {
    console.log(value.age, eleRef.value);
  },
  { immediate: true, deep: true, flush: "post" }
);

age.value.age = 20;
</script>
```
## mybatis-plus继承BaseMapper,然后dao层就有了一系列的增删改查方法,从Dao层开始
```java
public interface BrandDao extends BaseMapper<BrandEntity> {

}
```

## mybatis-plus使用@TableName指定表名
```java
@Data
@TableName("tb_brand")
public class BrandEntity {
    private int id;
    private String brandName;
    private String companyName;
    private String description;
}
```
## vue2 验证表单方法
```javascript
onSubmit(){
  this.$refs.dynamicValidateForm.validate((valid) => {
    if (valid) {
      if(this.validateFee()){
          this.$message({
              message: '提交成功',
              type: 'success'
          });
      }
    } else {
      return false;
    }
  });
},
validateFee(){
  let isValid = true;
  this.dynamicValidateForm.feeItemList.forEach((item)=>{
    if(item.name==''||item.amount==''||item.categoryName==''||item.feeTime==''){
      this.$message({
          message: '费用信息不完整',
          type: 'warning'
      });
      isValid = false;
    }
  })
  return isValid;
},
```
## vue3 的 el-form
```javascript
<el-form ref="formRef" :model="form" :inline="true" class="demo-form-inline" :rules="rules">
  <el-form-item label="Approved by" prop="user">
    <el-input v-model="form.user" placeholder="Approved by" />
  </el-form-item>
  <el-form-item label="Activity zone" prop="region">
    <el-select v-model="form.region" placeholder="Activity zone">
      <el-option label="Zone one" value="shanghai" />
      <el-option label="Zone two" value="beijing" />
    </el-select>
  </el-form-item>
  <el-button type="primary" @click="confirm">确认</el-button>
</el-form>
```
## el-table的:row-class-name="rowClassName"用法
```javascript
<el-table :data="tableData" :row-class-name="rowClassName">
  <!-- 表格列定义 -->
</el-table>

computed: {
  rowClassName() {
    return (row, index) => {
      return row.id % 2 === 0 ? 'hand-cursor' : '';
    };
  }
}

/deep/ .hand-cursor {
  cursor: pointer;
}
```