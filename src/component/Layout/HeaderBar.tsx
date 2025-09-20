import { useState, useEffect } from 'react';
import {
  GridView,
  StarOutline,
  NotificationsNone,
  WbSunny,
  AccessTime,
  NightsStay,
  Fullscreen,
} from '@mui/icons-material';
import '../../App.css';

export default function HeaderBar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Apply theme class to <body> whenever it changes
  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme === 'light' ? 'light-mode' : 'dark-mode');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved as 'light' | 'dark');
  }, []);

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme === 'light' ? 'light-mode' : 'dark-mode');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="header-bar">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        {/* Dashboard Icon */}
        <span className="icon">
          <GridView fontSize="small" />
        </span>

        {/* Star Icon */}
        <span className="icon">
          <StarOutline fontSize="small" />
        </span>

        {/* Breadcrumb Text */}
        <span className="text">Dashboards</span>
        <span className="divider">/</span>
        <span className="current">Default</span>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Search */}
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>

        {/* Icons */}
        <div className="icons">
          {/* Theme Toggle */}
          {theme === 'light' ? (
            <WbSunny fontSize="small" onClick={toggleTheme} />
          ) : (
            <NightsStay fontSize="small" onClick={toggleTheme} />
          )}
          <AccessTime fontSize="small" />
          <NotificationsNone fontSize="small" />
          <Fullscreen fontSize="small" />
        </div>
      </div>
    </header>
  );
}
