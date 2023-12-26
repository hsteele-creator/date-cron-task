import { daysOfWeek, hours } from "./Data"

export const cronDayOfMonth = (day) => {
    if(day === "every day of the month") {
      return "*"
    } else {
      return Number(day)
    }
  }

  export const crondayOfWeek = (day) => {
    if(day === "every day of the week") {
      return "*"
    } else {
      const index = daysOfWeek.indexOf(day) - 1
      return index
    }
  }

  export const cronHour = (hour) => {
    if(hour === "every hour") {
      return "0"
    } else {
      return hours.indexOf(hour)
    }
  }