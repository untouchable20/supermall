<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{computedTime(commentInfo.created)}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-img">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils'
export default {
  name: "DetailCommentInfo",
  props:{
    commentInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{ }
  },
  computed:{
    //讲时间戳转为具体的时间
    computedTime(){
      return function(value){
        let date = new Date(value * 1000);
        return formatDate(date, "yyyy-MM-dd hh:mm:ss");
      }
    }
  }
}
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333333;
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
.info-header {
  line-height: 50px;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.header-title {
  font-size: 15px;
  float: left;
}
.header-more {
  font-size: 13px;
  float: right;
  margin-right: 10px;
}
.info-user {
  padding: 10px 0 5px;
}
.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.info-user span {
  font-size: 15px;
  position: relative;
  top: -15px;
  margin-left: 10px;
}
.info-detail {
  padding: 0 5px 15px;
}
.info-detail p {
  font-size: 14px;
  line-height: 1.5;
  color: #777777;
}
.info-detail .info-other {
  font-size: 12px;
  margin-top: 10px;
  color: #999999;
}
.info-other .date {
  margin-right: 8px;
}
.info-img {
  margin-top: 10px;
}
.info-img img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
