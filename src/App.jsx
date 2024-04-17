import React from 'react';
import Quiz from './component/Quiz'; 
import questionsData from './component/qestion.json'; 

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Quiz Application</h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <Quiz questions={questionsData} />
      </main>
      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <p className="text-center">&copy; 2024 Quiz App</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
