interface Hitokoto {
    id: number,
    uuid: string,
    hitokoto: string,
    from: string,
    from_who: string,
    creator: string,
    creator_uid: number,
    commit_from: string,
    created_at: string
}

export default defineEventHandler(async (event) => {
    try {
        const result: Hitokoto = await $fetch('https://v1.hitokoto.cn')
        return {
            text: result.hitokoto,
            from: result.from
        }
    } catch (error: any) {
        console.log('Hitokoto Error： ', error.message);
        return {
            text: '',
            from: ''
        }
    }
})

