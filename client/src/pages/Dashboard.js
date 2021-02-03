import React from 'react';
// import LogoutButton from '../component/LogoutButton';
// import InputProject from '../component/InputProject';
import { useAuth0 } from '@auth0/auth0-react';

function Dashboard(){

    const { user, isAuthenticated } = useAuth0();

    return(

        isAuthenticated && (
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Hello: {user.given_name}</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {user.email}
                    </h3>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                      <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Total Subscribers
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-gray-900">
                            71,897
                          </dd>
                        </div>
                      </div>

                      <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Avg. Open Rate
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-gray-900">
                            58.16%
                          </dd>
                        </div>
                      </div>

                      <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Avg. Click Rate
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-gray-900">
                            24.57%
                          </dd>
                        </div>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        )
    )
}

export default Dashboard;