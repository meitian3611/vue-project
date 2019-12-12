<template>
  <div class='date_page'>
    <div class="time">
      <ul>
        <li v-for="item in dataList" :key="item" @click="titles(item)">{{item}}</li>
      </ul>
    </div>
   <ele-calendar
    :render-content='renderContent'
    :data='datedef'
    :prop='prop'
    @pick='getData'
    ref='name'>
  </ele-calendar>
  </div>
</template>
<script>
import eleCalendar from 'ele-calendar'
import 'ele-calendar/dist/vue-calendar.css'
import moment from 'moment'
// import axios from 'axios'
export default {
  name: 'Date',
  data () {
    return {
      dataList: ['全部时间', '本周', '本月', '周末'],
      datedef: [
        { 'date': '2019-12-10', 'content': '有演出', 'cid': null },
        { 'date': '2019-12-12', 'content': null, 'cid': null },
        { 'date': '2020-1-20' },
        { 'date': '2019-12-25' },
        { 'date': '2020-1-15' },
        { 'date': '2019-12-19' },
        { 'date': '2020-1-8' },
        { 'date': '2020-1-5' }

      ],
      prop: 'date' // 对应日期字段名
      // todo: { 'yearLabel': '年', 'month': '月', 'event': [prevYear, prevMonth, nextYear, nextMonth] }
    }
  },
  components: {
    eleCalendar
  },
  methods: {
    renderContent (h, parmas) {
      const loop = data => {
        return (
          data.defvalue.value ? (<div><div>{ data.defvalue.text }</div>
            <span style='color:rgb(255, 18, 104)'>有演出</span>
          </div>) : <div>{ data.defvalue.text }</div>
        )
      }
      return (
        <div style = 'min-height:60px;'>
          { loop(parmas) }
        </div>
      )
    },
    titles (item) {
      console.log(item)
      let clas = document.getElementsByTagName('body')[0].className
      if (clas) {
        document.getElementsByClassName('van-dropdown-item--down')[1].style.display = 'none'
      }
      window.localStorage.setItem('time', JSON.stringify(item))
      this.$router.go(0)
      this.$emit('showDate', item)
    },
    getData (data, event, row, dome) {
      let clas = document.getElementsByTagName('body')[0].className
      if (clas) {
        document.getElementsByClassName('van-dropdown-item--down')[1].style.display = 'none'
      }
      let saveDate = moment(data).format('YYYY.MM.DD')
      window.localStorage.setItem('time', JSON.stringify(saveDate))
      let datas = moment(data).format('MM月DD日')
      this.$router.go(0)
      this.$emit('showDate', datas)
    }
  }
}
</script>

<style lang='scss'>
.date_page{
  .time ul{
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    li{
      width: 20%;
      height: 40px;
      font-size: 16px;
      text-align: center;
      line-height: 40px;
      margin-top: 10px;
      border: 1px solid  #e7e7e7;
      border-radius: 5px;
    }
  }
  .el-date-table-calendar[data-v-55be3324]{
    font-size: 14px;
  }
  .el-picker-panel-calendar[data-v-151d6f47]{
    // color:rgb(255, 18, 104);
  }
  .el-date-table-calendar th[data-v-55be3324]{
    font-size: 14px;
    font-weight: bold;
  }
  .el-date-picker-calendar__header[data-v-151d6f47]{
    font-size: 14px;
  }
  }
</style>
