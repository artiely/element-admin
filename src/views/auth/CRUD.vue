<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <el-button type="primary" @click="handleAdd">新增</el-button>
        <el-button type="danger" @click="handleDelete" v-show="multipleSelection.length>0">批量删除</el-button>
      </div>
      <el-table :data="data" border @selection-change="handleSelectionChange" style="width: 100%">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column fixed prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="isMale" label="性别">
          <div slot-scope="scope">
            <span>{{ scope.row.isMale ? '男' : '女' }}</span>
          </div>
        </el-table-column>
        <el-table-column prop="birthday" label="生日">
        </el-table-column>
        <el-table-column prop="city" label="地址">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <div slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-popover trigger="click" placement="top" width="160" style="display:inline-block" v-model="scope.row.visible">
              <p>确定删除{{scope.row.name}}吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="scope.row.visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="hanleDeleteSingle(scope.row)">确定</el-button>
              </div>
                <el-button type="text" slot="reference" @click="scope.row.visible = true" size="small" style="color:#f60">删除</el-button>
            </el-popover>
          </div>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :title="title" :visible.sync="dialogFormVisible" :append-to-body="true">
      <el-form :model="form" v-loading="loading">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="form.isMale" placeholder="请选择性别">
            <el-option label="男" :value="true"></el-option>
            <el-option label="女" :value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker v-model="form.birthday" type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.city">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="postUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      loading: false,
      multipleSelection: [],
      dialogFormVisible: false,
      title: '新增',
      form: {
        name: '乔霞',
        age: 27,
        birthday: '1974-09-15',
        city: '江西省 萍乡市',
        isMale: false,
        visible: false
      },
      formLabelWidth: '120px'
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      let res = await this.$api.GET_USER_LIST()
      this.data = res.data
    },
    async handleDelete() {
      let ids = []
      for (let i = 0; i < this.multipleSelection.length; i++) {
        ids.push(this.multipleSelection[i].id)
      }
      let res = await this.$api.DELETE_USER_LIST({
        ids: ids
      })
      this.data = res.data
    },
    async hanleDeleteSingle(row) {
      let res = await this.$api.DELETE_USER_LIST({
        ids: [row.id]
      })
      this.data = res.data
    },
    handleAdd() {
      this.title = '新增'
      this.dialogFormVisible = true
    },
    async postUser() {
      this.loading = true
      if (this.title === '新增') {
        let res = await this.$api.ADD_USER(this.form)
        this.dialogFormVisible = false
        this.data = res.data
      } else {
        let res = await this.$api.EDIT_USER(this.form)
        this.dialogFormVisible = false
        this.data = res.data
      }
      this.loading = false
    },
    handleEdit(row) {
      this.title = '编辑'
      this.dialogFormVisible = true
      this.form = row
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleClick(row) {
      console.log(row)
    }
  }
}
</script>
