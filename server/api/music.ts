interface Music {
    author: string,
    lrc: string,
    pic: string,
    title: string,
    url: string
}

export default defineEventHandler(async (event) => {
    // 获取查询参数
    const query = getQuery(event)
    // 获取环境变量
    const { musicApi } = useRuntimeConfig()
    try {
        const result: Music[] = await $fetch(musicApi, { query: query })
        return {
            list: result
        }
    } catch (error: any) {
        console.log('Music Error： ', error.message);
        return {
            list: []
        }
    }
})

