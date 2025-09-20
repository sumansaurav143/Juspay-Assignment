import OrdersTable from '../component/Dashboard/OrdersTable';
import ContentShell from '../component/Layout/ContentShell';
// import HeaderBar from '../component/Layout/HeaderBar';
// import Sidebar from '../component/Layout/Sidebar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';

import './../App.css';

export default function OrdersPage() {
  return (
    <>
        {/* Content */}
        <ContentShell>
          <div className="page-header">
            <h1>Order List</h1>
          </div>

          {/* Filters + Search */}
          <div className="filters">
            <div className="filter-buttons">
              <button>
                <AddIcon />
              </button>
              <button>
                <FilterListOutlinedIcon />
              </button>
              <button>
                <SyncAltOutlinedIcon
                  sx={{ transform: 'rotate(90deg)', height: '20px' }}
                />
              </button>
            </div>

            {/* Search Bar */}
            <input type="text" placeholder="Search" />
          </div>

          {/* Orders Table */}
          <OrdersTable />

          {/* Pagination */}
          <div className="pagination">
            <ArrowBackIosIcon />
            {[1, 2, 3, 4, 5].map((page) => (
              <button key={page} className={page === 1 ? 'active' : ''}>
                {page}
              </button>
            ))}
            <ArrowForwardIosIcon />
          </div>
        </ContentShell>
    </>
  );
}
