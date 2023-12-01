<template>
  <div class="wrap">
    <el-tabs v-model="activeTableName" type="card" class="estate-tabs" @tab-click="handleTypeClick">
      <el-tab-pane label="在售列表" name="在售列表" key="soldList">
        <header>
          <!-- <el-button v-for="estateName in estateKeyList" @click="handleEstateTabClick(estateName)" :key="estateName" type="primary" size="small"> {{ estateNameMap[estateName] }}</el-button> -->
          <el-tabs v-model="activeEstateName" type="card" class="estate-tabs" @tab-click="handleEstateTabClick">
            <el-tab-pane v-for="estateName in estateKeyList" :label="estateNameMap[estateName]" :name="estateName" :key="estateName"></el-tab-pane>
          </el-tabs>
        </header>
        <main class="roomlist_wrap">
          <roomTable :estateName="activeEstateName" />
        </main>
      </el-tab-pane>
      <el-tab-pane label="小区列表" name="小区列表" key="bubbleList">
        <div style="padding: 3px 13px">
          <XiaoquTable />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

import { estates, estateNameMap } from "@/utils";
import roomTable from "./components/roomTable.vue";
import XiaoquTable from "./components/xiaoquTable.vue";

const activeTableName = ref("在售列表"); // 在售列表 小区列表
const estateKeyList = Object.keys(estates);
const activeEstateName = ref("cjyf");

const handleTypeClick = (tab: any) => {
  console.log("🚀 > handleTypeClick > tab:", tab);
};
const handleEstateTabClick = (estateName: any) => {
  // console.log("🚀 > handleEstateTabClick > estateName:", estateName);
  activeEstateName.value = estateName.paneName;
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  header {
    padding: 10px;
    background-color: #fff;
    .estate-tabs {
      :deep(.el-tabs__header) {
        height: 32px;
      }
      :deep(.el-tabs__nav-wrap) {
        .el-tabs__item {
          height: 32px;
        }
        .el-tabs__item.is-active {
          color: #fff;
          background-color: #006fff;
          border-radius: 3px;
        }
      }
    }
  }
  .roomlist_wrap {
    padding: 8px;
    width: 100%;
  }
}
</style>
