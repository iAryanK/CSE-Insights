export const getTimestamp = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const elapsedTimeInMilliseconds = now.getTime() - created.getTime();

    // Define time intervals in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    if (elapsedTimeInMilliseconds < minute) {
        const seconds = Math.floor(elapsedTimeInMilliseconds / 1000);
        return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    } else if (elapsedTimeInMilliseconds < hour) {
        const minutes = Math.floor(elapsedTimeInMilliseconds / minute);
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (elapsedTimeInMilliseconds < day) {
        const hours = Math.floor(elapsedTimeInMilliseconds / hour);
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (elapsedTimeInMilliseconds < week) {
        const days = Math.floor(elapsedTimeInMilliseconds / day);
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (elapsedTimeInMilliseconds < month) {
        const weeks = Math.floor(elapsedTimeInMilliseconds / week);
        return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    } else if (elapsedTimeInMilliseconds < year) {
        const months = Math.floor(elapsedTimeInMilliseconds / month);
        return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else {
        const years = Math.floor(elapsedTimeInMilliseconds / year);
        return `${years} ${years === 1 ? "year" : "years"} ago`;
    }
};