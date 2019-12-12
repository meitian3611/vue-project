<template>
<div class="page_city" ref="name">
 <H2>定位城市</H2>
 <div class="city_address">
   <button>定位中...</button>
 </div>
<h1>热门城市/区域</h1>
<van-grid>
  <van-grid-item
  v-for="item in cityList"
  :key="item.name"
  :text="item.name"
  @click="address(item.name)"/>
</van-grid>

  <van-index-bar :index-list="addressList" >
  <!-- <van-index-anchor v-for="(item, index) in delFirsts" :key="index">{{item.prefix.toLocaleUpperCase()}}</van-index-anchor> -->
    <!-- <van-cell v-for="item in cellList[0]" :key="item" :title="item"/> -->
    <van-index-anchor index="1">A</van-index-anchor>
    <van-cell v-for="item in cellList[0]" :key="item" :title="item"  @click="address1(item)" />
      <van-index-anchor index="1">B</van-index-anchor>
    <van-cell v-for="item in cellList[1]" :key="item" :title="item"  @click="address1(item)"/>
    <van-index-anchor index="2">C</van-index-anchor>
    <van-cell v-for="item in cellList[2]" :key="item" :title="item"  @click="address1(item)"/>
     <van-index-anchor index="2">D</van-index-anchor>
    <van-cell v-for="item in cellList[3]" :key="item" :title="item"  @click="address1(item)"/>
     <van-index-anchor index="2">E</van-index-anchor>
    <van-cell v-for="item in cellList[4]" :key="item" :title="item"  @click="address1(item)"/>
     <van-index-anchor index="2">F</van-index-anchor>
    <van-cell v-for="item in cellList[5]" :key="item" :title="item"  @click="address1(item)"/>
     <van-index-anchor index="2">G</van-index-anchor>
    <van-cell v-for="item in cellList[6]" :key="item" :title="item"  @click="address1(item)"/>
     <van-index-anchor index="2">H</van-index-anchor>
    <van-cell v-for="item in cellList[7]" :key="item" :title="item"  @click="address1(item)"/>
     <van-index-anchor index="2">J</van-index-anchor>
    <van-cell v-for="item in cellList[8]" :key="item" :title="item"  @click="address1(item)"/>
     <van-index-anchor index="2">K</van-index-anchor>
    <van-cell v-for="item in cellList[9]" :key="item" :title="item"  @click="address1(item)"/>
     <van-index-anchor index="2">L</van-index-anchor>
    <van-cell v-for="item in cellList[10]" :key="item" :title="item"  @click="address1(item)"/>
     <van-index-anchor index="2">M</van-index-anchor>
    <van-cell v-for="item in cellList[11]" :key="item" :title="item"  @click="address1(item)"/>
     <van-index-anchor index="2">N</van-index-anchor>
    <van-cell v-for="item in cellList[12]" :key="item" :title="item"  @click="address1(item)"/>
      <van-index-anchor index="2">P</van-index-anchor>
    <van-cell v-for="item in cellList[13]" :key="item" :title="item"  @click="address1(item)"/>
      <van-index-anchor index="2">Q</van-index-anchor>
    <van-cell v-for="item in cellList[14]" :key="item" :title="item"  @click="address1(item)"/>
      <van-index-anchor index="2">R</van-index-anchor>
    <van-cell v-for="item in cellList[15]" :key="item" :title="item"  @click="address1(item)"/>
      <van-index-anchor index="2">S</van-index-anchor>
    <van-cell v-for="item in cellList[16]" :key="item" :title="item"  @click="address1(item)"/>
      <van-index-anchor index="2">T</van-index-anchor>
    <van-cell v-for="item in cellList[17]" :key="item" :title="item"  @click="address1(item)"/>

  ...
</van-index-bar>
</div>
</template>

<script>
import Vue from 'vue'
import { Grid, GridItem, IndexBar, IndexAnchor } from 'vant'
// import { IndexBar, IndexAnchor } from 'vant'
import axios from 'axios'
Vue.use(IndexBar).use(IndexAnchor)
Vue.use(Grid).use(GridItem)
export default {
  data () {
    return {
      cityList: [],
      addressList: [],
      cellList: [],
      delFirsts: []
    }
  },
  name: 'City',
  created () {
    axios.get('/json/city.json').then(res => {
      // console.log(res)
      let citys = res.data.data.areas
      // console.log(citys)
      this.cityList = citys[0].cities
      // console.log(this.cityList)
      let delFirst = [...citys]
      delFirst.shift()
      // console.log(delFirst)
      this.delFirsts = delFirst
      let val = delFirst.map(item => item.prefix.toLocaleUpperCase())
      this.addressList = val
      // console.log(val)
      let cell = delFirst.map(item => {
        return item.cities
      })
      let arr = []
      cell.forEach(index => {
        arr.push(index.map(val => val.name))
        return arr
      })
      // console.log(arr)
      this.cellList = arr
    })
  },
  methods: {
    address (item) {
      console.log(item)
      window.localStorage.setItem('city', JSON.stringify(item))
      let clas = document.getElementsByTagName('body')[0].className
      if (clas) {
        document.getElementsByClassName('van-dropdown-item--down')[0].style.display = 'none'
      }
      // this.$router.replace('/detail')
      this.$router.go(0)
      this.$emit('cityAddr', item)
    },
    address1 (item) {
      console.log(item)
      window.localStorage.setItem('city', JSON.stringify(item))
      let clas = document.getElementsByTagName('body')[0].className
      if (clas) {
        document.getElementsByClassName('van-dropdown-item--down')[0].style.display = 'none'
      }
      this.$router.go(0)
      this.$emit('cityAddr', item)
    }
  }
}
</script>

<style lang="scss">
.page_city{
  .van-dropdown-item__content {
    position: absolute;
    max-height: 100%;
}
.van-index-anchor{
  background: #f2f3f4;
}
.van-grid{
  margin-bottom: 10px;
  margin-top: 5px;

}
  h1{
    padding: 3px;
    font-size: 14px;
    padding-left: 10px;
  background: #f2f3f4;

  }
  h2{
    font-size: 14px;
    padding-left: 10px;
  background: #f2f3f4;

  }
  .city_address{
    width:100%;
    height: 50px;
    // text-align: left;
    line-height: 50px;
    margin: 5px 0 5px 0;
    button{
      width: 90px;
      height: 40px;
      line-height: 40px;
      margin: 5px 0 0 20px;
      box-sizing: border-box;
      background: #ffffff;
      outline: none;
      border: 1px solid #e7e7e7;
    }
  }
  .van-grid-item{
    // display: inline-block;
    // box-sizing: border-box;
    text-align: center;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    margin: 4px 10px 0px 15px;
    font-size: 16px;
  }
  .van-grid-item__content{
    padding: 8px;
  }
}
</style>
}
<style>
