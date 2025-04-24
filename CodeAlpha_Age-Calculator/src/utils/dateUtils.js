/**
 * Calculates age based on birth date
 * @param {number} year - Birth year
 * @param {number} month - Birth month (1-12)
 * @param {number} day - Birth day (1-31)
 * @returns {Object} Object containing years, months, days and total days
 */
export const calculateAge = (year, month, day) => {
  const birthDate = new Date(year, month - 1, day)
  const currentDate = new Date()
  
  // Set both dates to noon to avoid time zone issues
  birthDate.setHours(12, 0, 0, 0)
  currentDate.setHours(12, 0, 0, 0)
  
  let years = currentDate.getFullYear() - birthDate.getFullYear()
  let months = currentDate.getMonth() - birthDate.getMonth()
  let days = currentDate.getDate() - birthDate.getDate()
  
  // Adjust if current day is less than birth day
  if (days < 0) {
    const lastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    )
    
    // Get the number of days in the last month
    const daysInLastMonth = new Date(
      lastMonth.getFullYear(),
      lastMonth.getMonth() + 1,
      0
    ).getDate()
    
    days += daysInLastMonth
    months--
  }
  
  // Adjust if current month is less than birth month
  if (months < 0) {
    months += 12
    years--
  }
  
  // Calculate total days - approximate calculation
  const totalDays = Math.floor(
    (currentDate - birthDate) / (1000 * 60 * 60 * 24)
  )
  
  return { years, months, days, totalDays }
}

/**
 * Checks if a date is valid
 * @param {number} year - Year
 * @param {number} month - Month (1-12)
 * @param {number} day - Day (1-31)
 * @returns {boolean} Whether the date is valid
 */
export const isValidDate = (year, month, day) => {
  const date = new Date(year, month - 1, day)
  
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )
}

/**
 * Gets the maximum number of days in a month
 * @param {number} month - Month (1-12)
 * @param {number} year - Year
 * @returns {number} Maximum days in the month
 */
export const getMaxDaysInMonth = (month, year) => {
  // The day parameter is 0, which gives the last day of the previous month
  // So using month directly (instead of month - 1) gives us the last day of the specified month
  return new Date(year, month, 0).getDate()
}

/**
 * Formats a date object to a string
 * @param {Date} date - Date object
 * @returns {string} Formatted date string (DD/MM/YYYY)
 */
export const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  
  return `${day}/${month}/${year}`
}