<template>
  <div>
    <el-header>
      <p>构建模型</p>
    </el-header>
    <el-container>
      <el-row>
        <p>选择模型:{{model}}</p>
      </el-row>
      <el-row>
        <el-button
        @click="trainModel">训练模型</el-button>
      </el-row>
      <el-row>
        <p>{{log}}</p>
      </el-row>
    </el-container>

  </div>
</template>
<script>
export default {
  name: "SelectModel",
  data(){
    return{
      log:'',
      model:'random tree'
    }
  },
  methods:{
    trainModel(){

    }
  }
}
</script>

<style scoped>

</style>