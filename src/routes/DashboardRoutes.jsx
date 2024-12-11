
import React from 'react'
import { Route, Routes } from 'react-router'
import Create_Product from '../pages/dashboardPages/Create_Product'
import Create_Category from '../pages/dashboardPages/Create_Category'
import DashboardLayout from '../layout/DashboardLayout'
import HomeDashboard from '../pages/dashboardPages/HomeDashboard'
import Error from '../components/DashBoardComponents/Error'

function DashboardRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayout />} >
                <Route index element={<HomeDashboard />} />
                <Route path="/create-product" element={<Create_Product />} />
                <Route path="/create-category" element={<Create_Category />} />

                {/* error route */}
                <Route path="/*" element={<Error />} />
            </Route>

        </Routes>
    )
}

export default DashboardRoutes