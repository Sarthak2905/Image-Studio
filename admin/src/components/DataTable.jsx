const DataTable = ({ title, columns, rows }) => (
  <div className="card p-5 overflow-x-auto">
    <h3 className="mb-4">{title}</h3>
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-zinc-400 border-b border-white/10">
          {columns.map((col) => (
            <th key={col} className="pb-3 pr-4">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.length ? rows.map((row, idx) => (
          <tr key={idx} className="border-b border-white/5">
            {row.map((cell, i) => (
              <td key={i} className="py-3 pr-4">{cell}</td>
            ))}
          </tr>
        )) : (
          <tr><td colSpan={columns.length} className="py-6 text-zinc-500">No records found</td></tr>
        )}
      </tbody>
    </table>
  </div>
);

export default DataTable;
