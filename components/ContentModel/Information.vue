<script setup lang="ts">
import { reactive, h } from "vue";
import { QuoteLeft, QuoteRight } from "@vicons/fa";
import { Error } from "@icon-park/vue-next";
import { ElMessage } from 'element-plus'

const { siteConfig: { stieDomain, siteLogo: logo } } = useAppConfig()

// 当前窗口宽度
const innerWidth = useInnerWidth()
// 时光胶囊盒子开启状态
const timeCapsuleToggle = useTimeCapsuleToggle()
// 站点地址分割
const siteUrl = stieDomain.split('.')
const avatar = 'image/avatar.jpg'
// 站点头像
const siteLogo = logo ? logo : avatar
// 站点描述信息
const descriptionText = reactive({
    hello: 'Hello World !',
    text: '一个建立于 21 世纪的小站，存活于互联网的边缘'
})

const descriptionTextMap = {
    default: {
        hello: 'Hello World !',
        text: '一个建立于 21 世纪的小站，存活于互联网的边缘'
    },
    timeCapsule: {
        hello: 'Oops !',
        text: '哎呀，这都被你发现了（ 再点击一次可关闭 ） '
    }
}

// 时光胶囊盒子切换
const innerToggle = () => {
    if (innerWidth.value >= 990) {
        timeCapsuleToggle.value = !timeCapsuleToggle.value
        const temp = descriptionTextMap[timeCapsuleToggle.value ? 'timeCapsule' : 'default']
        descriptionText.hello = temp.hello
        descriptionText.text = temp.text
        return
    }
    ElMessage({
        message: "当前页面宽度不足以开启盒子",
        grouping: true,
        icon: h(Error, {
            theme: "filled",
            fill: "#efefef",
        }),
    });

}

// 移动端下，点击Logo默认打开功能区
const isMobile = useIsMobile()
const mobileToggle = useMobileToggle()
const onMobileClick = () => {
    if (isMobile.value) {
        mobileToggle.value = !mobileToggle.value
    }
}
</script>

<template>
    <!-- 基本信息 -->
    <div class="message-wrapper" @click="onMobileClick">
        <!-- Logo -->
        <div class="logo">
            <img class="logo-img" :src="siteLogo" alt="logo" />
            <div class="name text-hidden">
                <span class="bg">{{ siteUrl[0] }}</span>
                <span class="sm">.{{ siteUrl[1] }}</span>
            </div>
        </div>
        <!-- 简介 -->
        <div class="description cards" @click="innerToggle">
            <div class="content">
                <QuoteLeft width="16" height="16" />
                <div class="text">
                    <p>{{ descriptionText.hello }}</p>
                    <p>{{ descriptionText.text }}</p>
                </div>
                <QuoteRight width="16" height="16" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.message-wrapper {
    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        animation: fade;
        -webkit-animation: fade 0.5s;

        .logo-img {
            border-radius: 50%;
            width: 120px;
            border: 3px solid #ffffff;
        }

        .name {
            width: 100%;
            height: 142px;
            margin-left: 12px;
            transform: translateY(-8px);
            font-family: "Pacifico-Regular";

            .bg {
                font-size: 5rem;
            }

            .sm {
                margin-left: 6px;
                font-size: 2rem;

                @media (min-width: 720px) and (max-width: 789px) {
                    display: none;
                }
            }
        }

        @media (max-width: 768px) {
            .logo-img {
                width: 100px;
            }

            .name {
                height: 128px;

                .bg {
                    font-size: 4.5rem;
                }
            }
        }
    }

    .description {
        padding: 1rem;
        margin-top: 3.5rem;
        max-width: 460px;
        animation: fade;
        -webkit-animation: fade 0.5s;

        .content {
            display: flex;
            justify-content: space-between;

            .text {
                margin: 0.75rem 1rem;
                line-height: 2rem;
                margin-right: auto;

                p {
                    &:nth-of-type(1) {
                        font-family: "Pacifico-Regular";
                    }
                }
            }

            svg:nth-of-type(2) {
                align-self: flex-end;
            }
        }

        @media (max-width: 720px) {
            max-width: 100%;
            pointer-events: none;
        }
    }

    @media (max-width: 390px) {
        .logo {
            flex-direction: column;

            .logo-img {
                display: none;
            }

            .name {
                margin-left: 0;
                height: auto;
                transform: none;
                text-align: center;

                .bg {
                    font-size: 3.5rem;
                }

                .sm {
                    font-size: 1.4rem;
                }
            }
        }

        .description {
            margin-top: 2.5rem;
        }
    }
}
</style>