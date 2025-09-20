import Badge from "../UI/Badge";
import Avatar from "../UI/Avatar";
import "../../App.css";

const orders = [
  { id: "#CM9801", avatar:'/src/assets/1.jpg', user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress" },
  { id: "#CM9802", avatar:'/src/assets/1.jpg', user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete" },
  { id: "#CM9803", avatar:'/src/assets/1.jpg', user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending" },
  { id: "#CM9804", avatar:'/src/assets/1.jpg', user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved" },
  { id: "#CM9805", avatar:'/src/assets/1.jpg', user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },
];

export default function OrdersTable() {
  return (
    <div className="orders-table-container">
      <table className="orders-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id} className={index % 2 === 0 ? "even" : "odd"}>
              <td><input type="checkbox" /></td>
              <td>{order.id}</td>
              <td className="user-cell">
                <Avatar src={order.avatar} name={order.user} />
                {order.user}
              </td>
              <td>{order.project}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td><Badge status={order.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
