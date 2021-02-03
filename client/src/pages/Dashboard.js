import React from 'react';
// import LogoutButton from '../component/LogoutButton';
import InputProject from '../component/InputProject';
import { useAuth0 } from '@auth0/auth0-react';

function Dashboard(){

    const { user, isAuthenticated } = useAuth0();

    return(

        isAuthenticated && (
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Hello: {user.name}</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <InputProject />
                </div>
              </div>
            </div>
          </div>
        </main>
        )
    )
}

export default Dashboard;