import React from 'react';

function HomePage() {
  return (
    <div>
      <header>
        <h1>Program/Project Management App</h1>
      </header>
      <main>
        <section>
          <h2>Welcome to the App</h2>
          <p>This app helps you manage your programs and projects effectively.</p>
        </section>
        <section>
          <h2>Recent Projects</h2>
          <ul>
            <li>
              <h3>Project A</h3>
              <p>Project description goes here...</p>
            </li>
            <li>
              <h3>Project B</h3>
              <p>Project description goes here...</p>
            </li>
            {/* Add more project items */}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Your App Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
