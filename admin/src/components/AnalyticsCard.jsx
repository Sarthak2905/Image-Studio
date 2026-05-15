const AnalyticsCard = ({ label, value }) => (
  <div className="card p-5">
    <p className="text-zinc-400 text-sm">{label}</p>
    <p className="text-2xl mt-2 font-semibold">{value}</p>
  </div>
);

export default AnalyticsCard;
