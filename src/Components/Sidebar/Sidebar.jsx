import React from 'react';
import './Sidebar.css';

function Sidebar() {
  // Logout logic would go here
  const handleLogout = () => {
    // Implement logout functionality
  };

  return (
    <div className="sidebar">
      <div className="logo">Logo & Title</div>
      <div className="user-profile">User Profile</div>
      <div className="user-profile">Menu 2</div>
      <button onClick={handleLogout}>Logout</button>
      {/* Add other sidebar items */}
    </div>
  );
}

export default Sidebar;
