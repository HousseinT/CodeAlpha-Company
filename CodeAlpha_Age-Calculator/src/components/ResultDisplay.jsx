import { motion } from 'framer-motion'

const ResultDisplay = ({ result }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  }
  
  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 15, 
        delay: 0.1 
      } 
    }
  }
  
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-8 pt-6 border-t border-neutral-200"
    >
      <h2 className="text-2xl font-bold text-neutral-800 mb-4">Your age is</h2>
      
      <div className="space-y-2">
        <motion.div variants={itemVariants} className="flex items-center">
          <motion.span 
            variants={highlightVariants}
            className="text-4xl font-bold text-primary-600 mr-2"
          >
            {result.years}
          </motion.span>
          <span className="text-xl text-neutral-700">
            years
          </span>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex items-center">
          <motion.span 
            variants={highlightVariants}
            className="text-4xl font-bold text-secondary-600 mr-2"
          >
            {result.months}
          </motion.span>
          <span className="text-xl text-neutral-700">
            months
          </span>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex items-center">
          <motion.span 
            variants={highlightVariants}
            className="text-4xl font-bold text-secondary-500 mr-2"
          >
            {result.days}
          </motion.span>
          <span className="text-xl text-neutral-700">
            days
          </span>
        </motion.div>
      </div>
      
      {result.totalDays !== undefined && (
        <motion.p 
          variants={itemVariants}
          className="mt-4 text-sm text-neutral-500"
        >
          That's approximately {result.totalDays.toLocaleString()} days in total!
        </motion.p>
      )}
    </motion.div>
  )
}

export default ResultDisplay