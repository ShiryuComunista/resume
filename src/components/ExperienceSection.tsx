import { experiences } from "@/utils/exeriences";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

function ExperienceSection() {
  return (
    <>
      <div className="flex flex-row space-x-3 items-center mb-8">
        <BriefcaseIcon className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-bold">Experiência Profissional</h2>
      </div>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-10">
          <div className="flex justify-between flex-wrap gap-2 w-full">
            <span className="text-gray-700 font-bold">{exp.company}</span>
            <p>
              <span className="text-gray-700 mr-2">{exp.role} |</span>
              <span className="text-gray-700">{exp.period}</span>
            </p>
          </div>
          <ul className="list-none mt-2 space-y-2">
            {exp.descriptions.map((desc, descIndex) => (
              <li key={descIndex} className="text-gray-700 flex items-center m-1">
                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2 mt-1 shrink-0"></span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
          {exp.skills && exp.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full px-3 py-1.5 text-xs cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default ExperienceSection;