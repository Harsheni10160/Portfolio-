// src/App.jsx
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; // keep only the global styles

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">
                © 2024 Deva Harsheni. Built with React & Tailwind CSS.
              </p>
            </div>
            <div className="text-gray-300 text-sm">
              Made with ❤️ and lots of ☕
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
