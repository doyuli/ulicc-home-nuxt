<template>
  <div class="bg-wrapper">
    <img class="bg-img" :src="bgUrl" alt="cover" />
    <div class="gray" :class="[downloadModel ? 'hidden' : '']" />
    <transition name="el-fade-in-linear">
      <a class="down" :href="bgUrl" target="_blank" v-show="props.downloadModel && coverType != 3">下载壁纸</a>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { SuccessPicture } from "@icon-park/vue-next";

const props = defineProps({
  downloadModel: {
    type: Boolean,
    default: false
  }
})

// 壁纸类型
const coverType = useCoverType()
// 壁纸展示模式开启状态
const downloadModel = useDownloadModel()

const bgUrl = ref('')
const bgTypeHandler = (type: 0 | 1 | 2 | 3) => {
  switch (type) {
    case 0:
      bgUrl.value = `image/bg/background${randomNum(1, 10)}.webp`;
      break;
    case 1:
      bgUrl.value = "https://api.dujin.org/bing/1920.php";
      break;
    case 2:
      bgUrl.value = "https://api.ixiaowai.cn/gqapi/gqapi.php";
      break;
    case 3:
      bgUrl.value = "https://api.ixiaowai.cn/api/api.php";
      break;
  }
}

onMounted(() => {
  bgTypeHandler(coverType.value)
})

watch(coverType, (val) => {
  bgTypeHandler(val)
  ElMessage({
    message: "壁纸设置成功",
    icon: h(SuccessPicture, {
      theme: "filled",
      fill: "#efefef",
    }),
  });
})
</script>

<style lang="scss" scoped>
.bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.25s;
  z-index: -1;

  .bg-img {
    transform: scale(1);
    filter: blur(0);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1.5s ease 0s;
    backface-visibility: hidden;
  }

  .gray {
    opacity: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(rgba(0, 0, 0, 0) 0,
        rgba(0, 0, 0, 0.5) 100%),
      radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);

    transition: 1.5s;

    &.hidden {
      opacity: 0;
      transition: 1.2s;
    }
  }

  .down {
    font-size: 16px;
    color: white;
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    padding: 20px 26px;
    border-radius: 8px;
    background-color: #00000030;
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;

    &:hover {
      transform: scale(1.05);
      background-color: #00000060;
    }

    &:active {
      transform: scale(1);
    }
  }
}

// 开屏动画
.loading {
  .cover {
    .bg {
      transition: 1.5s;
      transform: scale(1.1);
      filter: blur(10px);
    }

    .gray {
      transition: 1.5s;
      opacity: 0;
    }
  }
}
</style>
