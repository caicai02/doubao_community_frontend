<template>
  <div>
    <div class="box">🔔{{billboard.content}}</div>
  </div>
</template>

<script>
// 导入接口
import {getBillboard} from '@/api/billboard'

export default {
  name: 'Home',
  data() {
    return {
      //billboard是一个对象，取里面属性content
      billboard: {
        content: ''
      }
    }
  },
  //页面创建时调用的方法
  created() {
    this.fetchBillboard()
  },
  methods: {
    async fetchBillboard() {
      //调用接口，接受传回来的json对象
      getBillboard().then((value) =>{
        const { data } = value
        this.billboard = data
      })
    }
  }
}
</script>