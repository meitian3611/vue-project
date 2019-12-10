<template>
  <div class='dateil_all'>
    <div class='films_list'>
      <div class='films_left'>
        <img src='https://img.alicdn.com/imgextra/i4/2251059038/O1CN01EKTNQc2GdSDYE7dGx_!!2251059038.jpg_q60.jpg_.webp' alt=''>
      </div>
      <div class='films_right'>
        <span class='films_right_title'>音乐剧《面试》中文版</span>
        <p class='films_right_address'>
            上海 / 2019.12.24-2020.01.05 / FANCL艺术中心 艺海剧院小剧场
        </p>
        <span class='films_seach'>可选座</span>
        <span class='films_price'>￥280-480</span>
      </div>
    </div>
    <h1>所有电影</h1>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      filmsList: []
    }
  },
  created () {
    Axios.get('../../../db.json').then((res) => {
      console.log(res)
    })
  }
}
</script>
<style lang='scss'>
  .dateil_all{
    .films_list{
      width: 100%;
      height: 110px;
      display: flex;
      padding: 20px;
      .films_left{
        font-size: 14px;
        margin-right: 10px;
        width:90px;
        height: 110px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .films_right{
        position: relative;
        flex: 1;
        height: 110px;
        padding-right: 20px;
        .films_right_title{
          color: #111;
          font-size: 16px;
          font-weight: bold;
        }
        .films_right_address{
          width: 250px;
          padding-top: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow:ellipsis;
        }
        .films_seach{
          margin:10px 3px 0 3px;
          background: #7355ff;
          display: inline-block;
        }
        .films_price{
          position: absolute;
          left: 0;
          bottom: 0;
          color: #ff1268;
        }
      }
    }
  }
</style>
