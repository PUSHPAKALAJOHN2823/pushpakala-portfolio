import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Cloud, GitBranch, Palette } from 'lucide-react';

// ✅ Import icons/images
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import tsIcon from '../assets/ts.jpeg';
import reduxIcon from '../assets/redux.jpeg';
import tailwindIcon from '../assets/tailwind.jpeg';
import bootstrapIcon from '../assets/boot.jpeg';
import nodeIcon from '../assets/node.png';
import expressIcon from '../assets/exp.jpeg';
import apiIcon from '../assets/rest.jpeg';
import vercelIcon from '../assets/vercel.jpeg';
import renderIcon from '../assets/render.jpeg';
import githubActionsIcon from '../assets/git.jpeg';
import githubIcon from '../assets/githubIcon.png';
import webstormIcon from '../assets/web.jpeg';
import unixIcon from '../assets/unix.jpeg';
import figmaIcon from '../assets/figma.png';
import designIcon from '../assets/ui.jpeg';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code2,
      color: 'text-blue-500',
      skills: [
        { name: 'HTML5', icon: htmlIcon },
        { name: 'CSS3', icon: cssIcon },
        { name: 'JavaScript (ES6+)', icon: jsIcon },
        { name: 'React.js', icon: reactIcon },
        { name: 'TypeScript', icon: tsIcon },
        { name: 'Redux', icon: reduxIcon },
        { name: 'Tailwind CSS', icon: tailwindIcon },
        { name: 'Bootstrap', icon: bootstrapIcon }
      ]
    },
    {
      category: 'Backend & APIs',
      icon: Database,
      color: 'text-green-500',
      skills: [
        { name: 'Node.js', icon: nodeIcon },
        { name: 'Express.js', icon: expressIcon },
        { name: 'REST APIs', icon: apiIcon }
      ]
    },
    {
      category: 'Deployment & Cloud',
      icon: Cloud,
      color: 'text-purple-500',
      skills: [
        { name: 'Vercel', icon: vercelIcon },
        { name: 'Render', icon: renderIcon },
        { name: 'GitHub Actions', icon: githubActionsIcon }
      ]
    },
    {
      category: 'Tools & Productivity',
      icon: GitBranch,
      color: 'text-orange-500',
      skills: [
        { name: 'Git & GitHub', icon: githubIcon },
        { name: 'WebStorm', icon: webstormIcon },
        { name: 'Unix Commands', icon: unixIcon }
      ]
    },
    {
      category: 'Design & Collaboration',
      icon: Palette,
      color: 'text-pink-500',
      skills: [
        { name: 'Figma', icon: figmaIcon },
        { name: 'UI/UX Basics', icon: designIcon }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A mix of technologies, tools, and platforms I use to design, build, and deploy applications
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.category}
                className="card-gradient border border-border hover-glow scale-on-hover slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 glow-effect">
                      <category.icon size={32} className={`${category.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{category.category}</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center gap-3">
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
