# Age Calculator App

![Age Calculator](./src/assets/hourglass.png)

## Overview

A modern, responsive web application that precisely calculates a person's age in years, months, and days based on their birth date. Built with React and enhanced with smooth animations, this Age Calculator provides an intuitive user experience across all devices.

## Features

- **Precise Age Calculation**: Accurately computes age in years, months, days, and total days
- **Real-time Validation**: Validates input dates with helpful error messages
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Animated UI**: Smooth transitions and animations using Framer Motion
- **Accessibility**: Designed with accessibility in mind for all users
- **Modern Interface**: Clean, intuitive UI with Tailwind CSS styling

## Demo

[View Live Demo](#) <!-- Add your deployment link when available -->

## Technologies Used

- **React**: Frontend library for building the user interface
- **Vite**: Next-generation frontend tooling for faster development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for React
- **JavaScript ES6+**: Modern JavaScript features
- **ESLint**: Code quality and consistency

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/age-calculator.git

# Navigate to the project directory
cd age-calculator

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

1. Enter your birth date (day, month, and year)
2. Click the "Calculate" button
3. View your exact age in years, months, and days

## Project Structure

```
age-calculator/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AgeCalculator.jsx
│   │   ├── DateInput.jsx
│   │   ├── Footer.jsx
│   │   └── ResultDisplay.jsx
│   ├── utils/
│   │   └── dateUtils.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## Key Components

- **AgeCalculator**: Main component that handles the age calculation logic
- **DateInput**: Reusable component for date input fields with validation
- **ResultDisplay**: Displays the calculated age with animations
- **dateUtils**: Utility functions for date calculations and validations

## Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Keywords

age calculator, react app, date calculator, birth date calculator, age computation, react hooks, framer motion, tailwind css, vite, responsive web app
