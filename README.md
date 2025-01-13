# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Here's a comprehensive `README.md` file for your Gemini clone project: 

---

# Gemini Clone

A **Gemini Clone** built using **React**, featuring a sleek and responsive UI for AI-driven chat interactions. This project leverages React's Context API for state management and includes functionalities such as managing chat history, creating new chats, and rendering AI responses dynamically.

---

## Features

- **Responsive Sidebar**:
  - Collapsible sidebar for easy navigation.
  - Options for creating a new chat, accessing recent prompts, and more.

- **AI-Driven Chat**:
  - Sends user prompts and dynamically renders AI responses with styled formatting.

- **State Management**:
  - Utilizes React's Context API for global state management.
  - Stores and displays a list of previous prompts.

- **Dynamic UI**:
  - Implements smooth updates for displaying chat history and responses.

---

## Technologies Used

- **Frontend**: 
  - React
  - React Icons
  - React Context API
- **Styling**:
  - CSS Modules for component-specific styles.
- **Backend Integration**:
  - Placeholder for AI API integration using a `run()` function.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/gemini-clone.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd gemini-clone
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
5. **Open in browser**:
   - Navigate to `http://localhost:3000` to view the application.

---

## File Structure

```
gemini-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── SideBar.js
│   │   └── Chat.js
│   ├── context/
│   │   └── Context.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── SideBar.css
├── .gitignore
├── package.json
├── README.md
```

---

## Usage

### Sidebar Functionalities
1. **Menu Button**: Toggles the sidebar between collapsed and extended states.
2. **New Chat**: Initiates a new chat and clears the input field.
3. **Recent Prompts**: Displays a list of previous prompts for quick navigation.

### AI Integration
- The `run(prompt)` function handles backend API calls for AI responses.
- Responses are dynamically formatted for better readability.

---

## Context API Structure

- **Global State**:
  - `input`: Stores the current user input.
  - `prevPrompts`: Array of previous prompts.
  - `recentPrompt`: Last sent prompt.
  - `resultData`: Stores the formatted AI response.

- **Functions**:
  - `onSent(prompt)`: Sends user input to the backend and processes the response.
  - `newChat()`: Clears the current chat state.

---

## Contributing

1. Fork the project.
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add YourFeature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or feedback, feel free to open an issue or contact [your-email@example.com](mailto:your-email@example.com).

--- 

### Screenshot (Optional)

Add screenshots of the application for better visibility.
