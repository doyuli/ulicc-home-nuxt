<template>
    <div class="animate">
        <BackGroundModel :downloadModel="downloadModel" />
        <div class="container" v-show="!downloadModel">
            <!-- 设置模块 -->
            <div class="setting-wrapper">
                <setting-two class="setting-icon xs-hidden" theme="filled" size="28" fill="#ffffff60" @click="onSetting" />
                <div class="setting-box-wrapper" v-if="settingBoardToggle" @click="settingBoardToggle = false">
                    <SettingBoard @close="settingBoardToggle = false" />
                </div>
            </div>
            <!-- 主要模块 -->
            <div class="content">
                <ContentModel />
            </div>
            <!-- 移动端菜单按钮 -->

            <div class="mobile-menu">
                <Icon size="24" :name="mobileToggle ? 'material-symbols:close-rounded' : 'gravity-ui:bars'"
                    @click="mobileToggle = !mobileToggle" />
            </div>
        </div>
        <FooterModel v-show="!downloadModel" />
    </div>
</template>

<script setup lang="ts">
import { SettingTwo } from "@icon-park/vue-next";

// 壁纸展示模式开启状态
const downloadModel = useDownloadModel()
// 移动端功能区展示状态
const mobileToggle = useMobileToggle()

// 设置面板开启状态
const settingBoardToggle = ref(false)
const onSetting = () => {
    settingBoardToggle.value = true
}

</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    width: 100%;
    height: 100vh;

    @media (max-width: 1200px) {
        padding: 0 2vw;
    }

    .setting-icon {
        position: absolute;
        right: 32px;
        top: 32px;
        width: 28px;
        height: 28px;
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }
    }

    .setting-box-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00000080;
        backdrop-filter: blur(20px);
        z-index: 2;
        animation: fade;
        -webkit-animation: fade 0.5s;
    }

    .content {
        width: 100%;
        height: 100%;
    }

    .mobile-menu {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 84%;
        left: calc(50% - 28px);
        width: 56px;
        height: 34px;
        background: rgb(0 0 0 / 20%);
        backdrop-filter: blur(10px);
        border-radius: 6px;
        transition: all 0.3s;
        animation: fade;
        -webkit-animation: fade 0.5s;

        &:active {
            transform: scale(0.95);
        }

        .i-icon {
            transform: translateY(2px);
        }

        @media (min-width: 720px) {
            display: none;
        }
    }
}

// 开屏动画
.animate {
    transform: scale(1);
    transition: all ease 1.25s;
    opacity: 1;
    filter: blur(0);
    width: 100vw;
    height: 100vh;
}

.loading {
    .animate {
        transform: scale(1.2);
        transition: all ease 1.25s;
        opacity: 0;
        filter: blur(10px);
    }
}
</style>
  