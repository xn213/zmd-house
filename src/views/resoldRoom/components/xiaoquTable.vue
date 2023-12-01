<template>
  <h3 class="bubble_total">市政府周边共找到{{ visibleMapData.bubbleList.length }}个小区, 在售共{{ visibleMapData.visibleCount }}套</h3>
  <el-table class="bubble_list_table" :data="visibleMapData.bubbleList" :default-sort="{ prop: 'count', order: 'descending' }" v-loading="loading" border size="small" style="width: 100%" height="calc(100vh - 75px)">
    <el-table-column label="序号" type="index" width="45">
      <template #default="props">{{ props.$index + 1 }}</template>
    </el-table-column>
    <el-table-column label="小区" prop="name" />
    <el-table-column label="在售(套)" prop="count" sortable />
    <el-table-column label="单价" prop="price" sortable />
    <el-table-column label="描述" prop="desc" />
    <el-table-column label="entityId resblockId" prop="entityId" />
    <!-- <el-table-column label="详情">
      <template #default="{ row }">
        <a :href="row.actionUrl" target="_blank" class="">打开详情</a>
      </template>
    </el-table-column> -->
  </el-table>
  <img v-if="imgUrl" class="preview_cover" :src="imgUrl" />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { visibleMapData } from "@/utils";

const props = defineProps({
  estateName: {
    type: String,
    default: "cjyf",
  },
});
const loading = ref(true);
const imgUrl = ref("");

function handleSort(a: any, b: any) {
  console.log("🚀 > handleSort > a:", a);
  return a - b;
}

onBeforeMount(() => {
  loading.value = true;
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.bubble_total {
  padding: 5px 13px;
}
.tags .tag {
  display: inline-block;
  padding: 0 9px;
  height: 30px;
  line-height: 30px;
  background-color: #e1f3ff;
  color: #5f5f5f;
  margin-right: 3px;
}
.priceInfo {
  display: inline-block;
  font-family: Tahoma;
  font-size: 18px;
  line-height: 21px;
  color: #fe615a;
  font-weight: 700;
  letter-spacing: -1px;
  max-width: 165px;
  .unit {
    font-size: 13px;
  }
}
</style>
