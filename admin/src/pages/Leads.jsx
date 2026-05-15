import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import { fetchLeads } from '../services/adminService';

const Leads = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchLeads().then(({ data }) => {
      setRows((data.data || []).map((lead) => [lead.name, lead.email, lead.phone, lead.status]));
    }).catch(() => setRows([]));
  }, []);

  return <DataTable title="Leads" columns={['Name', 'Email', 'Phone', 'Status']} rows={rows} />;
};

export default Leads;
