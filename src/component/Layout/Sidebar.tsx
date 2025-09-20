import {
  Home as HomeIcon,
  BarChart as BarChartIcon,
  FolderOpen as FolderOpenIcon,
  MenuBook as BookOpenIcon,
  Person as UserIcon,
  Description as FileTextIcon,
  Group as UsersIcon,
  Work as BriefcaseIcon,
  ChatBubbleOutline as MessageCircleIcon,
} from "@mui/icons-material";
import "../../App.css";

export default function Sidebar({
  onNavigate,
  activePage,
}: {
  onNavigate: (page: "orders" | "dashboard") => void;
  activePage: "orders" | "dashboard";
}) {
  return (
    <aside className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <img src="/public/1.jpg" alt="Profile" className="logo" />
        <span className="brand-name">ByeWind</span>
      </div>

      {/* Tabs */}
      <div className="sidebar-tabs">
        <button className="active">Favorites</button>
        <button>Recently</button>
      </div>

      {/* Favorites */}
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <span className="dot" />
          Overview
        </li>
        <li className="sidebar-item">
          <span className="dot" />
          Projects
        </li>
      </ul>

      {/* Dashboards */}
      <div className="sidebar-section">
        <p className="section-title">Dashboards</p>
        <ul className="sidebar-list">
          <li
            className={`sidebar-item ${activePage === "orders" ? "active" : ""}`}
            onClick={() => onNavigate("orders")}
          >
            <HomeIcon fontSize="small" /> Default
          </li>
          <li
            className={`sidebar-item ${
              activePage === "dashboard" ? "active" : ""
            }`}
            onClick={() => onNavigate("dashboard")}
          >
            <BarChartIcon fontSize="small" /> eCommerce
          </li>
          <li className="sidebar-item">
            <FolderOpenIcon fontSize="small" /> Projects
          </li>
          <li className="sidebar-item">
            <BookOpenIcon fontSize="small" /> Online Courses
          </li>
        </ul>
      </div>

      {/* Pages */}
      <div className="sidebar-section">
        <p className="section-title">Pages</p>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <UserIcon fontSize="small" /> User Profile
          </li>
          <li className="submenu">
            <ul>
              <li>Overview</li>
              <li>Projects</li>
              <li>Campaigns</li>
              <li>Documents</li>
              <li>Followers</li>
            </ul>
          </li>
          <li className="sidebar-item">
            <FileTextIcon fontSize="small" /> Account
          </li>
          <li className="sidebar-item">
            <UsersIcon fontSize="small" /> Corporate
          </li>
          <li className="sidebar-item">
            <BriefcaseIcon fontSize="small" /> Blog
          </li>
          <li className="sidebar-item">
            <MessageCircleIcon fontSize="small" /> Social
          </li>
        </ul>
      </div>
    </aside>
  );
}
