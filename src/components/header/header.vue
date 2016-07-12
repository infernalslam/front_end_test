<template lang="html">
    <div class="ui container">
        <div class="ui top fixed hidden menu">
         <div class="ui container">
           <div class="left menu"><img src="../../../static/logo.png" height="40px"/></div>
           <a class="item" v-link="{ path: '/event' }" :class="{'active': state === 1}">จัดการเเข่งขัน</a>
           <a class="item" v-link="{ path: '/show' }" :class="{'active': state === 2}">รายชื่อผู้สมัคร</a>
           <a class="item"  :class="{'active': state === 3}">จับคู่ผู้สมัคร</a>
           <a class="item"  :class="{'active': state === 4}">ตรวจสอบสถานะ</a>
           <a class="item" v-link="{ path: '/check' }" :class="{'active': state === 5}">ตรวจสอบการชำระเงิน</a>
             <div class="right menu">
               <div class="item">
                 <a class="ui primary button" v-link="{ path: '/pay' }">ชำระเงิน</a>
               </div>
           </div>
         </div>
       </div>
     </div>
    <div class="ui container">
     <router-view></router-view>
   </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>