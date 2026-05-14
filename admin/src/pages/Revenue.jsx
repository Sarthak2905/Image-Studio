import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import { fetchRevenue } from '../services/adminService';

const Revenue = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchRevenue().then(({ data }) => {
      setRows((data.data || []).map((entry) => [entry.month, entry.totalAmount, entry.receivedAmount, entry.pendingAmount]));
    }).catch(() => setRows([]));
  }, []);

  return <DataTable title="Revenue" columns={['Month', 'Total', 'Received', 'Pending']} rows={rows} />;
};

export default Revenue;
