import React from 'react';

const SkillsPage = () => {

    const skillsData = [
        {
            name: "Programming Languages",
            data: [
                { name: "C#", level: 7, },
                { name: "HTML", level: 8, },
                { name: "CSS", level: 7, },
                { name: "JavaScript", level: 9, },
                { name: "TypeScript", level: 5, },
                { name: "Python", level: 7, },
                { name: "C++", level: 5, },
            ],
        },
        {
            name: "Tools",
            data: [
                { name: "Visual Studio", level: 5, },
                { name: "VS Code", level: 7, },
                { name: "Git", level: 6, },
                { name: "Photoshop", level: 7, },
                { name: "Blender", level: 9, },
                { name: "Figma", level: 7, },
            ],
        },
        {
            name: "Frameworks and Engines",
            data: [
                { name: "Unity", level: 7, },
                { name: "Unreal-Engine 5", level: 5, },
                { name: "React.js", level: 7, },
                { name: "Next.js", level: 8, },
                { name: "Nuxt.js", level: 5, },
            ],
        },
        {
            name: "Technolgies",
            data: [
                { name: "Tailwind CSS", level: 7, },
                { name: "GSAP", level: 5, },
                { name: "three.js", level: 6, },
                { name: "MongoDB Atlas", level: 6, },
                { name: "Mongoose", level: 7, },
                { name: "Cloudinary", level: 5, },
                { name: "Sanity", level: 6, },
            ],
        }
    ]


    const getSkillLevelStyle = (level: number) => {
        const width = `${level * 10}%`;
        return { width };
    }

    return (
        <div className="flex flex-col justify-start items-center w-full">
            <p className="py-4 text-lg">Below you will find my self-evaluated skill levels out of ten.</p>
            <div className="w-1/2 border-b-2"></div>
            <div className="w-1/2 flex flex-col justify-start items-start px-4 pb-4">
                {skillsData.map((section, sectionIndex) => (
                    <div key={`section_${sectionIndex}`} className="w-full">
                        <h2 className="py-2">{section.name}</h2>
                        {section.data.map((skill, skillIndex) => {
                            const skillLevelStyle = getSkillLevelStyle(skill.level);
                            return (
                                <div
                                    key={`skill_${skillIndex}`}
                                    className="skill-bar-container mb-2"
                                >
                                    <div className="skill-bar" style={skillLevelStyle}>
                                        <span className="skill-name pl-2">{skill.name}</span>
                                        <span className="skill-level pr-2">{skill.level}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
