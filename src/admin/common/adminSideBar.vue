<template>
    <div class="sidebar">
        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;background-color: white">-->
            <!--<el-radio-button :label="false">展开</el-radio-button>-->
            <!--<el-radio-button :label="true">收起</el-radio-button>-->
        <!--</el-radio-group>-->
        <el-menu :default-active="onRoutes"  class=""  unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template >
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse: true,
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'searchSingle',
                        title: '单指标查询',
                    },
                    {
                        icon: 'el-icon-location',
                        index: 'admin',
                        title: '信息管理',
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'listuser',
                        title: '用户管理',
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'compare',
                        title: '信息比较',
                    },
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 70px;
        bottom:0;
        background: white;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
