<template>
    <div>
        <div :class="[clickSearch?'boxafter':'box']">
            <div class="searchBox">
                <el-input v-model="keyword" class="searchInput" @keyup.enter.native="_search"
                          placeholder="请输入搜索内容"></el-input>
                <el-button @click="_search" class="searchButton">搜索</el-button>
                <!--<p>消息是: {{ keyword }}</p>-->
            </div>
        </div>
        <div id="myChart" :style="{width: '100%', height: '500px'}" v-if="showWay!==-1"></div>
        <el-table :data="searchData" style="width: 100%" v-if="clickSearch" height="550">
            <el-table-column prop="type" label="类型" width="150px" fixed></el-table-column>
            <el-table-column prop="year2018" label="2018年"></el-table-column>
            <el-table-column prop="year2017" label="2017年"></el-table-column>
            <el-table-column prop="year2016" label="2016年"></el-table-column>
            <el-table-column prop="year2015" label="2015年"></el-table-column>
            <el-table-column prop="year2014" label="2014年"></el-table-column>
            <el-table-column prop="year2013" label="2013年"></el-table-column>
            <el-table-column prop="year2012" label="2012年"></el-table-column>
            <el-table-column prop="year2011" label="2011年"></el-table-column>
            <el-table-column prop="year2010" label="2010年"></el-table-column>
            <el-table-column prop="year2009" label="2009年"></el-table-column>
            <el-table-column prop="year2008" label="2008年"></el-table-column>
            <el-table-column prop="year2007" label="2007年"></el-table-column>
            <el-table-column prop="year2006" label="2006年"></el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="80">
                <template slot-scope="scope">
                    <el-button @click="viewPic(scope.row)" type="text" size="small">查看图表</el-button>
                    <!--<el-button type="text" size="small">编辑</el-button>-->
                </template>
            </el-table-column>
            <el-table-column prop="year2005" label="2005年"></el-table-column>
            <el-table-column prop="year2004" label="2004年"></el-table-column>
            <el-table-column prop="year2003" label="2003年"></el-table-column>
            <el-table-column prop="year2002" label="2002年"></el-table-column>
            <el-table-column prop="year2001" label="2001年"></el-table-column>
            <el-table-column prop="year2000" label="2000年"></el-table-column>
            <el-table-column prop="year1999" label="1999年"></el-table-column>
            <el-table-column prop="year1998" label="1998年"></el-table-column>
            <el-table-column prop="year1997" label="1997年"></el-table-column>
            <el-table-column prop="year1996" label="1996年"></el-table-column>
            <el-table-column prop="year1995" label="1995年"></el-table-column>
            <el-table-column prop="year1994" label="1994年"></el-table-column>
            <el-table-column prop="year1993" label="1993年"></el-table-column>
            <el-table-column prop="year1992" label="1992年"></el-table-column>

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
        data: function () {
            return {
                clickSearch: false,
                keyword: '',
                searchData: [],
                showWay: -1,
            }
        },

        methods: {
            viewPic(data) {
                this.showWay = 0;
                console.log(data);
                this.$nextTick(() => {
                    this.drawPic(data)
                })
            },
            drawPic(_data) {
                console.log(_data);
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                // console.log(_data['type']);
                let showData = [];
                let xAxisData = []
                for (let key in _data) {
                    // console.log(_data[key]);
                    xAxisData.unshift(key);
                    showData.unshift(_data[key]);
                }
                // 绘制图表
                myChart.setOption({
                    // title: {text: _data.type},
                    tooltip: {},
                    xAxis: {
                        data: xAxisData,
                        type: 'category',
                    },
                    yAxis: {},
                    series: [{
                        name: _data.type,
                        type: 'bar',
                        data: showData
                    }]
                });
            },
            _search() {
                // console.log('submit');
                const self = this;
                if (!this.keyword) return;
                // this.$set(this.clickSearch,true);
                this.clickSearch = true;
                // console.log(this.clickSearch);
                let data = {
                    "keyword": self.keyword
                };
                this.$axios({
                    url: "/api/searchData/single2",
                    method: "post",
                    params: data
                }).then(res => {
                    console.log(res.data)
                    this.searchData = res.data;
                })

            }

        }
    }
</script>

<style scoped>
    .box {
        margin: 0 auto;
        padding-top: 80px;
        height: 50px;
        width: 100%;
    }

    .boxafter {
        margin: 0 auto;
        padding-top: 10px;
        height: 50px;
        width: 100%;
    }

    .searchBox {
        margin: 0 auto;
        width: 60%;
        position: relative;
    }

    .searchInput {
        display: inline-block;
        width: 85%;
        height: 38px;
        padding-left: 10px;
        /*border: 1px solid #cccccc;*/
        float: left;
        box-sizing: border-box;
        -moz-box-sizing: border-box; /* Firefox */
        -webkit-box-sizing: border-box; /* Safari */
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }

    .searchButton {
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
