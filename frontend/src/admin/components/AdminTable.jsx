import React from "react";

/**
 * Generic table: columns = [{ key: 'name', label: 'Name' }, ...]
 * rows = array of objects
 */
export default function AdminTable({ columns, rows }) {
  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 text-left text-sm">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className="p-4" colSpan={columns.length}>
                No records found.
              </td>
            </tr>
          ) : (
            rows.map((row, idx) => (
              <tr key={row._id || row.id || idx} className="border-t">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2 text-sm align-top">
                    {col.render
                      ? col.render(row[col.key], row)
                      : row[col.key] ?? ""}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
