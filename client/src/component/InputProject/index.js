import React, { useRef } from 'react';
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';

function InputProject(props){

    const { user } = useAuth0();

    const titleRef = useRef();
    const descRef = useRef();

    function handleSaveProject(){
      API.saveProject({
          creator: user.email,
          title: titleRef.current.value,
          description: descRef.current.value
      })
      .then(function(){
          window.location.reload()
      })
    }    

    return(

    <form>
        <div className="mx-2 flex flex-col">
        <div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <label htmlFor="project_name" className="block text-sm font-medium text-gray-700">
              Project Name
            </label>
            <div className="mt-1">
              <input type="text" name="project_name" id="project_name" className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md" ref={titleRef}/>
            </div>
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
                </label>
                <div className="mt-1">
                <textarea id="description" name="description" rows="3" className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md" ref={descRef}></textarea>
                </div>
            </div>
            <div className="my-2">
                <button onClick={handleSaveProject} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                </button>
            </div>
            </div>
        </div>
        </div>
    </form>

    )
}

export default InputProject;