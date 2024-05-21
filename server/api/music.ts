interface Music {
    author: string,
    lrc: string,
    pic: string,
    title: string,
    url: string
}

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig()
    const { musicApi } = runtimeConfig
    const { musicConfig: { serveType, songType, songId } } = useAppConfig()
    try {
        const result: Music[] = await $fetch(`${musicApi}?server=${serveType}&type=${songType}&id=${songId}`)
        return {
            list: result
        }
    } catch (error: any) {
        console.log('Hitokoto Error： ', error.message);
        return {
            list: []
        }
    }
})

