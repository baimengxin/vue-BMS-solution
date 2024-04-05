<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useUserStore } from '@/stores'
import LangSelect from '@/components/LangSelect/index.vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

// 验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.t('msg.login.usernameRule')
    }
  ],
  password: [{ required: true, trigger: 'blur', validator: validatePassword() }]
})

// 密码类型
const passwordType = ref('password')
// 点击显示隐藏 密码
const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

// 登录状态的处理
const loading = ref(false)
const loginFromRef = ref(null)
const store = useUserStore()

// console.log()
const handleLogin = () => {
  loginFromRef.value.validate((vaild) => {
    if (!vaild) return

    loading.value = true

    store
      .getLoginFn(loginForm.value)
      .then(() => {
        loading.value = false
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>

<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginFromRef" :model="loginForm" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <LangSelect class="lang-select" effect="light" />
      </div>

      <el-form-item prop="username">
        <!-- 图标 -->
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
          <!-- <span class="svg-container">
            <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
          </span> -->
        </span>

        <el-input placeholder="username" name="username" type="text" v-model="loginForm.username" />
      </el-form-item>

      <el-form-item prop="password">
        <!-- 图标 -->
        <span class="svg-container">
          <el-icon>
            <lock />
          </el-icon>
        </span>

        <el-input
          placeholder="password"
          name="password"
          :type="passwordType"
          v-model="loginForm.password"
        />

        <span class="show-pwd" @click="onChangePwdType">
          <el-icon>
            <Hide v-if="passwordType === 'password'" />
            <View v-else />
          </el-icon>
        </span>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        :loading="loading"
        @click="handleLogin"
        >{{ $t('msg.login.loginBtn') }}</el-button
      >

      <div class="tips" v-html="$t('msg.login.desc')"></div>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    /* min-width: 100%; */
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    :deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 85%;

      .el-input__wrapper {
        width: 100%;
      }

      input {
        width: 100%;
        background: transparent;
        /* -webkit-appearance: none; */
        border: 0px;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: #889aa4;
        height: 47px;
        caret-color: #fff;
      }
    }
  }
}

.svg-container {
  padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  display: inline-block;
}

.title-container {
  position: relative;

  .title {
    font-size: 26px;
    color: #889aa4;
    margin: 0 auto 40px auto;
    text-align: center;
    font-weight: bold;
  }

  .lang-select {
    position: absolute;
    top: 4px;
    right: 0;
    background-color: #fff;
    font-size: 22px;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
  }
}

.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: #889aa4;
  cursor: pointer;
  user-select: none;
}

.tips {
  font-size: 16px;
  color: #fff;
  line-height: 20px;
}
</style>
