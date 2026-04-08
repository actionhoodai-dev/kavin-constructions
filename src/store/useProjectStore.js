import { create } from "zustand";

const INITIAL_PROJECTS = [
  { id: 1, title: "Modern Residential Villa", location: "Periyar Nagar, Erode", date: "2023", category: "Construction", description: "A luxury 4BHK residential villa integrating modern architecture with sustainable materials. Precise structural execution ensuring long-term durability.", image: "/images/blueprint_sketch.png" },
  { id: 2, title: "Commercial Office Complex", location: "Gandhiji Rd, Erode", date: "2024", category: "Construction", description: "High-density commercial workspace designed for maximum utility and structural health. Modern facade and ergonomic interior layouts.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" },
  { id: 3, title: "Topographic Land Survey Site-A", location: "Veerappan Chatram", date: "2023", category: "Surveying", description: "Detailed topographic mapping for a large-scale industrial layout, providing millimeter accuracy for terrain analysis and development.", image: "/images/surveying_action.png" },
  { id: 4, title: "3D Elevation Elite House", location: "Gobichettipalayam", date: "2023", category: "Design", description: "Photorealistic 3D visualization and architectural elevation design for a contemporary private residence, focusing on geometric symmetry.", image: "https://images.unsplash.com/photo-1600585154340-be6191bcbe10?auto=format&fit=crop&q=80&w=1200" },
  { id: 5, title: "Boundary Survey B-9", location: "Sathy Road, Erode", date: "2024", category: "Surveying", description: "Legal boundary verification and site measurement for a commercial development zone, resolving complex alignment issues with precision.", image: "/images/hero_instrument.png" },
  { id: 6, title: "Industrial Layout Plan", location: "Perundurai SIPCOT", date: "2024", category: "Planning", description: "Comprehensive master planning for an industrial expansion project, optimizing layout for logistical efficiency and regulatory compliance.", image: "https://images.unsplash.com/photo-1590674899484-d5640e52263d?auto=format&fit=crop&q=80&w=1200" },
  { id: 7, title: "Vastu Integrated Residency", location: "Bhavani", date: "2023", category: "Design", description: "Residential floor planning and elevation integrating ancient Vastu Shastra with modern architectural standards.", image: "/images/blueprint_sketch.png" },
  { id: 8, title: "Road Alignment Survey", location: "Erode - Karur Highway", date: "2024", category: "Surveying", description: "Highway expansion surveying and road alignment mapping focusing on elevation levels and structural safety parameters.", image: "/images/surveying_action.png" },

];

export const useProjectStore = create((set) => ({
  projects: INITIAL_PROJECTS,
  activeFilter: "All",
  
  setFilter: (category) => set({ activeFilter: category }),
  
  addProject: (project) => set((state) => ({ 
    projects: [project, ...state.projects] 
  })),
  
  deleteProject: (id) => set((state) => ({
    projects: state.projects.filter(p => p.id !== id)
  })),
  
  updateProject: (updatedProject) => set((state) => ({
    projects: state.projects.map(p => p.id === updatedProject.id ? updatedProject : p)
  }))
}));
