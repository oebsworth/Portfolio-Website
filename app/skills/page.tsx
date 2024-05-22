import React from 'react';

const SkillsPage = () => {

    const skillsData = [
        {
            name: "Programming Languages",
            data: [
                { name: "JavaScript", level: 8, },
                { name: "C#", level: 8, },
                { name: "Python", level: 7, },
                { name: "C++", level: 6, },
                { name: "TypeScript", level: 5 },
                { name: "Kotlin", level: 5 }
            ]
        },
        {
            name: "Programming Frameworks",
            data: [
                { name: "React.js", level: 7, },
                { name: "Next.js", level: 8, },
                { name: "Nuxt.js", level: 5, },
                { name: "VueJS", level: "3" },
                { name: "Angular", level: "2" },
                { name: "Solid", level: "2" },
                { name: "Stencil", level: "2" },
                { name: "Svelte", level: "2" },
                { name: "Electron", level: "4" },
                { name: "Nextron", level: "5" },
            ],
        },
        {
            name: "Programming Technolgies",
            data: [
                // Javascript
                { name: "TailwindCSS", level: 7, },
                { name: "GSAP", level: 4, },
                { name: "Three.js", level: 4, },
                { name: "MongoDB", level: 4, },
                { name: "Mongoose", level: 6, },
                { name: "Cloudinary", level: 4, },
                { name: "Sanity", level: 3, },
                { name: "JSX", level: "10" },
                { name: "Axios", level: "7" },

                // Python        
                { name: "OpenCV", level: "5" },
                { name: "Numpy", level: "4" },
                { name: "Tkinter", level: "2" },
                { name: "customtkinter", level: "3" },
                { name: "Tensorflow", level: "3" },
            ],
        },
        {
            name: "Softwares",
            data: [
                // 3D Modeling
                { name: "Blender", level: 9, },

                // Coding
                { name: "Visual Studio", level: 5, },
                { name: "VS Code", level: 8, },
                { name: "Git", level: 7, },

                // Web Development
                { name: "Figma", level: 6, },

                // Adobe
                { name: "Adobe Photoshop", level: 7, },
                { name: "Adobe Illustrator", level: 4, },

                // Microsoft Office
                { name: "MS Word", level: "7" },
                { name: "MS Powerpoint", level: "5" },
                { name: "MS Excel", level: "3" },

                // Android
                {name: "Android Studio", level: 5}
            ],
        },
        {
            name: "Game Engines",
            data: [
                { name: "Unity", level: "8" },
                { name: "Unreal Engine", level: "5" }
            ],
        },
        {
            name: "Areas of Understanding",
            data: [
                { name: "Web Development", level: "8" },
                { name: "Game Development", level: "6" },
                { name: "Machine Learning", level: "4" },
            ],
        },

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
                            const skillLevelStyle = getSkillLevelStyle(skill.level as number);
                            return (
                                <div
                                    key={`skill_${skillIndex}`}
                                    className="skill-bar-container mb-2"
                                >
                                    <div className="skill-bar" style={skillLevelStyle}>
                                        <span className="skill-name pl-2">{skill.name}</span>
                                        <span className="skill-level px-2">{skill.level}</span>
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
