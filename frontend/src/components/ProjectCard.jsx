import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
      <div className="w-full h-44 bg-gray-100">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.name}</h3>
        <p className="text-sm mt-2 line-clamp-3">{project.description}</p>
        <button className="mt-3 inline-block px-3 py-1 border rounded text-sm">
          Read More
        </button>
      </div>
    </div>
  );
}
