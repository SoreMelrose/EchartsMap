<template>
    <div>
    <div  :class="[clickSearch?'boxafter':'box']">
        <div class="searchBox">
            <el-input v-model="keyword" class="searchInput" @keyup.enter.native="_search" placeholder="请输入搜索内容"></el-input>
            <el-button @click="_search" class="searchButton" >搜索</el-button>
            <!--<p>消息是: {{ keyword }}</p>-->
        </div>
    </div>
    <el-table :data="searchData" style="width: 100%"  v-if="clickSearch" >
        <el-table-column prop="type" label="类型" width="150px"></el-table-column>
        <el-table-column prop="year1978" label="1978年"></el-table-column>
        <el-table-column prop="year1979" label="1979年"></el-table-column>
        <el-table-column prop="year1980" label="1980年"></el-table-column>
        <el-table-column prop="year1981" label="1981年"></el-table-column>
        <el-table-column prop="year1982" label="1982年"></el-table-column>
        <el-table-column prop="year1983" label="1983年"></el-table-column>
        <el-table-column prop="year1984" label="1984年"></el-table-column>
        <el-table-column prop="year1985" label="1985年"></el-table-column>
        <el-table-column prop="year1986" label="1986年"></el-table-column>
        <el-table-column prop="year1987" label="1987年"></el-table-column>
        <el-table-column prop="year1988" label="1988年"></el-table-column>


    </el-table>
    <!--<div slot="empty" style="height:200px;line-height: 200px;" v-if="clickSearch">-->
        <!--<i class="el-icon-warning-outline"></i>暂无数据-->
    <!--</div>-->
    <!--<ol>-->
        <!--<li v-for="item in searchData" v-if="clickSearch">-->
            <!--{{ item.type }}-->
        <!--</li>-->
    <!--</ol>-->
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                clickSearch: false,
                keyword: '',
                name: "",
                searchData:[]
            }
        },

        methods:{
            _search(){
               console.log('submit')
               const self=this;
               if(!this.keyword) return;
                // this.$set(this.clickSearch,true);
               this.clickSearch=true;
               console.log(this.clickSearch);
               let data={
                   "keyword":self.keyword
               };
               this.$axios({
                   url: "/api/searchData/single2",
                   method: "post",
                   params: data
               }).then(res => {
                   console.log(res.data)
                   this.searchData=res.data;
               })

           }

        }
    }
</script>

<style scoped>
    .box{
        margin: 0 auto;
        padding-top: 80px;
        height: 50px;
        width: 100%;
    }
    .boxafter{
        margin: 0 auto;
        padding-top: 10px;
        height: 50px;
        width: 100%;
    }
    .searchBox{
        margin: 0 auto;
        width: 60%;
        position: relative;
    }
    .searchInput{
        display: inline-block;
        width: 85%;
        height: 38px;
        padding-left: 10px;
        /*border: 1px solid #cccccc;*/
        float: left;
        box-sizing: border-box;
        -moz-box-sizing:border-box; /* Firefox */
        -webkit-box-sizing:border-box; /* Safari */
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }
    .searchButton{
        display: inline-block;
        width: 15%;
        height: 38px;
        /*line-height: 40px;*/
        float: left;
        background-color: #00a0e9;
        font-size: 16px;
        cursor: pointer;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        border: none;
        color: #fff;
    }
</style>
