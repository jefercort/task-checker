# 📝 Task Checker

A modern web application for task management built with React and Vite, designed to help you keep your daily activities organized in a simple and efficient way.

## 🎯 Description

Task Checker is a to-do list application developed as a React.js learning project. It allows users to create, manage, and complete tasks intuitively with a clean and responsive interface.

This project was created as part of my JavaScript and React learning journey, implementing fundamental concepts such as:
- React Components
- Hooks (useState, useEffect)
- Props and state
- Event handling
- Conditional rendering

## ✨ Features

- ✅ Create new tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Filter tasks (all, active, completed)
- ✅ Pending tasks counter
- ✅ Responsive interface
- ✅ Hot Module Replacement (HMR) with Vite

## 🚀 Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast and modern build tool
- **JavaScript ES6+** - Programming language
- **CSS3** - Styling and responsive design
- **ESLint** - Linter to maintain code quality

## 📋 Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 14.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jefercort/task-checker.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd task-checker
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   The application will be available at `http://localhost:5173`

## 📖 Usage

### Add a task
1. Type your task name in the input field
2. Press Enter or click the "Add" button

### Complete a task
- Click the checkbox next to the task to mark it as completed

### Delete a task
- Click the delete button (X) to remove the task from the list

### Filter tasks
- Use the filter buttons to view:
  - All tasks
  - Active tasks only
  - Completed tasks only

## 📁 Project Structure

```
task-checker/
├── public/              # Static public files
├── src/                 # Source code
│   ├── components/      # React components
│   ├── styles/          # CSS files
│   ├── App.jsx          # Main component
│   └── main.jsx         # Entry point
├── .gitignore          # Files ignored by Git
├── index.html          # Main HTML
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev           # Start development server

# Build
npm run build         # Build the app for production

# Preview
npm run preview       # Preview production build

# Linting
npm run lint          # Run ESLint to check code
```

## 🎓 Key Learnings

During the development of this project, I learned:

- **React Fundamentals**: Components, JSX, props, and state
- **React Hooks**: useState for managing local state
- **Event Handling**: onClick, onChange, onSubmit
- **List Rendering**: Using map() and unique keys
- **Conditional Rendering**: Show/hide elements based on state
- **Vite as a Build Tool**: Configuration and optimization
- **Best Practices**: Project structure, naming conventions

## 🚧 Future Improvements

- [ ] Data persistence with LocalStorage
- [ ] Drag and drop to reorder tasks
- [ ] Categories or tags for tasks
- [ ] Due dates
- [ ] Dark mode
- [ ] Transition animations
- [ ] Testing with Jest and React Testing Library
- [ ] Backend integration (REST API)

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jefferson Cortés**
- GitHub: [@jefercort](https://github.com/jefercort)

## 🙏 Acknowledgments

- Introduction to React.js Course
- React community for learning resources
- Vite for the excellent development tool

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
