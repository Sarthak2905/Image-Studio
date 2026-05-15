import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import { fetchClients } from '../services/adminService';

const Clients = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchClients().then(({ data }) => {
      setRows((data.data || []).map((client) => [client.name, client.email, client.packageAmount, client.pendingAmount]));
    }).catch(() => setRows([]));
  }, []);

  return <DataTable title="Clients" columns={['Name', 'Email', 'Package', 'Pending']} rows={rows} />;
};

export default Clients;
