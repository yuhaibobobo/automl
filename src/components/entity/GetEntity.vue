<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">
            <el-input id="dbname" size="20px">请输入数据库名</el-input>
          </el-col>
          <el-col :span="6">
            <el-button @click="createEntity">创建实体</el-button>
          </el-col>
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
      this.$router.push('/createEntity')
    }
  }
}
</script>

<style scoped>

</style>