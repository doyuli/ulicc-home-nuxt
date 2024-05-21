<script setup lang="ts">
const { siteConfig: { stieDomain } } = useAppConfig()
const siteUrl = stieDomain.split('.')

const mobileToggle = useMobileToggle()
const timeCapsuleToggle = useTimeCapsuleToggle()
</script>

<template>
    <div class="content-wrapper">
        <div class="left-wrapper" :class="[mobileToggle ? 'hidden' : '']">
            <ContentModelInformation />
            <ContentModelSocal />
        </div>
        <div v-show="!timeCapsuleToggle" class="right-wrapper" :class="[mobileToggle ? '' : 'hidden']">
            <div class="logo text-hidden">
                <span class="bg">{{ siteUrl[0] }}</span>
                <span class="sm">.{{ siteUrl[1] }}</span>
            </div>
            <div class="content">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <ContentModelHitokoto />
                        <ContentModelMusic />
                    </el-col>
                    <el-col :span="12">
                        <ContentModelClock />
                    </el-col>
                </el-row>
            </div>
            <ContentModelSites />
        </div>
        <ContentModelTimeCapsule v-show="timeCapsuleToggle" />
    </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 0.75rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .left-wrapper {
        width: 50%;
        margin-right: 10px;
        transform: translateY(20px);

        &.hidden {
            display: none;
        }

        @media (max-width: 720px) {
            margin-right: 0;
            width: 100%;
        }
    }

    .right-wrapper {
        width: 50%;
        margin-left: 0.75rem;

        .content {
            height: 165px;
        }

        .logo {
            width: 80%;
            font-family: "Pacifico-Regular";
            font-size: 1.75rem;
            position: fixed;
            top: 6%;
            left: 50%;
            transform: translateX(-50%);
            transition: all 0.3s;
            animation: fade;
            -webkit-animation: fade 0.5s;

            &:active {
                transform: scale(0.95);
            }

            @media (min-width: 720px) {
                display: none;
            }
        }

        @media (max-width: 720px) {
            margin-left: 0;
            width: 100%;

            &.hidden {
                display: none;
            }
        }
    }

    &.mobile {
        .el-row {
            .el-col {
                &:nth-of-type(1) {
                    display: contents;
                }

                &:nth-of-type(2) {
                    display: none;
                }
            }
        }
    }

    .el-row {
        height: 100%;
        width: 100%;
        margin: 0 !important;

        .el-col {
            &:nth-of-type(1) {
                padding-left: 0 !important;
            }

            &:nth-of-type(2) {
                padding-right: 0 !important;
            }

            @media (max-width: 910px) {
                &:nth-of-type(1) {
                    display: none;
                }

                &:nth-of-type(2) {
                    padding: 0 !important;
                    flex: none;
                    max-width: none;
                    width: 100%;
                }
            }
        }
    }
}
</style>