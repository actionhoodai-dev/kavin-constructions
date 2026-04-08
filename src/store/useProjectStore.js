import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_PROJECTS = [];
const INITIAL_GALLERY = [];

export const useProjectStore = create(
  persist(
    (set) => ({
      projects: INITIAL_PROJECTS,
      gallery: INITIAL_GALLERY,
      activeFilter: "All",
      
      setFilter: (category) => set({ activeFilter: category }),
      
      addProject: (project) => set((state) => ({ 
        projects: [project, ...state.projects] 
      })),
      
      deleteProject: (id) => set((state) => ({
        projects: state.projects.filter(p => id !== p.id)
      })),
      
      updateProject: (updatedProject) => set((state) => ({
        projects: state.projects.map(p => p.id === updatedProject.id ? updatedProject : p)
      })),

      addGalleryItem: (item) => set((state) => ({
        gallery: [item, ...state.gallery]
      })),

      deleteGalleryItem: (id) => set((state) => ({
        gallery: state.gallery.filter(i => id !== i.id)
      })),

      updateGalleryItem: (updatedItem) => set((state) => ({
        gallery: state.gallery.map(i => i.id === updatedItem.id ? updatedItem : i)
      }))
    }),
    {
      name: "kavin-store-storage", // name of item in the storage (must be unique)
    }
  )
);
