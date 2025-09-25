'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from '@/components/Terminal';
import Navigation from '@/components/Navigation';
import TypeWriter from '@/components/TypeWriter';
import MatrixRain from '@/components/MatrixRain';
import { 
  Download, 
  ExternalLink, 
  Code, 
  Zap, 
  Award,
  Users,
  Brain,
  Rocket,
  Github,
  Linkedin,
  Mail,
  Phone
} from 'lucide-react';

export default function Home() {
  const [currentPath, setCurrentPath] = useState('/');
  const [activeTerminal, setActiveTerminal] = useState('main');

  const typewriterTexts = [
    "Full-Stack Developer",
    "Embedded Systems Engineer", 
    "Product Engineer",
    "IoT Innovator",
    "Agile Business Analyst"
  ];

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <HomeContent />;
      case '/projects':
        return <ProjectsContent />;
      case '/skills':
        return <SkillsContent />;
      case '/education':
        return <EducationContent />;
      case '/achievements':
        return <AchievementsContent />;
      case '/contact':
        return <ContactContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--terminal-bg)] relative overflow-hidden">
      <MatrixRain />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <Terminal title="navigation@zenith:~" isActive={activeTerminal === 'nav'}>
              <Navigation 
                currentPath={currentPath} 
                onNavigate={setCurrentPath}
              />
            </Terminal>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Terminal 
              title={`zenith@ubuntu:~${currentPath === '/' ? '' : currentPath}`}
              isActive={activeTerminal === 'main'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPath}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </Terminal>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeContent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-[var(--terminal-border)] pb-4">
        <TypeWriter 
          texts={[
            "Full-Stack Developer",
            "Embedded Systems Engineer", 
            "Product Engineer",
            "IoT Innovator",
            "Agile Business Analyst"
          ]}
          className="text-2xl mb-4"
        />
        <div className="text-lg text-gray-300 leading-relaxed">
          <span className="text-[var(--terminal-success)]">zenith@ubuntu</span>
          <span className="text-gray-400">:</span>
          <span className="text-[var(--terminal-accent)]">~</span>
          <span className="text-gray-400">$ cat about.txt</span>
        </div>
      </div>

      {/* About Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <div className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="text-[var(--terminal-purple)]" size={20} />
            <span className="text-[var(--terminal-purple)] font-semibold">About Me</span>
          </div>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate and versatile tech enthusiast with a strong foundation in both 
            software development and embedded systems. My journey spans from building IoT-enabled 
            wheelchairs to developing full-stack applications, consistently seeking new challenges 
            to expand my capabilities and impact.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="text-[var(--terminal-accent)]" size={16} />
              <span className="text-[var(--terminal-accent)] font-semibold">Projects</span>
            </div>
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-sm text-gray-400">Completed Projects</div>
          </div>
          
          <div className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="text-[var(--terminal-success)]" size={16} />
              <span className="text-[var(--terminal-success)] font-semibold">Awards</span>
            </div>
            <div className="text-2xl font-bold text-white">5</div>
            <div className="text-sm text-gray-400">Competition Wins</div>
          </div>
          
          <div className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="text-[var(--terminal-warning)]" size={16} />
              <span className="text-[var(--terminal-warning)] font-semibold">Experience</span>
            </div>
            <div className="text-2xl font-bold text-white">2+</div>
            <div className="text-sm text-gray-400">Years Coding</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <motion.a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-[var(--terminal-accent)] text-black px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            Download Resume
          </motion.a>
          
          <motion.button
            onClick={() => window.location.href = '/projects'}
            className="flex items-center gap-2 border border-[var(--terminal-accent)] text-[var(--terminal-accent)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--terminal-accent)] hover:text-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket size={16} />
            View Projects
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

function ProjectsContent() {
  const projects = [
    {
      title: "Gesture-Controlled Wheelchair",
      description: "IoT-enabled wheelchair controlled by hand gestures - 1st Place at Envision'23",
      tech: ["Arduino", "Accelerometer", "RF Module", "Embedded C"],
      award: "₹10,000 Prize",
      status: "completed"
    },
    {
      title: "Glaucoma Eye Pressure Monitor", 
      description: "IoT-based device for non-invasive IOP monitoring - 2nd Place at INDIA@2047",
      tech: ["Arduino", "Pressure Sensors", "LoRa", "Embedded C"],
      award: "₹1,000 Gift",
      status: "completed"
    },
    {
      title: "ParkInToday",
      description: "App-based IoT solution for real-time parking space management",
      tech: ["ESP32", "NFC", "UPI API", "Firebase", "React"],
      award: "5th Place KSR Innovation",
      status: "active"
    },
    {
      title: "Electric 4-Wheeler Prototype",
      description: "Fully functional EV prototype with custom mechanical systems",
      tech: ["NX CAD", "Manual Fabrication", "Mechanical Design"],
      award: "Lead Champions ₹10,000",
      status: "completed"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-[var(--terminal-border)] pb-4">
        <div className="text-lg text-gray-300">
          <span className="text-[var(--terminal-success)]">zenith@ubuntu</span>
          <span className="text-gray-400">:</span>
          <span className="text-[var(--terminal-accent)]">~/projects</span>
          <span className="text-gray-400">$ ls -la</span>
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-6 hover:border-[var(--terminal-accent)] transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-[var(--terminal-accent)]">
                {project.title}
              </h3>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                project.status === 'completed' 
                  ? 'bg-[var(--terminal-success)] bg-opacity-20 text-[var(--terminal-success)]'
                  : 'bg-[var(--terminal-warning)] bg-opacity-20 text-[var(--terminal-warning)]'
              }`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-[var(--terminal-border)] text-[var(--terminal-purple)] rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-[var(--terminal-success)] font-semibold">
                🏆 {project.award}
              </span>
              <button className="flex items-center gap-2 text-[var(--terminal-accent)] hover:underline">
                <ExternalLink size={14} />
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SkillsContent() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "C", "JavaScript", "TypeScript"]
    },
    {
      title: "Technologies & Frameworks",
      icon: Zap,
      skills: ["React", "Next.js", "Node.js", "Arduino", "ESP32", "Firebase", "MySQL"]
    },
    {
      title: "Design & Tools",
      icon: Brain,
      skills: ["Figma", "NX CAD", "AutoCAD", "Canva", "Git", "REST APIs"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Leadership", "Public Speaking", "Problem Solving", "Agile Methodology"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-[var(--terminal-border)] pb-4">
        <div className="text-lg text-gray-300">
          <span className="text-[var(--terminal-success)]">zenith@ubuntu</span>
          <span className="text-gray-400">:</span>
          <span className="text-[var(--terminal-accent)]">~/skills</span>
          <span className="text-gray-400">$ cat skills.json</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Icon className="text-[var(--terminal-accent)]" size={20} />
                <h3 className="text-lg font-semibold text-[var(--terminal-accent)]">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-[var(--terminal-success)]">▶</span>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Languages */}
      <div className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-[var(--terminal-accent)] mb-4">Languages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <span className="text-[var(--terminal-success)]">Tamil</span>
            <span className="text-gray-400 ml-2">(Native)</span>
          </div>
          <div>
            <span className="text-[var(--terminal-success)]">English</span>
            <span className="text-gray-400 ml-2">(Fluent)</span>
          </div>
          <div>
            <span className="text-[var(--terminal-success)]">German</span>
            <span className="text-gray-400 ml-2">(A1 Level)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationContent() {
  return (
    <div className="space-y-6">
      <div className="border-b border-[var(--terminal-border)] pb-4">
        <div className="text-lg text-gray-300">
          <span className="text-[var(--terminal-success)]">zenith@ubuntu</span>
          <span className="text-gray-400">:</span>
          <span className="text-[var(--terminal-accent)]">~/education</span>
          <span className="text-gray-400">$ cat education.md</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Current Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-[var(--terminal-accent)]" size={20} />
            <h3 className="text-xl font-semibold text-[var(--terminal-accent)]">
              B.Tech in Information Technology
            </h3>
          </div>
          
          <div className="space-y-3 text-gray-300">
            <div>
              <span className="text-[var(--terminal-success)] font-semibold">Institution:</span>
              <span className="ml-2">Loyola ICAM College of Engineering and Technology, Chennai</span>
            </div>
            <div>
              <span className="text-[var(--terminal-success)] font-semibold">CGPA:</span>
              <span className="ml-2">7.29 (up to Semester 3)</span>
            </div>
            <div>
              <span className="text-[var(--terminal-success)] font-semibold">Duration:</span>
              <span className="ml-2">2023 - Present</span>
            </div>
            <div>
              <span className="text-[var(--terminal-success)] font-semibold">Relevant Coursework:</span>
              <span className="ml-2">Data Structures, Operating Systems, Computer Networks, Embedded Systems, Web Development</span>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-[var(--terminal-purple)]" size={20} />
            <h3 className="text-xl font-semibold text-[var(--terminal-purple)]">Certifications</h3>
          </div>
          
          <div className="space-y-3">
            {[
              "C, MySQL, Java & Python Programming – Skillrack (Hands-on)",
              "Networks & Network Security – Coursera",
              "Artificial Intelligence Fundamentals – IBM SkillBuild",
              "Foundations of Cybersecurity & Security Risk Management – Coursera",
              "Onramp & Simulink – MathWorks"
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="flex items-center gap-2"
              >
                <span className="text-[var(--terminal-success)]">✓</span>
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AchievementsContent() {
  const achievements = [
    {
      title: "1st Place – Envision'23",
      description: "IoT-based gesture-controlled wheelchair",
      prize: "₹10,000 prize",
      type: "competition"
    },
    {
      title: "2nd Place – INDIA@2047",
      description: "Prototype submission for glaucoma patient IoT device",
      prize: "₹1,000 gift",
      type: "competition"
    },
    {
      title: "Lead Champions – EFWDC'24",
      description: "Electric 4-Wheeler Design Club",
      prize: "₹10,000 prize",
      type: "competition"
    },
    {
      title: "4th Place – IMPACTx'25",
      description: "Ride-hailing IoT device",
      prize: "Recognition",
      type: "competition"
    },
    {
      title: "5th Place – KSR Innovation Challenge",
      description: "ParkInToday solution",
      prize: "Recognition",
      type: "competition"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-[var(--terminal-border)] pb-4">
        <div className="text-lg text-gray-300">
          <span className="text-[var(--terminal-success)]">zenith@ubuntu</span>
          <span className="text-gray-400">:</span>
          <span className="text-[var(--terminal-accent)]">~/achievements</span>
          <span className="text-gray-400">$ cat awards.log</span>
        </div>
      </div>

      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-6 hover:border-[var(--terminal-success)] transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-[var(--terminal-success)]">
                🏆 {achievement.title}
              </h3>
              <span className="px-2 py-1 bg-[var(--terminal-success)] bg-opacity-20 text-[var(--terminal-success)] rounded text-sm font-semibold">
                {achievement.prize}
              </span>
            </div>
            <p className="text-gray-300">{achievement.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[var(--terminal-purple)] mb-4">Hackathons</h3>
          <p className="text-gray-300">
            Participated in over 5 hackathons, showcasing strong rapid prototyping, teamwork, 
            and real-time problem-solving abilities across domains like EV, IoT, and AI.
          </p>
        </div>

        <div className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[var(--terminal-orange)] mb-4">Workshops & Events</h3>
          <p className="text-gray-300">
            Attended 5+ workshops on Robotics, Industry 4.0, Embedded Systems, EV Design, 
            and Startup Building. Active in intercollegiate events.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactContent() {
  return (
    <div className="space-y-6">
      <div className="border-b border-[var(--terminal-border)] pb-4">
        <div className="text-lg text-gray-300">
          <span className="text-[var(--terminal-success)]">zenith@ubuntu</span>
          <span className="text-gray-400">:</span>
          <span className="text-[var(--terminal-accent)]">~/contact</span>
          <span className="text-gray-400">$ cat contact.info</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold text-[var(--terminal-accent)] mb-6">Get In Touch</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-[var(--terminal-accent)]" size={20} />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href="mailto:zenithjoshua.27it@licet.ac.in" className="text-[var(--terminal-accent)] hover:underline">
                    zenithjoshua.27it@licet.ac.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-[var(--terminal-success)]" size={20} />
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <a href="tel:+917448343632" className="text-[var(--terminal-success)] hover:underline">
                    +91 7448343632
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Linkedin className="text-[var(--terminal-accent)]" size={20} />
                <div>
                  <div className="text-sm text-gray-400">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/zenith-joshua-7178a623a" className="text-[var(--terminal-accent)] hover:underline">
                    zenith-joshua
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Github className="text-[var(--terminal-purple)]" size={20} />
                <div>
                  <div className="text-sm text-gray-400">GitHub</div>
                  <a href="https://github.com/jos-zenith" className="text-[var(--terminal-purple)] hover:underline">
                    jos-zenith
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold text-[var(--terminal-success)] mb-4">Send Message</h3>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-[var(--terminal-bg)] border border-[var(--terminal-border)] rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-[var(--terminal-bg)] border border-[var(--terminal-border)] rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-[var(--terminal-bg)] border border-[var(--terminal-border)] rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none resize-none"
                placeholder="Your message..."
              />
            </div>
            
            <motion.button
              type="submit"
              className="bg-[var(--terminal-accent)] text-black px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}