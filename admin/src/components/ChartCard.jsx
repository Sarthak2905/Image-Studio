import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ChartCard = ({ data }) => (
  <div className="card p-5 h-80">
    <h3 className="mb-4">Monthly Revenue</h3>
    <ResponsiveContainer width="100%" height="90%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C6A16E" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#C6A16E" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#262833" />
        <XAxis dataKey="month" stroke="#a1a1aa" />
        <YAxis stroke="#a1a1aa" />
        <Tooltip />
        <Area type="monotone" dataKey="amount" stroke="#C6A16E" fillOpacity={1} fill="url(#rev)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default ChartCard;
