<template>
  <div>
    <el-contain>
      <el-main>
        <el-row>
          <el-col v-for="table in tables" :key="table.name">
            <el-card>
              <div>
                {{table.name}}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-row>
          <el-col>
            <div>
              <p>选择数据库表：</p>
            </div>
          </el-col>
          <el-col>
            <el-select v-model="select_table" value-key="name"  placeholder="请选择">
              <el-option
                v-for="table in tables"
                :key="table.name"
                :label="table.name"
                :value="table">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div>
              <p>选择主索引列</p>
            </div>
          </el-col>
          <el-col>
            <el-select v-model="index_col"  placeholder="请选择">
              <el-option
              v-for="col in select_table.cols"
              :key="col.name"
              :label="col.name"
              :value="col.name">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div>
              <p>选择时间索引列</p>
            </div>
          </el-col>
          <el-col>
            <el-select v-model="time_index_col"  placeholder="请选择">
              <el-option
                  v-for="col in select_table.cols"
                  :key="col.name"
                  :label="col.name"
                  :value="col.name">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-button @click="create">
              确定
            </el-button>
          </el-col>
        </el-row>
      </el-footer>
    </el-contain>
  </div>
</template>

<script>
export default {
  name: "CreateEntity",
  data(){
    return {
      tables:[],
      select_table:{},
      index_col:'',
      time_index_col:''
    }
  },
  mounted() {
    this.load_tables()
  },
  methods:{
    load_tables(){
      this.tables = [{name:"a",cols:[{name:"aa"},{name:"cc"}]},{name:"b",cols:[{name:"bb"}]}]
    },
    create(){
      this.$router.push('/getEntity')
    }
  }

}
</script>

<style scoped>

</style>