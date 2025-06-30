export default function Projects() {
  const projects = [
    { name: "YouTube AI Clone", tech: "React, Node.js, MongoDB" },
    { name: "SmartEducationHub", tech: "Node.js, MySQL, HTML/CSS" },
    { name: "Travel Management System", tech: "Firebase, JSP, Android" },
    { name: "Fruit Disease Detection", tech: "Flask, CNN" }
  ];
  return (
    <div className="grid gap-4">
      {projects.map((project, index) => (
        <div key={index} className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">{project.name}</h3>
          <p className="text-sm text-gray-600">{project.tech}</p>
        </div>
      ))}
    </div>
  );
}