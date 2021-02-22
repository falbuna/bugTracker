import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


function Users(){

    const { user, isAuthenticated } = useAuth0();

    const [userData, setUserData] = useState([]);

    useEffect(() => {
      loadUsers()
    }, []);

  function loadUsers(){
      API.getUsers()
          .then(res => {
              setUserData(res.data)
          })
          .catch(err => console.log(err));
  }

  console.log(userData)

    return(

        isAuthenticated && (
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Logged in as: {user.email}</h1>
            </div>
            <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                    <div className="bg-blue-50 px-4 py-5 border-b border-gray-200 sm:px-6">
                            <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                                <div className="ml-4 mt-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    All Users
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    All active users in the database
                                </p>
                                </div>
                                <div className="ml-4 mt-4 flex-shrink-0">
                                {/* <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setProjectInput(!projectInput)}>
                                    Create New Project
                                </button> */}
                                </div>
                            </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                    </tr>
                                </thead>
                                { userData.map((user, index) => (
                                    <tbody className="bg-white divide-y divide-gray-200" key={index}>
                                    <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {user.email}
                                    </td>
                                
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link to={"/users/" + user._id}>
                                        <p className="text-indigo-600 hover:text-indigo-900">View Details</p>
                                        </Link>
                                    </td>
                                    
                                    </tr>
                                    </tbody>
                                ))}
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </main>
        )
    )
}

export default Users;