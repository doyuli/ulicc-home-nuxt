<template>
    <div class="setting-box" @mouseenter="closeIconShow = true" @mouseleave="closeIconShow = false" @click.stop>
        <transition name="el-fade-in-linear">
            <close-one class="close-icon" theme="filled" size="28" fill="#ffffff60" v-show="closeIconShow"
                @click="emits('close')" />
        </transition>
        <div class="content">
            <el-collapse class="collapse" v-model="collapseActive" accordion>
                <el-collapse-item title="壁纸设置" name="bgset">
                    <div class="bg-set">
                        <el-radio-group v-model="coverType" text-color="#ffffff">
                            <el-radio :value="0" size="large" border>默认壁纸</el-radio>
                            <el-radio :value="1" size="large" border>每日一图</el-radio>
                            <el-radio :value="2" size="large" border>随机风景</el-radio>
                            <el-radio :value="3" size="large" border>随机动漫</el-radio>
                        </el-radio-group>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="其他设置" name="2">
                    <div class="item">
                        <span class="text">建站日期显示</span>
                        <el-switch v-model="siteStartToggle" inline-prompt :active-icon="CheckSmall"
                            :inactive-icon="CloseSmall" />
                    </div>
                </el-collapse-item>
                <el-collapse-item title="其他设置" name="3">
                    <div>设置内容待增加</div>
                </el-collapse-item>
                <el-collapse-item title="其他设置" name="4">
                    <div>设置内容待增加</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CloseOne, CheckSmall, CloseSmall } from "@icon-park/vue-next";

// 壁纸类型
const coverType = useCoverType()
// 建站日期开启状态
const siteStartToggle = useSiteStartToggle()
// 关闭按钮显示状态
const closeIconShow = ref(false)

const collapseActive = ref("bgset");

const emits = defineEmits(['close'])
</script>

<style lang="scss" scoped>
.setting-box {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: rgb(255 255 255 / 40%);
    border-radius: 6px;
    padding: 40px;

    .close-icon {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 28px;
        height: 28px;
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }

        &:active {
            transform: scale(1);
        }
    }

    .content {
        padding: 24px;

        .collapse {
            border-radius: 8px;
            --el-collapse-content-bg-color: #ffffff10;
            border-color: transparent;
            overflow: hidden;

            :deep(.el-collapse-item__header) {
                background-color: #ffffff30;
                color: #fff;
                font-size: 15px;
                padding-left: 18px;
                border-color: transparent;
            }

            :deep(.el-collapse-item__wrap) {
                border-color: transparent;

                .el-collapse-item__content {
                    padding: 20px;

                    .item {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        font-size: 14px;

                        .el-switch__core {
                            border-color: transparent;
                            background-color: #ffffff30;
                        }
                    }

                    .bg-set {
                        .el-radio-group {
                            justify-content: space-between;

                            .el-radio {
                                margin: 10px 16px;
                                background: #ffffff26;
                                border: 2px solid transparent;
                                border-radius: 8px;

                                .el-radio__label {
                                    color: #fff;
                                }

                                .el-radio__inner {
                                    background: #ffffff06 !important;
                                    border: 2px solid #eeeeee !important;
                                }

                                &.is-checked {
                                    background: #ffffff06 !important;
                                    border: 2px solid #eeeeee !important;
                                }

                                .is-checked {
                                    .el-radio__inner {
                                        background-color: #ffffff30 !important;
                                        border-color: #fff !important;
                                    }

                                    &+.el-radio__label {
                                        color: #fff !important;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}
</style>