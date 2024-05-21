// 建站日期开启状态
export const useSiteStartToggle = () => {
    return useState('siteStartToggle', () => true)
}

// 时光胶囊盒子开启状态
export const useTimeCapsuleToggle = () => {
    return useState('timeCapsuleToggle', () => false)
}

// 壁纸展示模式开启状态
export const useDownloadModel = () => {
    return useState('downloadModel', () => false)
}

// 当前窗口宽度
export const useInnerWidth = () => {
    return useState('innerWidth', () => 0)
}

// 壁纸类型
export const useCoverType = () => {
    return useState<0 | 1 | 2 | 3>('coverType', () => 0)
}

// 是否移动端
export const useIsMobile = () => {
    return useState('isMobile', () => false)
}

// 移动端功能区展示状态
export const useMobileToggle = () => {
    return useState('mobileToggle', () => false)
}

// 当前音乐面板状态
export const useMusicStore = () => {
    return useState('musicStore', () => ({
        state: false, // 音乐是否加载完成
        volume: 0, // 音乐音量
        openState: false // 音乐面板开启状态
    }))
}

// 当前播放歌曲状态
export const usePlayerStore = () => {
    return useState('playerStore', () => ({
        state: false, // 当前播放状态
        title: '',
        artist: '',
        lyc: ''
    }))
}

// 更改当前页面宽度
export const setInnerWidth = (val: number) => {
    const innerWidth = useInnerWidth()
    const isMobile = useIsMobile()
    const mobileToggle = useMobileToggle()
    innerWidth.value = val;
    if (innerWidth.value >= 720) {
        isMobile.value = false
        mobileToggle.value = false
    } else {
        isMobile.value = true
    }
};

// 更改当前播放歌曲状态
export const setPlayerStore = (val: number) => {
    const playerStore = usePlayerStore()
    if (val) {
        playerStore.value.state = false;
    } else {
        playerStore.value.state = true;
    }
};

// 更改当前播放歌曲歌词
export const setPlayerLrc = (val: string) => {
    const playerStore = usePlayerStore()
    playerStore.value.lyc = val;
};

// 更改当前播放歌曲数据
export const setPlayerData = (title: string, artist: string) => {
    const playerStore = usePlayerStore()
    playerStore.value.title = title;
    playerStore.value.artist = artist;
};
