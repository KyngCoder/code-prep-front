import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import StartQuiz from "./components/StartQuiz";
import Questions from "./helper/Questions";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/quiz" exact element={<Quiz />} />
          <Route path="/start" exact element={<StartQuiz />} />
          <Route path="/questions" exact element={<Questions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
