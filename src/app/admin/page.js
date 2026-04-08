"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, LogOut, Plus, Edit, Trash2, Settings, Image as ImageIcon, MapPin, Calendar, Clock, Lock, User, Send, CheckCircle, ChevronRight, Ruler, FileText } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";
import { cn } from "@/lib/utils";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddModal, setShowAddModal] = useState(false);
  const { projects, deleteProject, addProject } = useProjectStore();
  
  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "kavincivil2@gmail.com" && password === "admin123") {
       setIsAuthenticated(true);
       setLoginError("");
    } else {
       setLoginError("Invalid credentials for KCS Admin Access Control.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 -skew-x-[20deg] origin-top-right transition-transform duration-1000 group-hover:skew-x-0" />
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-full max-w-md bg-white p-10 md:p-16 relative z-10 border-4 border-accent shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)]"
        >
           <div className="flex flex-col items-center mb-10">
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-4 transform -rotate-12 group hover:rotate-0 transition-transform">
                 <Lock className="text-accent" size={32} />
              </div>
              <h1 className="text-3xl font-black text-primary tracking-tighter uppercase text-center">Admin Command Center</h1>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mt-2">Engineering Backend Login</p>
           </div>

           <form onSubmit={handleLogin} className="space-y-8">
              <div className="space-y-2 relative group-focus-within:">
                 <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Authorized Email</label>
                 <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      className="w-full bg-gray-50 border-2 border-gray-100 py-4 pl-12 pr-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent transition-all"
                      type="email"
                      placeholder="kavincivil2@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Security Password</label>
                 <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      className="w-full bg-gray-50 border-2 border-gray-100 py-4 pl-12 pr-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent transition-all"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                 </div>
              </div>
              
              {loginError && <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.1em] italic pt-2">{loginError}</p>}
              
              <button 
                 type="submit"
                 className="w-full bg-primary text-white py-6 text-sm font-black uppercase tracking-[0.3em] hover:bg-charcoal transition-all shadow-[8px_8px_0px_0px_#FBBF24] relative group overflow-hidden"
              >
                 Authorize Access
                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </button>
           </form>
           
           <div className="mt-12 text-center">
              <p className="text-[8px] font-black uppercase tracking-[0.5em] text-gray-400">Restricted Access | KCS Engineering Standards Apply</p>
           </div>
        </motion.div>

        {/* Floating background geometry */}
        <div className="absolute left-10 top-10 w-20 h-20 border-[1px] border-white/10 opacity-20" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex p-6 md:p-10 relative overflow-hidden">
      <div className="fixed inset-0 bg-blueprint-fine opacity-[0.03] pointer-events-none" />
      
      {/* Dashboard Grid */}
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 relative z-10">
         {/* Sidebar */}
         <div className="bg-primary text-white p-8 md:p-12 flex flex-col justify-between border-4 border-accent shadow-2xl relative">
            <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />
            
            <div className="relative">
               <div className="mb-12">
                  <h1 className="text-4xl font-black tracking-tighter leading-none mb-1">KCS</h1>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-accent">Control Interface</p>
               </div>
               
               <nav className="space-y-6">
                  {[
                    { id: "overview", label: "System Overview", icon: LayoutDashboard },
                    { id: "projects", label: "Project Registry", icon: FileText },
                    { id: "settings", label: "Global Settings", icon: Settings },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={cn(
                        "w-full flex items-center space-x-4 py-3 px-4 text-xs font-black uppercase tracking-widest transition-all text-left",
                        activeTab === item.id 
                          ? "bg-accent text-primary shadow-[6px_6px_0px_0px_#FFF]" 
                          : "text-white/60 hover:text-white"
                      )}
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </button>
                  ))}
               </nav>
            </div>
            
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="mt-20 group flex items-center space-x-3 text-white/40 hover:text-accent font-black uppercase tracking-widest text-[9px] transition-colors"
            >
               <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
               <span>Terminate Session</span>
            </button>
         </div>

         {/* Content Area */}
         <div className="flex flex-col space-y-10">
            {/* Realtime Status HUD */}
            <div className="flex flex-wrap lg:flex-nowrap gap-6">
                {[
                  { label: "Active Nodes", value: projects.length, icon: Ruler },
                  { label: "Total Surveys", value: "351", icon: CheckCircle },
                  { label: "System Health", value: "Optimal", icon: ChevronRight },
                ].map((stat, i) => (
                  <div key={i} className="flex-grow bg-white p-8 border-2 border-gray-100 flex items-center justify-between group grayscale hover:grayscale-0 transition-all">
                     <div>
                        <p className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] mb-2">{stat.label}</p>
                        <h4 className="text-primary font-black text-4xl tracking-tighter">{stat.value}</h4>
                     </div>
                     <div className="w-12 h-12 bg-primary/5 flex items-center justify-center transform group-hover:rotate-[360deg] transition-transform duration-1000">
                        <stat.icon className="text-primary group-hover:text-accent" />
                     </div>
                  </div>
                ))}
            </div>

            {/* Tab Content */}
            <div className="flex-grow bg-white border-2 border-gray-100 relative shadow-xl overflow-hidden min-h-[600px]">
               <div className="absolute inset-0 bg-blueprint opacity-[0.02] pointer-events-none" />
               
               {activeTab === "overview" && (
                 <div className="p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-4xl font-black text-primary uppercase tracking-tighter mb-10 border-b-2 border-gray-100 pb-8 flex items-center">
                       System <span className="text-accent underline ml-2">Overview</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                       <div className="space-y-6">
                          <h3 className="text-xl font-black text-primary uppercase tracking-tighter">Recent Activities</h3>
                          <div className="space-y-4">
                             {[1, 2, 3].map(i => (
                               <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 border-l-4 border-accent">
                                  <div className="w-10 h-10 bg-primary/5 flex items-center justify-center shrink-0">
                                     <Clock size={16} className="text-primary" />
                                  </div>
                                  <div>
                                     <p className="text-xs font-black text-primary uppercase tracking-widest">Project Database Updated</p>
                                     <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">11:0{i} AM | Node Sync Complete</p>
                                  </div>
                               </div>
                             ))}
                          </div>
                       </div>
                       
                       <div className="bg-primary p-10 text-white flex flex-col justify-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-blueprint opacity-10" />
                          <Ruler size={100} className="text-accent absolute -bottom-10 -right-10 opacity-20 rotate-[30deg] group-hover:scale-125 transition-transform duration-1000" />
                          <h4 className="text-white font-black text-2xl uppercase tracking-tighter mb-4">Precision Note</h4>
                          <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">Remember to verify surveying coordinates before committing new project data to the archive.</p>
                          <button onClick={() => setActiveTab("projects")} className="self-start text-[10px] font-black uppercase tracking-[0.3em] text-accent hover:text-white transition-colors">Go to Registry →</button>
                       </div>
                    </div>
                 </div>
               )}

               {activeTab === "projects" && (
                 <div className="p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex justify-between items-center mb-10 border-b-2 border-gray-100 pb-8">
                       <h2 className="text-4xl font-black text-primary uppercase tracking-tighter">
                          Project <span className="text-accent underline">Registry</span>
                       </h2>
                       <button 
                          onClick={() => setShowAddModal(true)}
                          className="bg-primary text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent hover:text-primary transition-all shadow-[6px_6px_0px_0px_#FBBF24]"
                       >
                          Add New Node
                       </button>
                    </div>

                    <div className="overflow-x-auto">
                       <table className="w-full text-left">
                          <thead>
                             <tr className="border-b border-gray-100">
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Registry UID</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Project Title</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Category</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Alignment</th>
                                <th className="px-6 py-4 text-right text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Operations</th>
                             </tr>
                          </thead>
                          <tbody>
                             {projects.map((project, i) => (
                               <tr key={project.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                                  <td className="px-6 py-6 text-[10px] font-black text-gray-300 group-hover:text-primary transition-colors">00{project.id}-KCS</td>
                                  <td className="px-6 py-6">
                                     <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 overflow-hidden bg-gray-100">
                                           <img src={project.image} className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-sm font-black text-primary uppercase tracking-tighter">{project.title}</p>
                                     </div>
                                  </td>
                                  <td className="px-6 py-6">
                                     <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-primary/5 text-primary">{project.category}</span>
                                  </td>
                                  <td className="px-6 py-6 font-bold text-xs text-gray-500 uppercase tracking-widest">{project.location}</td>
                                  <td className="px-6 py-6 text-right space-x-2">
                                     <button className="p-2 text-primary hover:bg-primary hover:text-white transition-all"><Edit size={16} /></button>
                                     <button 
                                        onClick={() => deleteProject(project.id)}
                                        className="p-2 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                                     >
                                        <Trash2 size={16} />
                                     </button>
                                  </td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
               )}

               {activeTab === "settings" && (
                 <div className="p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-4xl font-black text-primary uppercase tracking-tighter mb-10 border-b-2 border-gray-100 pb-8 flex items-center">
                       Global <span className="text-accent underline ml-2">CMS Settings</span>
                    </h2>
                    <div className="max-w-2xl space-y-10">
                       <div className="space-y-6">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">System Contact Phone</label>
                          <input className="w-full bg-gray-50 border-2 border-gray-100 py-4 px-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent" defaultValue="8072524820" />
                       </div>
                       <div className="space-y-6">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">System Email Gateway</label>
                          <input className="w-full bg-gray-50 border-2 border-gray-100 py-4 px-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent" defaultValue="kavincivil2@gmail.com" />
                       </div>
                       <button className="bg-primary text-white px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent hover:text-primary transition-all shadow-[8px_8px_0px_0px_#FBBF24]">Save Configuration</button>
                    </div>
                 </div>
               )}
            </div>
         </div>
      </div>

      {/* Add Modal Placeholder */}
      <AnimatePresence>
         {showAddModal && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[200] flex items-center justify-center p-6"
           >
              <div onClick={() => setShowAddModal(false)} className="absolute inset-0 bg-primary/95 backdrop-blur-md" />
              <motion.div 
                 initial={{ scale: 0.9, y: 50 }}
                 animate={{ scale: 1, y: 0 }}
                 className="bg-white w-full max-w-2xl p-10 md:p-16 border-4 border-accent relative z-10 shadow-3xl"
              >
                  <h3 className="text-3xl font-black text-primary uppercase tracking-tighter mb-10 flex justify-between items-center">
                     Initialize New Node
                     <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-primary transition-colors"><X size={24} /></button>
                  </h3>
                  <div className="space-y-8">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Node Project Title</label>
                        <input className="w-full bg-gray-50 border-2 border-gray-100 py-4 px-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent" placeholder="e.g. Modern Residency Alpha" />
                     </div>
                     <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Category Class</label>
                           <select className="w-full bg-gray-50 border-2 border-gray-100 py-4 px-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent">
                              <option>Surveying</option>
                              <option>Construction</option>
                              <option>Design</option>
                           </select>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Primary Alignment</label>
                           <input className="w-full bg-gray-50 border-2 border-gray-100 py-4 px-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent" placeholder="Location Name" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Visual Asset URL</label>
                        <input className="w-full bg-gray-50 border-2 border-gray-100 py-4 px-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent" placeholder="Image URL (Cloudinary Link)" />
                     </div>
                     <button className="w-full bg-primary text-white py-6 text-sm font-black uppercase tracking-[0.3em] hover:bg-accent transition-all shadow-[8px_8px_0px_0px_#FBBF24]">Commit To Archive</button>
                  </div>
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
}
