<template>
  <ContainView :loading="loading">
    <NuxtPage />
  </ContainView>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { helloInit } from "@/utils/site"
import cursorInit from "@/utils/cursor";
import '~/assets/css/global.scss'
import '~/assets/css/base.css'

// 获取站点配置
const appConfig = useAppConfig()
const { siteConfig: { siteName, consoleText } } = appConfig

// 设置站点SEOMeta
useSeoMeta({
  title: siteName,
  description: '这是我的神奇网站，让我来告诉你关于它的一切。',
})

// 获取全局状态管理
const timeCapsuleToggle = useTimeCapsuleToggle()
const innerWidth = useInnerWidth()
const downloadModel = useDownloadModel()

// 页面加载状态
const loading = ref(true)

// 页面宽度监听
const resizeHandle = () => {
  setInnerWidth(window.innerWidth)
};

// 鼠标中键监听
const mousedownHandle = (event: MouseEvent) => {
  if (event.button == 1) {
    downloadModel.value = !downloadModel.value
    if (downloadModel.value) {
      ElMessage("已开启壁纸展示状态");
    } else {
      ElMessage("已退出壁纸展示状态");
    }
  }
}

const init = () => {
  // 初始化站点鼠标样式
  cursorInit()
  // 初始化站点问候语
  helloInit()
  // 初始化全局记录的窗口宽度
  resizeHandle();

  // 鼠标中键事件
  window.addEventListener("mousedown", mousedownHandle);
  // 窗口变化事件
  window.addEventListener("resize", resizeHandle);

  // 屏蔽右键
  document.oncontextmenu = () => {
    ElMessage({
      message: "为了浏览体验，本站禁用右键",
      grouping: true,
      duration: 2000,
    });
  };

  console.log("加载完成");
  loading.value = false

  // 控制台输出
  console.log(
    `%c${consoleText}`,
    'color: rgb(30,152,255)'
  );

}

watch(
  innerWidth,
  (val: number) => {
    if (val < 990) {
      timeCapsuleToggle.value = false;
    }
  }
);

onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeHandle);
  window.removeEventListener("mousedown", mousedownHandle);
})

</script>
