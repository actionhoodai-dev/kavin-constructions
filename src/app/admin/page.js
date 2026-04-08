"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, LogOut, Plus, Edit, Trash2, Settings, Image as ImageIcon, MapPin, Calendar, Clock, Lock, User, Send, CheckCircle, ChevronRight, Ruler, FileText, X, FolderOpen } from "lucide-react";
import { useProjectStore } from "@/store/useProjectStore";
import { cn } from "@/lib/utils";
import { auth } from "@/lib/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddModal, setShowAddModal] = useState(false);
  const [addMode, setAddMode] = useState("projects"); // "projects" or "gallery"
  const { projects, deleteProject, addProject, gallery, deleteGalleryItem, addGalleryItem } = useProjectStore();

  // Form state
  const [formData, setFormData] = useState({ title: "", category: "Surveying", location: "", image: "", description: "" });

  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
      setLoginError("");
    } catch (error) {
      setLoginError("Invalid credentials for Kavin Admin Access Control.");
    }
  };

  const resetForm = () => {
    setFormData({ title: "", category: "Surveying", location: "", image: "", description: "" });
  };

  const openAddModal = (mode) => {
    setAddMode(mode);
    resetForm();
    setShowAddModal(true);
  };

  const handleAddSubmit = () => {
    if (!formData.title || !formData.image) return;
    const newId = Date.now();

    if (addMode === "projects") {
      addProject({
        id: newId,
        title: formData.title,
        category: formData.category,
        location: formData.location,
        image: formData.image,
        description: formData.description,
        date: new Date().getFullYear().toString(),
      });
    } else {
      addGalleryItem({
        id: newId,
        src: formData.image,
        title: formData.title,
        category: formData.category,
      });
    }

    resetForm();
    setShowAddModal(false);
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
              <div className="space-y-2">
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
              <p className="text-[8px] font-black uppercase tracking-[0.5em] text-gray-400">Restricted Access | Kavin Engineering Standards Apply</p>
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
                  <h1 className="text-4xl font-black tracking-tighter leading-none mb-1">Kavin</h1>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-accent">Control Interface</p>
               </div>
               
               <nav className="space-y-4">
                  {[
                    { id: "overview", label: "System Overview", icon: LayoutDashboard },
                    { id: "projects", label: "Project Registry", icon: FileText },
                    { id: "gallery", label: "Gallery Archive", icon: ImageIcon },
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
                  { label: "Active Projects", value: projects.length, icon: Ruler },
                  { label: "Gallery Items", value: gallery.length, icon: ImageIcon },
                  { label: "System Health", value: "Optimal", icon: CheckCircle },
                ].map((stat, i) => (
                  <div key={i} className="flex-grow bg-white p-8 border-2 border-gray-100 flex items-center justify-between group hover:border-accent transition-all">
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
               
               {/* ===== OVERVIEW TAB ===== */}
               {activeTab === "overview" && (
                 <div className="p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-4xl font-black text-primary uppercase tracking-tighter mb-10 border-b-2 border-gray-100 pb-8 flex items-center">
                       System <span className="text-accent underline ml-2">Overview</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                       <div className="space-y-6">
                          <h3 className="text-xl font-black text-primary uppercase tracking-tighter">Quick Actions</h3>
                          <div className="space-y-4">
                             <button 
                               onClick={() => { setActiveTab("projects"); }}
                               className="w-full flex items-center space-x-4 p-4 bg-gray-50 border-l-4 border-accent hover:bg-accent/10 transition-colors"
                             >
                                <div className="w-10 h-10 bg-primary/5 flex items-center justify-center shrink-0">
                                   <FileText size={16} className="text-primary" />
                                </div>
                                <div className="text-left">
                                   <p className="text-xs font-black text-primary uppercase tracking-widest">Manage Projects</p>
                                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">{projects.length} active projects</p>
                                </div>
                             </button>
                             <button 
                               onClick={() => { setActiveTab("gallery"); }}
                               className="w-full flex items-center space-x-4 p-4 bg-gray-50 border-l-4 border-primary hover:bg-primary/5 transition-colors"
                             >
                                <div className="w-10 h-10 bg-primary/5 flex items-center justify-center shrink-0">
                                   <ImageIcon size={16} className="text-primary" />
                                </div>
                                <div className="text-left">
                                   <p className="text-xs font-black text-primary uppercase tracking-widest">Manage Gallery</p>
                                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">{gallery.length} gallery items</p>
                                </div>
                             </button>
                          </div>
                       </div>
                       
                       <div className="bg-primary p-10 text-white flex flex-col justify-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-blueprint opacity-10" />
                          <Ruler size={100} className="text-accent absolute -bottom-10 -right-10 opacity-20 rotate-[30deg] group-hover:scale-125 transition-transform duration-1000" />
                          <h4 className="text-white font-black text-2xl uppercase tracking-tighter mb-4">Admin Note</h4>
                          <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">Use the Project Registry to add your completed projects, and the Gallery Archive to upload photos. Data is stored locally in your browser session.</p>
                          <button onClick={() => openAddModal("projects")} className="self-start text-[10px] font-black uppercase tracking-[0.3em] text-accent hover:text-white transition-colors flex items-center space-x-2">
                            <Plus size={14} /> <span>Add New Project</span>
                          </button>
                       </div>
                    </div>
                 </div>
               )}

               {/* ===== PROJECTS TAB ===== */}
               {activeTab === "projects" && (
                 <div className="p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex justify-between items-center mb-10 border-b-2 border-gray-100 pb-8">
                       <h2 className="text-4xl font-black text-primary uppercase tracking-tighter">
                          Project <span className="text-accent underline">Registry</span>
                       </h2>
                       <button 
                          onClick={() => openAddModal("projects")}
                          className="bg-primary text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent hover:text-primary transition-all shadow-[6px_6px_0px_0px_#FBBF24] flex items-center space-x-2"
                       >
                          <Plus size={14} /> <span>Add Project</span>
                       </button>
                    </div>

                    {projects.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="w-24 h-24 bg-gray-50 flex items-center justify-center mb-8 border-2 border-dashed border-gray-200">
                          <FolderOpen size={40} className="text-gray-300" />
                        </div>
                        <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-3">No Projects Yet</h3>
                        <p className="text-gray-400 text-sm font-medium max-w-md mb-8">Start building your portfolio by adding your completed construction and surveying projects.</p>
                        <button 
                          onClick={() => openAddModal("projects")}
                          className="bg-accent text-primary px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all shadow-[6px_6px_0px_0px_#0A1F44] flex items-center space-x-2"
                        >
                          <Plus size={14} /> <span>Add Your First Project</span>
                        </button>
                      </div>
                    ) : (
                    <div className="overflow-x-auto">
                       <table className="w-full text-left">
                          <thead>
                             <tr className="border-b border-gray-100">
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary">UID</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Project Title</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Category</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Location</th>
                                <th className="px-6 py-4 text-right text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Actions</th>
                             </tr>
                          </thead>
                          <tbody>
                             {projects.map((project) => (
                               <tr key={project.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                                  <td className="px-6 py-6 text-[10px] font-black text-gray-300 group-hover:text-primary transition-colors">{String(project.id).slice(-4)}</td>
                                  <td className="px-6 py-6">
                                     <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 overflow-hidden bg-gray-100 shrink-0">
                                           <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-sm font-black text-primary uppercase tracking-tighter">{project.title}</p>
                                     </div>
                                  </td>
                                  <td className="px-6 py-6">
                                     <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-primary/5 text-primary">{project.category}</span>
                                  </td>
                                  <td className="px-6 py-6 font-bold text-xs text-gray-500 uppercase tracking-widest">{project.location}</td>
                                  <td className="px-6 py-6 text-right">
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
                    )}
                 </div>
               )}

               {/* ===== GALLERY TAB ===== */}
               {activeTab === "gallery" && (
                 <div className="p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex justify-between items-center mb-10 border-b-2 border-gray-100 pb-8">
                       <h2 className="text-4xl font-black text-primary uppercase tracking-tighter">
                          Gallery <span className="text-accent underline">Archive</span>
                       </h2>
                       <button 
                          onClick={() => openAddModal("gallery")}
                          className="bg-primary text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent hover:text-primary transition-all shadow-[6px_6px_0px_0px_#FBBF24] flex items-center space-x-2"
                       >
                          <Plus size={14} /> <span>Add Image</span>
                       </button>
                    </div>

                    {gallery.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="w-24 h-24 bg-gray-50 flex items-center justify-center mb-8 border-2 border-dashed border-gray-200">
                          <ImageIcon size={40} className="text-gray-300" />
                        </div>
                        <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-3">Gallery Is Empty</h3>
                        <p className="text-gray-400 text-sm font-medium max-w-md mb-8">Upload your construction site photos, survey captures, and design renders to build your visual portfolio.</p>
                        <button 
                          onClick={() => openAddModal("gallery")}
                          className="bg-accent text-primary px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all shadow-[6px_6px_0px_0px_#0A1F44] flex items-center space-x-2"
                        >
                          <Plus size={14} /> <span>Add First Image</span>
                        </button>
                      </div>
                    ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                       {gallery.map((item) => (
                         <div key={item.id} className="group relative aspect-square overflow-hidden border-2 border-gray-100 hover:border-accent transition-colors">
                            <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                               <p className="text-white text-xs font-black uppercase tracking-widest text-center mb-2">{item.title}</p>
                               <span className="text-accent text-[9px] font-black uppercase tracking-[0.3em] mb-4">{item.category}</span>
                               <button 
                                 onClick={() => deleteGalleryItem(item.id)}
                                 className="p-2 bg-red-500 text-white hover:bg-red-600 transition-colors"
                               >
                                 <Trash2 size={16} />
                               </button>
                            </div>
                         </div>
                       ))}
                    </div>
                    )}
                 </div>
               )}

               {/* ===== SETTINGS TAB ===== */}
               {activeTab === "settings" && (
                 <div className="p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="text-4xl font-black text-primary uppercase tracking-tighter mb-10 border-b-2 border-gray-100 pb-8 flex items-center">
                       Global <span className="text-accent underline ml-2">CMS Settings</span>
                    </h2>
                    <div className="max-w-2xl space-y-10">
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">System Contact Phone</label>
                          <input className="w-full bg-gray-50 border-2 border-gray-100 py-4 px-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent" defaultValue="8072524820" />
                       </div>
                       <div className="space-y-3">
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

      {/* ===== ADD MODAL ===== */}
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
                 className="bg-white w-full max-w-2xl p-10 md:p-16 border-4 border-accent relative z-10 shadow-3xl max-h-[90vh] overflow-y-auto"
              >
                  <h3 className="text-3xl font-black text-primary uppercase tracking-tighter mb-10 flex justify-between items-center">
                     {addMode === "projects" ? "Add New Project" : "Add Gallery Image"}
                     <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-primary transition-colors"><X size={24} /></button>
                  </h3>
                  <div className="space-y-8">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Title</label>
                        <input 
                          className="w-full bg-gray-50 border-2 border-gray-100 py-4 px-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent" 
                          placeholder={addMode === "projects" ? "e.g. Modern Residency Alpha" : "e.g. Site Foundation Work"}
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                        />
                     </div>
                     <div className={cn("grid gap-8", addMode === "projects" ? "grid-cols-2" : "grid-cols-1")}>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Category</label>
                           <select 
                             className="w-full bg-gray-50 border-2 border-gray-100 py-4 px-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent"
                             value={formData.category}
                             onChange={(e) => setFormData({...formData, category: e.target.value})}
                           >
                              <option>Surveying</option>
                              <option>Construction</option>
                              <option>Design</option>
                              <option>Planning</option>
                              <option>Survey</option>
                           </select>
                        </div>
                        {addMode === "projects" && (
                          <div className="space-y-2">
                             <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Location</label>
                             <input 
                               className="w-full bg-gray-50 border-2 border-gray-100 py-4 px-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent" 
                               placeholder="Location Name"
                               value={formData.location}
                               onChange={(e) => setFormData({...formData, location: e.target.value})}
                             />
                          </div>
                        )}
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Upload Image</label>
                        <input 
                          type="file"
                          accept="image/*"
                          className="w-full bg-gray-50 border-2 border-gray-100 py-3 px-4 font-bold text-sm tracking-widest focus:outline-none focus:border-accent file:mr-4 file:py-2 file:px-4 file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-widest file:bg-primary file:text-white hover:file:bg-accent hover:file:text-primary cursor-pointer transition-all" 
                          onChange={(e) => {
                             const file = e.target.files?.[0];
                             if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                   setFormData({...formData, image: reader.result});
                                };
                                reader.readAsDataURL(file);
                             }
                          }}
                        />
                     </div>
                     {addMode === "projects" && (
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Description</label>
                          <textarea 
                            className="w-full bg-gray-50 border-2 border-gray-100 py-4 px-6 font-bold text-sm tracking-widest focus:outline-none focus:border-accent resize-none h-24" 
                            placeholder="Brief project description..."
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                          />
                       </div>
                     )}

                     {/* Image Preview */}
                     {formData.image && (
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Preview</label>
                          <div className="aspect-video bg-gray-50 border-2 border-dashed border-gray-200 overflow-hidden">
                             <img src={formData.image} alt="Preview" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                          </div>
                       </div>
                     )}

                     <button 
                       onClick={handleAddSubmit}
                       disabled={!formData.title || !formData.image}
                       className={cn(
                         "w-full py-6 text-sm font-black uppercase tracking-[0.3em] transition-all shadow-[8px_8px_0px_0px_#FBBF24]",
                         !formData.title || !formData.image
                           ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                           : "bg-primary text-white hover:bg-accent hover:text-primary"
                       )}
                     >
                       {addMode === "projects" ? "Commit To Registry" : "Add To Gallery"}
                     </button>
                  </div>
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
}
