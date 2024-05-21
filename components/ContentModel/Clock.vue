<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { getCurrentTime } from "@/utils/site";

const { data: result, pending, error, status, refresh } = await useFetch('/api/weather', {
    default: () => ({
        weather: '',
        temperature: '',
        winddirection: '',
        windpower: '',
        city: '',
        adcode: ''
    })
})

let timer: any = undefined
const currentTime: any = ref({})

onMounted(() => {
    timer = setInterval(() => {
        currentTime.value = getCurrentTime();
    }, 1000);
})

onBeforeUnmount(() => {
    clearInterval(timer);
    timer = undefined
});
</script>

<template>
    <div class="clock-box-wrapper cards">
        <div class="clock-wrapper">
            <div class="date">
                <span>{{ currentTime.year }}&nbsp;年&nbsp;</span>
                <span>{{ currentTime.month }}&nbsp;月&nbsp;</span>
                <span>{{ currentTime.day }}&nbsp;日&nbsp;</span>
                <span class="sm-hidden">{{ currentTime.weekday }}</span>
            </div>
            <div class="text">
                <span>
                    {{ currentTime.hour }}:{{ currentTime.minute }}:{{ currentTime.second }}
                </span>
            </div>
        </div>
        <div class="weather-wrapper">
            <div class="weather" v-if="result && result.city">
                <span>{{ result.city }}&nbsp;</span>
                <span>{{ result.weather }}&nbsp;</span>
                <span>{{ result.temperature }}℃</span>
                <span class="sm-hidden">&nbsp;{{ result.winddirection }}风&nbsp;</span>
                <span class="sm-hidden">{{ result.windpower }}&nbsp;级</span>
            </div>
            <div class="weather" v-else>
                <span>天气数据获取失败</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.clock-box-wrapper {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    animation: fade;
    -webkit-animation: fade 0.5s;

    .clock-wrapper {
        font-size: 1.1rem;
        text-align: center;

        .date {
            text-overflow: ellipsis;
            overflow-x: hidden;
            white-space: nowrap;
        }

        .text {
            margin-top: 10px;
            font-size: 3.25rem;
            letter-spacing: 2px;
            font-family: "UnidreamLED";
        }
    }

    .weather {
        text-align: center;
        width: 100%;
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
    }
}
</style>