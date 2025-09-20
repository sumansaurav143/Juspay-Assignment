import KPIcard from '../component/Dashboard/KPIcard';
import RevenueChart from '../component/Dashboard/RevenueChart';
import ContentShell from '../component/Layout/ContentShell';
import '../App.css'; // Import the custom CSS file
import RevenueByLocation from '../component/Dashboard/RevenueByLocation';

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      {/* Content */}
      <ContentShell>
        <div className="page-header">
            <h1>eCommerce</h1>
          </div>
        {/* KPI Cards */}
        <div style={{ display: 'flex' }}>
          <div className="kpi-cards">
            <KPIcard title="Customers" value="3,781" change="+11.01%" />
            <KPIcard title="Orders" value="1,219" change="-0.03%" />
            <KPIcard title="Revenue" value="$695" change="+15.03%" />
            <KPIcard title="Growth" value="30.1%" change="+6.08%" />
          </div>

          {/* Projections */}
          <div className="projections">
            <h3>Projections vs Actuals</h3>
            <div className="projections-chart">
              <div
                className="bar projections-bar"
                style={{ height: '70%' }}
              ></div>
              <div className="bar actuals-bar" style={{ height: '60%' }}></div>
              <div
                className="bar projections-bar"
                style={{ height: '80%' }}
              ></div>
              <div className="bar actuals-bar" style={{ height: '65%' }}></div>
              <div
                className="bar projections-bar"
                style={{ height: '75%' }}
              ></div>
              <div className="bar actuals-bar" style={{ height: '70%' }}></div>
            </div>
          </div>
        </div>

        {/* Charts + Location */}
        <div className="charts-location">
          <RevenueChart />
          <RevenueByLocation />
        </div>

        <div className="top-selling-container">
          {/* Left Section: Top Selling Products */}
          <div className="top-selling-products">
            <h3>Top Selling Products</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ASOS Ridley High Waist</td>
                  <td>$79.49</td>
                  <td>82</td>
                  <td>$6,518.18</td>
                </tr>
                <tr>
                  <td>Marco Lightweight Shirt</td>
                  <td>$128.50</td>
                  <td>37</td>
                  <td>$4,754.50</td>
                </tr>
                <tr>
                  <td>Half Sleeve Shirt</td>
                  <td>$39.99</td>
                  <td>64</td>
                  <td>$2,559.36</td>
                </tr>
                <tr>
                  <td>Lightweight Jacket</td>
                  <td>$20.00</td>
                  <td>184</td>
                  <td>$3,680.00</td>
                </tr>
                <tr>
                  <td>Marco Shoes</td>
                  <td>$79.49</td>
                  <td>64</td>
                  <td>$1,965.81</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Section: Total Sales */}
          <div className="total-sales">
            <h3>Total Sales</h3>
            <div className="total-sales-chart">
              <div className="circle-chart">
                {/* You can replace this with a circular chart component */}
                <div className="chart-placeholder">38.6%</div>
              </div>
            </div>
            <div className="sales-details">
              <div>
                <strong>Direct:</strong> $300.56
              </div>
              <div>
                <strong>Affiliate:</strong> $135.18
              </div>
              <div>
                <strong>Sponsored:</strong> $154.02
              </div>
              <div>
                <strong>E-mail:</strong> $48.96
              </div>
            </div>
          </div>
        </div>
      </ContentShell>
    </div>
  );
}
