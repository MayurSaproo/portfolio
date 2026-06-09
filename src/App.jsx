import React, { useState } from 'react';

// --- Explicitly IMPORT YOUR IMAGES HERE ---
import imgA from './imga.png';
import imgB from './imge.png';
import imgC from './imgf.png';
import imgD from './imgd.png';

// --- NATIVE ICON COMPONENTS ---
const IconGithub = ({ size = 20 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>);
const IconLinkedin = ({ size = 20 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>);
const IconMail = ({ size = 20 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const IconSend = ({ size = 20 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>);
const IconCode = ({ size = 24 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const IconBrain = ({ size = 24 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>);
const IconPhone = ({ size = 24 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>);
const IconMapPin = ({ size = 24 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>);
const IconBookOpen = ({ size = 24 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>);
const IconBriefcase = ({ size = 24 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>);

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.project || 'New Opportunity'}`);
    const body = encodeURIComponent(`Hello Mayur,\n\nMy name is ${formData.name}. (${formData.email})\n\n${formData.message}`);
    // This will open the user's default email client (Gmail, Apple Mail, Outlook, etc.)
    window.location.href = `mailto:mayursaproo1111@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-200">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-xl font-bold text-slate-900 tracking-tight">Mayur Saproo<span className="text-indigo-600">.</span></div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#portfolio" className="hover:text-indigo-600 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contactme</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-12 md:pt-0">
          {/* Social Icons */}
          <div className="hidden md:flex flex-col gap-6 text-indigo-600">
            <a href="https://github.com/MayurSaproo" target="_blank" rel="noreferrer" className="hover:text-indigo-800 transition-transform hover:-translate-y-1"><IconGithub /></a>
            <a href="https://www.linkedin.com/in/mayur-saproo/" target="_blank" rel="noreferrer" className="hover:text-indigo-800 transition-transform hover:-translate-y-1"><IconLinkedin /></a>
          </div>

          {/* Hero Text */}
          <div className="flex-1 md:pr-12 text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-500">Mayur Saproo</span>
            </h1>
            <h3 className="text-xl text-slate-500 font-medium mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-0.5 bg-indigo-600"></span> Frontend Developer & AI/ML
            </h3>
            <p className="text-slate-600 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
              High level experience in web design and machine learning modeling, bridging the gap between robust back-end AI solutions and intuitive user experiences.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-indigo-600/20">
              Contact Me <IconSend size={18} />
            </a>
          </div>

          {/* Hero Image (imga.png) */}
          <div className="flex-1 flex justify-center md:justify-end pt-8 md:pt-0 order-1 md:order-2">
            <div style={{ animation: 'float 6s ease-in-out infinite' }}>
              <div className="w-80 h-80 md:w-96 md:h-96 bg-indigo-100 overflow-hidden flex items-center justify-center shadow-2xl shadow-indigo-500/30" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}>
                <img src={imgA} alt="Mayur Saproo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">About Me</h2>
          <span className="text-sm text-slate-500 block mb-16">My introduction</span>

          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            {/* About Image (imgb.png) */}
            <div className="bg-slate-200 aspect-square md:aspect-4/3 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              <img src={imgB} alt="About Mayur" className="w-full h-full object-cover" />
            </div>

            <div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                I am a B.Tech. student focusing on the intersection of modern front-end web development and advanced machine learning techniques like Computer Vision and NLP. I build clean, efficient, and intelligent digital products.
              </p>
              <div className="flex justify-between gap-4 mb-8">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-slate-900">4</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Programming<br/>Languages</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-slate-900">5</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Completed<br/>Projects</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-slate-900">1</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Hackathon<br/>Finalist</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Skills</h2>
          <span className="text-sm text-slate-500 block mb-16">My technical level</span>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
            {/* Frontend Skills */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6 text-indigo-600">
                <IconCode size={28} />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Frontend Developer</h3>
                  <span className="text-xs text-slate-500">HTML, CSS, JS, React, Tailwind</span>
                </div>
              </div>
              <div className="space-y-4">
                <SkillBar name="HTML & CSS" percentage="90%" />
                <SkillBar name="JavaScript" percentage="80%" />
                <SkillBar name="React & Tailwind" percentage="85%" />
              </div>
            </div>

            {/* AI/ML Skills */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6 text-indigo-600">
              <IconCode size={28} />
              <div>
                  <h3 className="text-lg font-bold text-slate-900">AI / ML Engineer</h3>
                  <span className="text-xs text-slate-500">Python, C++, Scikit-Learn, NLP, FastAPI, Flask</span>
                </div>
              </div>
              <div className="space-y-4">
                <SkillBar name="Python & C++" percentage="85%" />
                <SkillBar name="Scikit-Learn & NLP" percentage="75%" />
                <SkillBar name="FastAPI & Flask" percentage="70%" />
              </div>
            </div>
          </div>
        </section>

        {/* Qualification / Experience Section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Qualification</h2>
          <span className="text-sm text-slate-500 block mb-16">My personal journey</span>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Education Column */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-2">
                <IconBookOpen size={22} /> Education
              </h3>
              <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-12 text-left">
                {/* LPU */}
                <div className="mb-10 ml-8 relative">
                  <div className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                  <h3 className="text-lg font-bold text-slate-900">Lovely Professional University</h3>
                  <span className="text-sm text-slate-500 block mb-2">Punjab, India | Aug 2023 - Present</span>
                  <p className="text-sm text-slate-600">Bachelor of Technology - Computer Science and Engineering.</p>
                </div>
                {/* Hari Singh */}
                <div className="mb-10 ml-8 relative">
                  <div className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                  <h3 className="text-lg font-bold text-slate-900">Hari Singh Higher Secondary School</h3>
                  <span className="text-sm text-slate-500 block mb-2">Jammu, J&K | Apr 2022 - Mar 2023</span>
                  <p className="text-sm text-slate-600">Intermediate.</p>
                </div>
                {/* K.N.I.T */}
                <div className="mb-10 ml-8 relative">
                  <div className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                  <h3 className="text-lg font-bold text-slate-900">K.N.I.T Higher Secondary School</h3>
                  <span className="text-sm text-slate-500 block mb-2">Jammu, J&K | Apr 2020 - Mar 2021</span>
                  <p className="text-sm text-slate-600">Matriculation.</p>
                </div>
              </div>
            </div>

            {/* Experience Column */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-2">
                <IconBriefcase size={22} /> Experience
              </h3>
              <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-12 text-left">
                
                {/* IAF */}
                <div className="mb-10 ml-8 relative">
                  <div className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                  <h3 className="text-lg font-bold text-slate-900">InAmligos Foundation (IAF)</h3>
                  <span className="text-sm text-slate-500 block mb-2">Graphic Design | May 2025 - Jun 2026</span>
                  <p className="text-sm text-slate-600">Contributed to organizational projects and initiatives through graphic design.</p>
                </div>

                {/* Dragon */}
                <div className="mb-10 ml-8 relative">
                  <div className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                  <h3 className="text-lg font-bold text-slate-900">Dragon</h3>
                  <span className="text-sm text-slate-500 block mb-2">Graphic Design | Dec 2025 - Feb 2026</span>
                  <p className="text-sm text-slate-600">Developed visual concepts and digital graphics for various projects.</p>
                </div>

                {/* THE SARA */}
                <div className="mb-10 ml-8 relative">
                  <div className="absolute -left-10.25 top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                  <h3 className="text-lg font-bold text-slate-900">THE SARA</h3>
                  <span className="text-sm text-slate-500 block mb-2">SEO Intern | Jun 2024 - Jul 2024</span>
                  <p className="text-sm text-slate-600">Utilized Tech stacks like Semrush, Ahrefs, and Canva for project management and SEO.</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Portfolio</h2>
          <span className="text-sm text-slate-500 block mb-16">Most recent work</span>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            {/* Project 1 (imgc.png) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow group">
              <div className="bg-slate-100 h-48 rounded-xl mb-6 overflow-hidden relative">
                <img src={imgC} alt="InsurIQ.ai" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Reassume.ai</h3>
              <p className="text-sm text-slate-600 mb-4">Resume skill extraction model using Random Forest ML and FastAPI. Provides real-time job role predictions.</p>
              <a href="https://reassumeai.vercel.app/" target="_blank" rel="noreferrer" className="text-indigo-600 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">Demo →</a>
            </div>

            {/* Project 2 (imgd.png) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow group">
              <div className="bg-slate-100 h-48 rounded-xl mb-6 overflow-hidden relative">
                <img src={imgD} alt="Jelium.ai" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Jelium.ai</h3>
              <p className="text-sm text-slate-600 mb-4">An intelligent platform leveraging advanced AI/ML models to deliver optimized solutions and data-driven insights.</p>
              <a href="https://jeliumai.vercel.app/" target="_blank" rel="noreferrer" className="text-indigo-600 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">Demo →</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact Me</h2>
          <span className="text-sm text-slate-500 block mb-16">Get in touch</span>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <IconPhone className="text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Call Me</h3>
                  <span className="text-sm text-slate-500">+91 6006803075</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <IconMail className="text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email</h3>
                  <span className="text-sm text-slate-500">mayursaproo1111@gmail.com</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <IconMapPin className="text-indigo-600 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Location</h3>
                  <span className="text-sm text-slate-500">Jammu, India</span>
                </div>
              </div>
            </div>

            {/* Fully Functional Contact Form */}
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name" 
                  className="bg-indigo-50/50 w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-indigo-600 outline-none" 
                />
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email" 
                  className="bg-indigo-50/50 w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-indigo-600 outline-none" 
                />
              </div>
              <input 
                required
                type="text" 
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                placeholder="Project" 
                className="bg-indigo-50/50 w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-indigo-600 outline-none" 
              />
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message" 
                rows="4" 
                className="bg-indigo-50/50 w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-indigo-600 outline-none resize-none"
              ></textarea>
              <button type="submit" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-md">
                Send Message <IconSend size={18} />
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold mb-1">Mayur Saproo<span className="text-indigo-300">.</span></h2>
            <span className="text-sm text-indigo-200">Frontend Developer</span>
          </div>
          <div className="flex justify-center gap-6 text-sm font-medium text-indigo-100">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-white transition-colors">Contactme</a>
          </div>
          <div className="flex justify-center md:justify-end gap-6">
            <a href="https://github.com/MayurSaproo" target="_blank" rel="noreferrer" className="text-indigo-200 hover:text-white transition-transform hover:-translate-y-1"><IconGithub /></a>
            <a href="https://www.linkedin.com/in/mayur-saproo/" target="_blank" rel="noreferrer" className="text-indigo-200 hover:text-white transition-transform hover:-translate-y-1"><IconLinkedin /></a>
          </div>
        </div>
        <div className="text-center text-xs text-indigo-300 mt-12">
          &copy; {new Date().getFullYear()} Mayur Saproo. All right reserved.
        </div>
      </footer>

    </div>
  );
}

// Reusable Skill Bar Component
function SkillBar({ name, percentage }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-medium mb-1">
        <span className="text-slate-700">{name}</span>
        <span className="text-slate-500">{percentage}</span>
      </div>
      <div className="h-2 w-full bg-indigo-100 rounded-full overflow-hidden">
        <div className="h-full bg-indigo-600 rounded-full" style={{ width: percentage }}></div>
      </div>
    </div>
  );
}

export default App;
