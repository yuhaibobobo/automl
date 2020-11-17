<template>
  <div>
    <el-contain>
      <el-main>
        <el-row>
          <el-col v-for="table in tables" :key="table.name">
            <el-card>
              <el-row>
                {{table.name}}
              </el-row>
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
              v-for="col in select_table.columns"
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
                  v-for="col in select_table.columns"
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
      this.tables =[{
        name: "customers",
        primary_key: "customer_id",
        foreign_key: "",
        columns: [
          {
            name: "customer_id",
            type: "bigint"
          },
          {
            name: "zip_code",
            type: "text"
          },
          {
            name: "join_date",
            type: "datetime"
          },
          {
            name: "date_of_birth",
            type: "datetime"
          }
        ]
      },
        { name: "sessions",
          primary_key: "session_id",
          foreign_key: "",
          columns: [
            {
              name: "session_id",
              type: "bigint"
            },
            {
              name: "customer_id",
              type: "bigint"
            },
            {
              name: "device",
              type: "text"
            },
            {
              name: "session_start",
              type: "datetime"
            }
          ]
        },
        { name: "transactions",
          primary_key: "transaction_id",
          foreign_key: "",
          columns: [
            {
              name: "transaction_id",
              type: "bigint"
            },
            {
              name: "session_id",
              type: "bigint"
            },
            {
              name: "transaction_time",
              type: "datetime"
            },
            {
              name: "product_id",
              type: "text"
            },
            {
              name: "amount",
              type: "double"
            }
          ]
        },
        { name: "products",
          primary_key: "product_id",
          foreign_key: "",
          columns: [
            {
              name: "product_id",
              type: "text"
            },
            {
              name: "brand",
              type: "text"
            }
          ]
        }
      ]
    },
    create(){
      this.$router.push('/getEntity')
    }
  }

}
</script>

<style scoped>

</style>