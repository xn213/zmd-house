<template>
  <p>
    <span class="communityName">{{ xiaoqu.resblockCard.communityName }}</span>
    <span>
      参考均价：
      <span class="price_color">{{ xiaoqu.resblockCard.avgUnitPrice }}</span>
    </span>
    <span v-html="xiaoqu.resblockCard.countDesc"></span>
    <span>{{ xiaoqu.resblockCard.communityDesc }}</span>
  </p>
  <el-table class="room_list_table" :data="xiaoqu.list" :default-sort="{ prop: 'priceStr', order: 'ascending' }" v-loading="loading" border size="small" style="width: 100%" height="calc(100vh - 139px)">
    <el-table-column label="序号" type="index" width="45" fixed>
      <template #default="props">{{ props.$index + 1 }}</template>
    </el-table-column>
    <el-table-column label="小区" width="90" fixed>
      <template #default="{ row }">
        <span class="">{{ row.desc.split("/")[3] }}</span>
      </template>
    </el-table-column>
    <el-table-column label="类型" width="70">
      <template #default="{ row }">
        <span class="">{{ row.cardType }}</span>
      </template>
    </el-table-column>
    <el-table-column label="标题" width="380">
      <template #default="{ row }">
        <span class="">{{ row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="朝向">
      <template #default="{ row }">
        <span class="">{{ row.desc.split("/")[2] }}</span>
      </template>
    </el-table-column>
    <!-- <el-table-column label="描述" min-width="130">
      <template #default="{ row }">
        <span class="">{{ row.desc }}</span>
      </template>
    </el-table-column> -->
    <el-table-column label="单价(元/平)" prop="unitPriceStr" sortable width="100">
      <template #default="{ row }">
        <span class="priceInfo">{{ row.unitPriceStr.replace("元/平", "") }}</span>
      </template>
    </el-table-column>
    <el-table-column label="面积" prop="desc" sortable>
      <template #default="{ row }">
        <span class="">{{ Number(row.desc.split("/")[1].replace("㎡", "")) }}</span>
      </template>
    </el-table-column>
    <el-table-column label="总价(万)" prop="priceStr" width="85" sortable>
      <template #default="{ row }">
        <span class="priceInfo">
          <span>
            {{ Number(row.priceStr.replace("万", "")) }}
          </span>
          <span class="unit"> 万</span>
        </span>
      </template>
    </el-table-column>
    <el-table-column label="房源特色" min-width="230">
      <template #default="{ row }">
        <div class="tags" v-if="row.tags.length">
          <a v-for="tag in row.tags" class="tag is"> {{ tag.desc }}</a>
        </div>
      </template>
    </el-table-column>
    <!-- <el-table-column label="封面">
      <template #default="{ row }">
        <img class="small_cover" :src="row.coverPic" @mouseover="handleMouseover(row.coverPic)" />
      </template>
    </el-table-column> -->
    <el-table-column label="详情">
      <template #default="{ row }">
        <a :href="row.actionUrl" target="_blank" class="">打开详情</a>
      </template>
    </el-table-column>
  </el-table>
  <img v-if="imgUrl" class="preview_cover" :src="imgUrl" />
</template>

<script setup lang="ts">
import { onBeforeMount, ref, reactive, onMounted, computed, watch, h } from "vue";
import { estates } from "@/utils";

const props = defineProps({
  estateName: {
    type: String,
    default: "cjyf",
  },
});
const loading = ref(true);
const xiaoqu = ref(estates["cjyf"]);
const roomUrlList = ref([]);
const imgUrl = ref("");

watch(
  () => props.estateName,
  (newVal: string) => {
    xiaoqu.value = estates[newVal];
    roomUrlList.value = xiaoqu.value && xiaoqu.value.list.map((i: { actionUrl: any }) => i.actionUrl);
    console.log("🚀 > roomUrlList: ", roomUrlList.value);
  },
  {
    immediate: true,
  }
);

function handleMouseover(url: string) {
  console.log("🚀 > handleMouseover > imgUrl:", url);
  imgUrl.value = url;
}
function handleSort(a: any, b: any) {
  console.log("🚀 > handleSort > a:", a);
  return a - b;
}

onBeforeMount(() => {
  loading.value = true;
  xiaoqu.value = estates["cjyf"];
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.price_color,
._color {
  color: red;
}
p {
  padding: 0 13px 5px;
  color: #999;
  span.communityName {
    font-weight: 600;
  }
  span {
    margin-right: 13px;
  }
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
