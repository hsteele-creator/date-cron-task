export const cronDayOfMonth = (day) => {
    if(day === "every day of the month") {
      return "*"
    } else {
      return Number(day)
    }
  }