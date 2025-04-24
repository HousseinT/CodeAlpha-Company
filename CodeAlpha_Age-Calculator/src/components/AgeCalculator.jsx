import { useState } from 'react'
import { motion } from 'framer-motion'
import DateInput from './DateInput'
import ResultDisplay from './ResultDisplay'
import { calculateAge, isValidDate, getMaxDaysInMonth } from '../utils/dateUtils'

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState({
    day: '',
    month: '',
    year: ''
  })
  
  const [errors, setErrors] = useState({
    day: '',
    month: '',
    year: '',
    general: ''
  })
  
  const [ageResult, setAgeResult] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)
  
  const validateInputs = () => {
    const newErrors = {
      day: '',
      month: '',
      year: '',
      general: ''
    }
    
    let isValid = true
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    
    // Convert inputs to numbers
    const day = Number(birthDate.day)
    const month = Number(birthDate.month)
    const year = Number(birthDate.year)
    
    // Check if inputs are empty
    if (!birthDate.day) {
      newErrors.day = 'Day is required'
      isValid = false
    }
    
    if (!birthDate.month) {
      newErrors.month = 'Month is required'
      isValid = false
    }
    
    if (!birthDate.year) {
      newErrors.year = 'Year is required'
      isValid = false
    }
    
    // Validate day
    if (birthDate.day && (day < 1 || day > 31)) {
      newErrors.day = 'Must be a valid day'
      isValid = false
    }
    
    // Validate month
    if (birthDate.month && (month < 1 || month > 12)) {
      newErrors.month = 'Must be a valid month'
      isValid = false
    }
    
    // Validate year
    if (birthDate.year && (year < 1900 || year > currentYear)) {
      newErrors.year = year > currentYear ? 'Must be between 1900~Today' : 'Must be after 1900'
      isValid = false
    }
    
    // Validate if the date is valid (e.g., checking for Feb 30)
    if (isValid && birthDate.day && birthDate.month && birthDate.year) {
      const maxDays = getMaxDaysInMonth(month, year)
      
      if (day > maxDays) {
        newErrors.day = `Invalid day for ${month}/${year}`
        isValid = false
      }
      
      // Check if date is in the future
      const inputDate = new Date(year, month - 1, day)
      if (inputDate > currentDate) {
        newErrors.general = 'Date must be in the past'
        isValid = false
      }
    }
    
    setErrors(newErrors)
    return isValid
  }
  
  const handleInputChange = (field, value) => {
    // Allow only numbers and limit to appropriate length
    const numericValue = value.replace(/\D/g, '')
    
    let maxLength = 2
    if (field === 'year') maxLength = 4
    
    const trimmedValue = numericValue.slice(0, maxLength)
    
    setBirthDate(prev => ({
      ...prev,
      [field]: trimmedValue
    }))
    
    // Clear error for this field when user types
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }
  
  const calculateAgeHandler = () => {
    if (validateInputs()) {
      setIsCalculating(true)
      
      // Simulate calculation delay for UX enhancement
      setTimeout(() => {
        const day = Number(birthDate.day)
        const month = Number(birthDate.month)
        const year = Number(birthDate.year)
        
        const result = calculateAge(year, month, day)
        setAgeResult(result)
        setIsCalculating(false)
      }, 500)
    }
  }
  
  const resetForm = () => {
    setBirthDate({
      day: '',
      month: '',
      year: ''
    })
    setErrors({
      day: '',
      month: '',
      year: '',
      general: ''
    })
    setAgeResult(null)
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl bg-white rounded-2xl shadow-card p-6 md:p-8"
    >
      <h1 className="text-3xl font-bold text-neutral-800 mb-6">Age Calculator</h1>
      
      {errors.general && (
        <div className="mb-4 p-3 bg-error-50 text-error-600 rounded-lg">
          {errors.general}
        </div>
      )}
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <DateInput 
          label="Day"
          placeholder="DD"
          value={birthDate.day}
          onChange={(e) => handleInputChange('day', e.target.value)}
          error={errors.day}
          maxLength={2}
          min={1}
          max={31}
        />
        
        <DateInput 
          label="Month"
          placeholder="MM"
          value={birthDate.month}
          onChange={(e) => handleInputChange('month', e.target.value)}
          error={errors.month}
          maxLength={2}
          min={1}
          max={12}
        />
        
        <DateInput 
          label="Year"
          placeholder="YYYY"
          value={birthDate.year}
          onChange={(e) => handleInputChange('year', e.target.value)}
          error={errors.year}
          maxLength={4}
          min={1900}
          max={new Date().getFullYear()}
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={calculateAgeHandler}
          disabled={isCalculating}
          className="btn btn-primary flex-1"
        >
          {isCalculating ? 'Calculating...' : 'Calculate Age'}
        </button>
        
        <button 
          onClick={resetForm}
          className="btn bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
        >
          Reset
        </button>
      </div>
      
      {ageResult && (
        <ResultDisplay result={ageResult} />
      )}
    </motion.div>
  )
}

export default AgeCalculator