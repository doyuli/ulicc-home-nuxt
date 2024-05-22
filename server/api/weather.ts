

export default defineEventHandler(async (event) => {
  // 获取环境变量
  const { weatherKey } = useRuntimeConfig()

  let result = {
    weather: '', // 天气现象
    temperature: '', // 实时气温
    winddirection: '', // 风向描述
    windpower: '', // 风力级别
    city: '', // 城市名称
    adcode: '' // 城市编码
  }

  try {
    const { status, info, city, adcode }: any = await $fetch(`https://restapi.amap.com/v3/ip?key=${weatherKey}`)

    if (status) {
      result.city = city
      result.adcode = adcode
    }

    const { status: status_, info: info_, lives, forecast }: any = await $fetch(`https://restapi.amap.com/v3/weather/weatherInfo?key=${weatherKey}&city=${adcode}`)

    if (status_ && lives && lives.length) {
      result.weather = lives[0].weather
      result.temperature = lives[0].temperature
      result.winddirection = lives[0].winddirection
      result.windpower = lives[0].windpower
    }
    
    return result
  } catch (error: any) {
    console.log('Weather Error： ', error.message);
    return result
  }
})

