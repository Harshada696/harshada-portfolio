export default function Skills() {
  const skills = ["React", "Node.js", "Python", "Java", "MongoDB", "Firebase", "AWS", "Tailwind CSS"];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="bg-white shadow p-4 rounded text-center">{skill}</div>
      ))}
    </div>
  );
}