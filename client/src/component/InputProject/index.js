import React, { useRef } from 'react';
import API from "../../utils/API";

function InputProject(){
    const assignRef = useRef();
    const titleRef = useRef();
    const descRef = useRef();

    function handleSaveProject(){
      API.saveProject({
          assigned: assignRef.current.value,
          title: titleRef.current.value,
          description: descRef.current.value
      })
    }    


    return(
        
        <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Assigned to</label>
        <div className="mt-1">
            <input className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" ref={assignRef} placeholder="Assigned to" />
        </div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Project Name</label>
        <div className="mt-1">
            <input className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" ref={titleRef} placeholder="Project Name" />
        </div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Project Description</label>
        <div className="mt-1">
            <input className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" ref={descRef} placeholder="you@example.com" />
        </div>
            <button onClick={handleSaveProject} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
            </button>
        </div>
    )
}

export default InputProject;