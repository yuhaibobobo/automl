<template>
  <div>
    <el-container>
      <el-row gutter='20'>
        <el-col  :span='6' v-for="entity in entities" :key="entity" >
          <el-card>
            <div>
              {{entity}}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Entities",
  data (){
    return{
      entities: []
    }
  },
  mounted() {
    this.load_entities()
  },
  methods:{
    load_entities(){
      // var _this = this
      // this.$axios.get('').then(res=>{
      //   _this.entities = res.entities
      //   console.log(res)
      // })
      this.entities = ['customers','sessions','transactions','products']

    }
  }

}
</script>

<style scoped>

</style>