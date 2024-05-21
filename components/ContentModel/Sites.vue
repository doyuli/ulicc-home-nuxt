<script setup lang="ts">
import { Link } from "@vicons/fa";
const { webLinks } = useAppConfig();

const jumpLink = (url: string) => {
    window.open(url, "_blank");
};
</script>

<template>
    <div class="weblink-wrapper">
        <div class="line">
            <Link width="20" height="20" />
            <span class="title">网站列表</span>
        </div>
        <el-row class="link-all" :gutter="20">
            <el-col :span="8" v-for="(item, i) in webLinks" :key="i" @click="jumpLink(item.link)">
                <div class="item cards" :style="i < 3 ? 'margin-bottom: 20px' : ''">
                    <Icon size="26" :name="item.icon" />
                    <span class="name">{{ item.name }}</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
.weblink-wrapper {
    .line {
        margin: 2rem 0.25rem 1rem;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        animation: fade;
        -webkit-animation: fade 0.5s;

        .title {
            margin-left: 8px;
            font-size: 1.15rem;
            text-shadow: 0 0 5px #00000050;
        }
    }

    .link-all {
        .item {
            height: 100px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            animation: fade;
            -webkit-animation: fade 0.5s;

            &:hover {
                transform: scale(1.02);
                background: rgb(0 0 0 / 40%);
                transition: 0.3s;
            }

            .name {
                font-size: 1.1rem;
                margin-left: 8px;
            }

            @media (min-width: 720px) and (max-width: 820px) {
                .name {
                    display: none;
                }
            }

            @media (max-width: 720px) {
                height: 80px;
            }

            @media (max-width: 460px) {
                flex-direction: column;

                .name {
                    font-size: 1rem;
                    margin-left: 0;
                    margin-top: 8px;
                }
            }
        }
    }
}
</style>