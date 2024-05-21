import { ElMessage } from 'element-plus'

// 时钟
export const getCurrentTime = () => {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1;
    let day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
    let hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    let minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    let second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    let currentTime = {
        year,
        month,
        day,
        hour,
        minute,
        second,
        weekday: weekday[time.getDay()],
    }
    return currentTime;
}

// 时光胶囊
export const getTimeCapsule = () => {
    // 日进度
    let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
    let todayPassHours:any = (new Date().getTime() - todayStartDate) / 1000 / 60 / 60;
    let todayPassHoursPercent:any = (todayPassHours / 24) * 100;
    // 周进度
    let weeks = [7, 1, 2, 3, 4, 5, 6];
    let weekDay = weeks[new Date().getDay()];
    let weekDayPassPercent:any = (weekDay / 7) * 100;
    // 月进度
    let year = new Date().getFullYear();
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let monthAll = new Date(year, month, 0).getDate();
    let monthPassPercent:any = (date / monthAll) * 100;
    // 年进度
    let yearPass:any = (month / 12) * 100;
    return {
        day: {
            start: parseInt(todayPassHours),
            pass: parseInt(todayPassHoursPercent),
        },
        week: {
            start: weekDay,
            pass: parseInt(weekDayPassPercent),
        },
        month: {
            start: date,
            pass: parseInt(monthPassPercent),
        },
        year: {
            start: month == 0 ? month : month - 1,
            pass: parseInt(yearPass),
        }
    }
}

// 欢迎提示
export const helloInit = () => {
    let hour = new Date().getHours();
    let hello = null;
    if (hour < 6) {
        hello = "凌晨好";
    } else if (hour < 9) {
        hello = "早上好";
    } else if (hour < 12) {
        hello = "上午好";
    } else if (hour < 14) {
        hello = "中午好";
    } else if (hour < 17) {
        hello = "下午好";
    } else if (hour < 19) {
        hello = "傍晚好";
    } else if (hour < 22) {
        hello = "晚上好";
    } else {
        hello = "夜深了";
    }
    ElMessage({
        dangerouslyUseHTMLString: true,
        message: `<strong>${hello}</strong> 欢迎来到我的主页`,
    });
}

// 建站日期统计
export const siteDateStatistics = (startDate:any) => {
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    const differenceInMonths = differenceInDays / 30;
    const differenceInYears = differenceInMonths / 12;
    if (differenceInYears >= 1) {
        return `本站已经苟活了 ${Math.floor(differenceInYears)} 年 ${Math.floor(differenceInMonths % 12)} 月 ${Math.round(differenceInDays % 30)} 天`;
    } else if (differenceInMonths >= 1) {
        return `本站已经苟活了 ${Math.floor(differenceInMonths)} 月 ${Math.round(differenceInDays % 30)} 天`;
    } else {
        return `本站已经苟活了 ${Math.round(differenceInDays)} 天`;
    }
}