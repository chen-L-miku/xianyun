<template>
  <div class="block">
    <el-carousel height="750px">
      <el-carousel-item v-for="item in img" :key="item"
      class="mawari"
      :style='`background:url(${item.url}) center center no-repeat;
      background-size:contain contain;`'
      >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data (){
    return{
      img:[
        {url:'_nuxt/pages/44b5801a9046ea1d598c3cb7102ecab1eb7fdecf.jpg@1320w_828h.jpg'},
        {url:'_nuxt/pages/5c73b189205de.jpg'},{url:'_nuxt/pages/5c73b18c3e9eb.jpg'},{url:'_nuxt/pages/5c88ad75ab0df.jpg'}
      ]
    }
  }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
     
  }
  .mawari{
    width: 100%;
    height: 100%;
  }
</style>