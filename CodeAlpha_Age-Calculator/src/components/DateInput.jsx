import { motion } from 'framer-motion'

const DateInput = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  error, 
  maxLength, 
  min, 
  max 
}) => {
  const inputVariants = {
    focus: { scale: 1.02 },
    blur: { scale: 1 }
  }

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-neutral-600 mb-1">
        {label}
      </label>
      
      <motion.div
        initial="blur"
        whileFocus="focus"
        animate="blur"
        variants={inputVariants}
      >
        <input
          type="number"
          className={`input-base ${error ? 'input-error' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          min={min}
          max={max}
        />
      </motion.div>
      
      {error && (
        <motion.p 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="text-xs text-error-600 mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

export default DateInput