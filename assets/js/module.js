'use strict';
export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday", // Corrected the typo
    "Friday",
    "Saturday"
];
export const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
/**
 * @param {number} dateUnix unix date in seconds
 * @param {number} timezone
 * @returns {string} Date String, format: "Sunday 10, Jan"*/
export const getDate = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()]; // Corrected variable name
    const month = monthName[date.getUTCMonth()]; // Corrected variable name
    return `${weekDayName} ${date.getUTCDate()}, ${month}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone timezone shift from UTC in seconds
 * @returns {string} Time String. Format: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone timezone shift from UTC in seconds
 * @returns {string} Time String. Format: "HH AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";
    return `${hours % 12 || 12} ${period}`;
}

/**
 * @param {number} mps meter per second
 * @returns {number}
 */
export const mps_to_kmh = mps => {
    const kmh = mps * 3.6; // Corrected the conversion factor
    return kmh;
}

export const aqiText = {
    1: {
        level: "Good",
        message: "Air Quality is considered satisfactory, and air pollution poses little or no risk"
    },
    2: {
        level: "Fair",
        message: "Air Quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollutions."
    },
    3: {
        level: "Moderate",
        message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected."
    },
    4: {
        level: "Poor",
        message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects."
    },
    5: {
        level: "Very Poor",
        message: "Health warning of emergency conditions. The entire population is more likely to be affected."
    }
}
