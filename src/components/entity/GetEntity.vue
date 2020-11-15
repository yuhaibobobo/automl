<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-input id="dbname" size="20px">请输入数据库名</el-input>
          <el-button @click="createEntity">创建实体</el-button>
        </el-row>
      </el-header>

      <el-main>
        <entities></entities>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import Entities from "@/components/entity/Entities";
export default {
  name: "GetEntity",
  components:{Entities},
  methods:{
    createEntity() {

    }
  }
}
</script>

<style scoped>

</style>