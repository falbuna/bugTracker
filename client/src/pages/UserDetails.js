import React, { useState, useEffect, useRef } from 'react';
import API from '../utils/API';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function UserDetails(){

    const { user, isAuthenticated } = useAuth0();

    const [userData, setUserData] = useState([]);

    const [profile, setProfile] = useState([]);

    const usernameRef = useRef();
    const roleRef = useRef();

    function handleSaveProfile(id){
        API.createProfile(id, {
            name: usernameRef.current.value,
            role: roleRef.current.value,
            email: userData.email
        })
        .then(function(){
            window.location.reload()
      })}

    const {id} = useParams()
    useEffect(() => {
        API.getUser(id)
            .then(res => setUserData(res.data))
            .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        API.getUser(id)
            .then(res => setProfile(res.data.profile))
            .catch(err => console.log(err))
    }, [id])

    console.log(profile)


    return(
        isAuthenticated && (
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
            <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Logged in as: {user.email}</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
            
            
        {
            profile.length !== 0

            ?

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    User Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {profile[0].name}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {profile[0].email}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Role
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {profile[0].role}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

            :

            <form className="border-solid border-2 rounded-b-lg border-gray-100">
                    <div className="mx-2 flex flex-col">
                    <div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <label htmlFor="project_name" className="block text-sm font-medium text-gray-700">
                                User Name
                                </label>
                                <div className="mt-1">
                                <input type="text" name="user" id="username" className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md" ref={usernameRef}/>
                                </div>
                                </div>
                                <div>
                                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">Status</label>
                                    <select id="role" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" ref={roleRef}>
                                        <option>Admin</option>
                                        <option>Developer</option>
                                        <option>Manager</option>
                                        <option>DemoUser</option>
                                    </select>
                                </div>
                        <div className="my-2">
                            <button onClick={() => handleSaveProfile(userData._id)} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </form>

            }

            </div>            
            </div>
            </div>
            </main>
    )
    )
}

export default UserDetails;