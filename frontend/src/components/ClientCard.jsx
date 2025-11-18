import React from "react";

export default function ClientCard({ client }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex items-center gap-4">
        <img
          src={client.imageUrl}
          alt={client.name}
          className="w-16 h-16 object-cover rounded-full"
        />
        <div>
          <h4 className="font-medium">{client.name}</h4>
          <div className="text-xs text-gray-500">{client.designation}</div>
        </div>
      </div>
      <p className="mt-3 text-sm">{client.description}</p>
    </div>
  );
}
