<template>
  <div>
    <el-container v->
      <el-header>
        <p>创建实体集</p>
      </el-header>
      <el-main>
        <el-row>
          <el-col span="12" offset="4">
            <p>请输入实体集名</p>
          </el-col>
          <el-col span="12" offset="-4">
            <el-input
              v-model="name">

            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <p>请选择实体集</p>
          </el-col>
          <el-col>
            <el-select
              v-model="select_entities"
              value-key="name"
              multiple
              placeholder="请选择"
              @change="compute_option">
              <el-option
                v-for="entity in entities"
                :key="entity.name"
                :label="entity.name"
                :value="entity">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <p>请选择要添加的关系</p>
          </el-col>
          <el-col span="10">
            <el-cascader
              v-model="select_col1"
              :options="option"
              :props="{ expandTrigger: 'hover' }">
            </el-cascader>
          </el-col>
          <el-col span="4">
            <p>to</p>
          </el-col>
          <el-col span="10">
            <el-cascader
                v-model="select_col2"
                :options="option"
                :props="{ expandTrigger: 'hover' }">
            </el-cascader>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            请选择目标实体
          </el-col>
          <el-col>
            <el-select
                v-model="select_target_entity"
                value-key="name"
                placeholder="请选择">
              <el-option
                  v-for="entity in select_entities"
                  :key="entity.name"
                  :label="entity.name"
                  :value="entity">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            请选择聚合函数
          </el-col>
          <el-col>
            <el-select
                v-model="select_agg_prim"
                multiple
                placeholder="请选择">
              <el-option
                  v-for="agg_prim in agg_prims"
                  :key="agg_prim"
                  :label="agg_prim"
                  :value="agg_prim">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            请选择时间分割格式
          </el-col>
          <el-col>
            <el-select
                v-model="select_time_prim"
                multiple
                placeholder="请选择">
              <el-option
                  v-for="time_prim in time_prims"
                  :key="time_prim"
                  :label="time_prim"
                  :value="time_prim">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            请选择特征融合深度
          </el-col>
          <el-col>
            <el-select
                v-model="max_depth"
                placeholder="请选择">
              <el-option
                  v-for="depth in max_depths"
                  :key="depth"
                  :label="depth"
                  :value="depth">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-button
        @click="createEntityset">确定</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "CreateEntityset",
  data(){
    return{
      name:'',
      entities: [],
      select_entities:[],
      select_col1:[],
      select_col2:[],
      option:[],
      select_target_entity:{},
      select_time_prim:[],
      select_agg_prim:[],
      time_prims :['year','month','day','hour','minute','second'],
      agg_prims: ['count','avg','std'],
      max_depths:['1','2','3'],
      max_depth:''
    }
  },
  mounted() {
    this.entities = [{
      name: "customers",
      columns: [
        {
          name: "customer_id",     },
        {
          name: "zip_code",   },
        {
          name: "join_date",
        },
        {
          name: "date_of_birth",
        }
      ]
    },
      { name: "sessions",
        columns: [
          {
            name: "session_id",     },
          {
            name: "customer_id",     },
          {
            name: "device",   },
          {
            name: "session_start",
          }
        ]
      },
      { name: "transactions",
        columns: [
          {
            name: "transaction_id",     },
          {
            name: "session_id",     },
          {
            name: "transaction_time",
          },
          {
            name: "product_id",   },
          {
            name: "amount",     }
        ]
      },
      { name: "products",
        columns: [
          {
            name: "product_id",   },
          {
            name: "brand",   }
        ]
      }
    ]
  },
  methods:{
    compute_option(){
      let temp = [];
      for (var i=0;i<this.select_entities.length;i++){
        let single_option = {};
        var entity = this.select_entities[i]
        single_option['value'] = entity.name
        single_option['label'] = entity.name
        let childen = [];
        for(var j=0;j<entity.columns.length;j++){
          let temp2 = {};
          var col = entity.columns[j]
          temp2['value']=col.name
          temp2['label']=col.name
          childen.push(temp2)
        }
        single_option['children'] = childen
        temp.push(single_option)
      }
      this.option = temp
    },
    createEntityset(){
        this.$router.push('/SelectModel')
    }
  }

}
</script>

<style scoped>

</style>