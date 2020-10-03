<template>
    <div class="login-wrap">
        <!--<div class="ms-title">欢迎使用<span style="font-size: 10px; margin-left: 73px;"><u></u></span></div>-->
        <div class="demo-input-suffix ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                <el-form-item prop="用户名"label="用户名">
                    <el-input v-model="ruleForm.username"  placeholder="username" size="small" @keyup.enter.native="submitForm('ruleForm')">
                    </el-input>
                </el-form-item>
                <el-form-item prop="密码"label="密码">
                    <el-input  v-model="ruleForm.password" type="password" placeholder="password" size="small"  @keyup.enter.native="submitForm('ruleForm')">
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')" style="background-color: #91caeb;border: 0px">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    // radio:''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        created(){
            localStorage.setItem('ms_username',"")
            localStorage.setItem('key',"")
            localStorage.setItem('ms_realname',"")
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        let params={
                            "username":self.ruleForm.username,
                        }
                        this.$http.post("/api/admin/login",params).then(
                            success=>{
                                if(success.data){
                                    if(success.data.password==self.ruleForm.password){
                                        if(success.data.status=='0'){
                                            this.$message({
                                                type:'success',
                                                message:'登入成功'
                                            })
                                            localStorage.setItem('ms_username',self.ruleForm.username)
                                            localStorage.setItem('key',success.data.level)
                                            localStorage.setItem('value',success.data.realname)
                                            if(success.data.level==0){
                                                self.$router.push('/admin');
                                            }else if(success.data.level==1) {
                                                self.$router.push('/home');
                                            }else if(success.data.level==3){
                                                self.$router.push('/home');
                                            }
                                        }else{
                                            this.$message({
                                                type:'error',
                                                message:'该账户被禁用'
                                            })
                                        }
                                    }else {
                                        this.$message({
                                            type:'error',
                                            message:'登入失败：密码输入错误'
                                        })
                                    }
                                }else{
                                    this.$message({
                                        type:'error',
                                        message:'登入失败账号输入错误'
                                    })
                                }
                            }
                        )


                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .el-radio-button__inner{
        font-size: 8px;
        color: grey;
    }
    .el-input__inner,.el-button{
        border-radius:20px;
    }
    .el-input__inner{
        border-radius:20px;
    }
    .icon-user{

        position: absolute;left: 0;z-index:5;

        background-image: url('../assets/bg1.jpg'); /*引入图片图片*/

        background-repeat: no-repeat; /*设置图片不重复*/

        background-position: 0px 0px; /*图片显示的位置*/

        width: 20px; /*设置图片显示的宽*/

        height: 20px; /*图片显示的高*/

    }
    .login-wrap{
        position: relative;
        background: url("../assets/bg.png") no-repeat center;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top: 49%;
        left: 30%;
        width: 100%;
        margin-top: -230px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        font-weight: bold;

    }
    .ms-login{
        position: absolute;
        left:84%;
        top:36%;
        width:216px;
        height:160px;
        margin:-150px 0 0 -250px;
        padding:40px;
        border-radius: 20px;
        /* background: #fff;*/
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:30px;
    }


</style>
