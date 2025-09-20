import { useState } from "react";
import HeaderBar from '../component/Layout/HeaderBar';
import Sidebar from '../component/Layout/Sidebar';
import DashboardPage from './DashboardPage';
import OrdersPage from './OrdersPage';
import './../App.css';

export default function MainLayoutPage() {
    const [activePage, setActivePage] = useState<"orders" | "dashboard">("orders");

  return (
    <div className="orders-page">
      {/* Sidebar */}
      <Sidebar onNavigate={(page) => setActivePage(page)} activePage={activePage} />

      {/* Main Section */}
      <div className="main-section">
        {/* Header */}
        <HeaderBar />


        {/* Dynamic Content */}
        {activePage === "orders" ? <OrdersPage /> : <DashboardPage />}
      </div>
    </div>
  );
}
