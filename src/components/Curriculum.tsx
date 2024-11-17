export default function Curriculum() {
  const modules = [
    {
      week: "Week 1-3",
      title: "Foundations of Interior Design",
      topics: ["Color Theory", "Design Principles", "Space Planning Basics"]
    },
    {
      week: "Week 4-6",
      title: "Materials and Textures",
      topics: ["Fabric Selection", "Surface Materials", "Sustainable Options"]
    },
    {
      week: "Week 7-9",
      title: "Lighting and Atmosphere",
      topics: ["Natural Light", "Artificial Lighting", "Mood Creation"]
    },
    {
      week: "Week 10-12",
      title: "Project Management",
      topics: ["Client Communication", "Budgeting", "Timeline Planning"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Course Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A carefully structured program to build your skills from the ground up
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-indigo-600 mb-2">
                {module.week}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {module.title}
              </h3>
              <ul className="space-y-2">
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}