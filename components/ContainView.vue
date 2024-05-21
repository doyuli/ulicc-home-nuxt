<template>
    <div :class="loading ? 'loading' : ''">
        <div id="loading-box" :class="loading ? '' : 'loaded'">
            <div class="loading-left-bg"></div>
            <div class="loading-right-bg"></div>
            <div class="spinner-box">
                <div class="loader">
                    <div class="inner one"></div>
                    <div class="inner two"></div>
                    <div class="inner three"></div>
                </div>
                <div class="loading-word">
                    <span id="loading-text">加载中</span>
                </div>
            </div>
        </div>

        <slot />
    </div>
</template>

<script setup lang="ts">
import '~/assets/css/loading.min.css'

defineProps({
    loading: {
        type: Boolean,
        default: false
    }
})
</script>