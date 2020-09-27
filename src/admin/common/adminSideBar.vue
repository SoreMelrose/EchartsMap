<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
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
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'listadmin',
                        title: '用户管理',
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'chinaMap',
                        title: '地图管理',
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'listprj',
                        title: '项目管理',
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'statements4prj',
                        title: '项目财务列表',
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'listtaken',
                        title: '收支情况统计',
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'listprjft',
                        title: '项目经费类别管理',
                    },

                ]
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
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
