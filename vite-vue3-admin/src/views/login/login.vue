<template>
    <div class="login-page">
        <el-card class="login-form">
            <div class="login-title">登 录</div>
            <el-form ref="ruleForm" :model="ruleFormData" status-icon class="demo-ruleForm">
                <el-form-item
                    prop="username"
                    :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]"
                >
                    <el-input
                        v-model.number="ruleFormData.username"
                        placeholder="请输入用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item
                    prop="password"
                    :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
                >
                    <el-input
                        v-model="ruleFormData.password"
                        placeholder="请输入密码"
                        type="password"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-submit" type="primary" @click="submitForm('ruleForm')"
                        >登录</el-button
                    >
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script lang="ts">
    import { defineComponent, reactive } from 'vue';

    export default defineComponent({
        name: 'Login',
        setup() {
            const ruleFormData = reactive({
                username: '',
                password: ''
            });

            return {
                ruleFormData
            };
        },
        methods: {
            submitForm(formName: string) {
                (this.$refs[formName] as HTMLFormElement).validate((valid: boolean) => {
                    if (valid) {
                        this.$router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    });
</script>
<style lang="scss">
    .login-page {
        position: fixed;
        width: 100%;
        height: 100%;
        background: url('images/bg.jpg') center center no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        .login-form {
            width: 380px;
            height: 380px;
            .login-title {
                font-size: 28px;
                text-align: center;
                padding-bottom: 10px;
                margin-bottom: 40px;
            }
            .login-submit {
                margin-top: 20px;
                width: 100%;
            }
        }
    }
</style>
