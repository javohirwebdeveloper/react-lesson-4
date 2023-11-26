import React, { useState } from 'react';
import Todos from './components/Todos';
import Posts from './components/Posts';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    {
      name: 'John Doe',
      email: 'john@example.com',
      website: 'https://www.example.com',
      address: '123 Main St, Cityville',
      phone: '123-456-7890',
      todos: ['Complete task A ❌', 'Read a book ✅', 'Finish project X ❌', 'Go to the gym✅', 'Learn React ✅'],
      posts: ['Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.'],
      gallery: ['https://i.redd.it/b1so8plcfto61.jpg', 'https://wallpapers.com/images/hd/broke-boys-black-bmw-m3-v9iur7ydot8p45ym.jpg'],
    },

  ]);

  const [activeTab, setActiveTab] = useState('todos');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      {users.map((user, index) => (
        <div key={index} className="user-card">
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
          <p>Address: {user.address}</p>
          <p>Phone: {user.phone}</p>
          <div className="tabs">
            <div className="button-container">
              <button
                onClick={() => handleTabChange('todos')}
                className={activeTab === 'todos' ? 'active' : ''}
              >
                Todos
              </button>
              <button
                onClick={() => handleTabChange('posts')}
                className={activeTab === 'posts' ? 'active' : ''}
              >
                Posts
              </button>
              <button
                onClick={() => handleTabChange('gallery')}
                className={activeTab === 'gallery' ? 'active' : ''}
              >
                Gallery
              </button>
            </div>
          </div>
          <div className="content">
            {activeTab === 'todos' && <Todos todos={user.todos} />}
            {activeTab === 'posts' && <Posts posts={user.posts} />}
            {activeTab === 'gallery' && <Gallery gallery={user.gallery} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
