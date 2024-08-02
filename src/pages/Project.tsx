import React from 'react'
import { Landing } from '../components/project/Landing'
import { useParams } from 'react-router-dom'
import Projects from "../data/Projects.json"
export function Project() {
    
    const id = useParams<{ projectId: string }>().projectId;
    if (!id) return null;
    const project = Projects.find(p => p.id === parseInt(id))
    if (!project) return null;
    return (
        <>
            <Landing project={project} />
        </>
    )
}