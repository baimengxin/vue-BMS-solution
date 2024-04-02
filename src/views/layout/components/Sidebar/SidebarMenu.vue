<script setup></script>

<template>
  <!-- 一级菜单 -->
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 子集 menu 菜单 -->
    <el-sub-menu index="1">
      <template #title>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu>

    <!-- 具体菜单项 -->
    <el-menu-item index="1-24">
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped></style>
