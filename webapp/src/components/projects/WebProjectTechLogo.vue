<template>
 <div>
   <img :src='link' alt="" class='tech-link'>
 </div>
</template>

<script>
export default {
props: {
    link: {
      type: String,
      required: true
    }
  },
  methods:{
    check() {console.log(this.links)}
  }
}
</script>

<style lang="scss" scoped>
.tech-link {
  height: 20px;
  margin: 0 5px;
}
</style>

