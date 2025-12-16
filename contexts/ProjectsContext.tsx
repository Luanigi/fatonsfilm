"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface ProjectsContextType {
  isExpanded: boolean
  handleExpand: (e?: React.MouseEvent) => void
  handleClose: () => void
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined)

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
    }
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isExpanded])

  return (
    <ProjectsContext.Provider value={{ isExpanded, handleExpand, handleClose }}>
      {children}
    </ProjectsContext.Provider>
  )
}

export function useProjects() {
  const context = useContext(ProjectsContext)
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectsProvider")
  }
  return context
}
