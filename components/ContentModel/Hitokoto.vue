<script setup lang="ts">
import { MusicMenu } from "@icon-park/vue-next";
import { debounce } from "@/utils"

// 当前音乐面板状态
const musicStore = useMusicStore()
// 是否显示音乐模板按钮
const musicBoardShow = ref(false)

const { data: hitokoto, pending, error, status, refresh } = await useFetch('/api/hitokoto', {
    default: () => ({
        text: '新的一言正在赶来的路上',
        from: '阿哦'
    })
})

const updateHitokoto = () => {
    debounce(refresh, 500);
}
</script>

<template>
    <div class="hitokoto cards" v-show="!musicStore.openState" @mouseenter="musicBoardShow = true"
        @mouseleave="musicBoardShow = false" @click.stop>
        <!-- 打开音乐面板 -->
        <Transition name="fade">
            <div class="open-music" v-show="musicBoardShow && musicStore.state" @click="musicStore.openState = true">
                <music-menu theme="filled" size="18" fill="#efefef" />
                <span>打开音乐播放器</span>
            </div>
        </Transition>
        <!-- 一言内容 -->
        <div class="content" @click="updateHitokoto">
            <span class="text">{{ hitokoto.text || '新的一言正在赶来的路上' }}</span>
            <span class="from">-「&nbsp;{{ hitokoto.from || '阿哦' }}&nbsp;」</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hitokoto {
    width: 100%;
    height: 100%;
    padding: 20px;
    animation: fade;
    -webkit-animation: fade 0.5s;

    .open-music {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #00000026;
        padding: 4px 0;
        border-radius: 8px 8px 0 0;

        .i-icon {
            width: 18px;
            height: 18px;
            display: block;
            margin-right: 8px;
        }

        span {
            font-size: 0.95rem;
        }
    }

    .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .text {
            font-size: 1.1rem;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        .from {
            margin-top: 10px;
            font-weight: bold;
            align-self: flex-end;
            font-size: 1.1rem;
        }
    }
}
</style>