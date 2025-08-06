import React from 'react'
import { lazy, Suspense } from "react"
import { useRoutes } from "react-router-dom"

const Home = lazy(() => import('./pages/Home'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

const Statistics = lazy(() => import('./pages/SideBar/statistics/Statistics'))
const All = lazy(() => import('./pages/SideBar/statistics/All'))
const TeachersTab = lazy(() => import('./pages/SideBar/statistics/Teachers'))

const Users = lazy(() => import('./pages/SideBar/users/Users'))
const UsersAll = lazy(() => import('./pages/SideBar/users/All'))
const UsersStats = lazy(() => import('./pages/SideBar/users/Statistics'))

const Books = lazy(() => import('./pages/SideBar/Books/Books'))
const BooksAll = lazy(() => import('./pages/SideBar/Books/All'))
const BooksStats = lazy(() => import('./pages/SideBar/Books/Statistics'))

const Extras = lazy(() => import('./pages/SideBar/extras/Extras'))
const ExtrasAll = lazy(() => import('./pages/SideBar/extras/All'))
const ExtrasStats = lazy(() => import('./pages/SideBar/extras/Statistics'))

const TimeTable = lazy(() => import('./pages/SideBar/timeTable/TimeTable'))
const TimeTableAll = lazy(() => import('./pages/SideBar/timeTable/All'))
const TimeTableStats = lazy(() => import('./pages/SideBar/timeTable/Statistics'))

const Teachers = lazy(() => import('./pages/SideBar/teachers/Teachers'))
const TeachersAll = lazy(() => import('./pages/SideBar/teachers/All'))
const TeachersStats = lazy(() => import('./pages/SideBar/teachers/Statistics'))

const StudyQuality = lazy(() => import('./pages/SideBar/studyQuality/StudyQuality'))
const StudyQualityAll = lazy(() => import('./pages/SideBar/studyQuality/All'))
const StudyQualityStats = lazy(() => import('./pages/SideBar/studyQuality/Statistics'))

const RestZones = lazy(() => import('./pages/SideBar/restZones/RestZones'))
const RestZonesAll = lazy(() => import('./pages/SideBar/restZones/All'))
const RestZonesStats = lazy(() => import('./pages/SideBar/restZones/Statistics'))

const ExtraClasses = lazy(() => import('./pages/SideBar/extraClasses/ExtraClasses'))
const ExtraClassesAll = lazy(() => import('./pages/SideBar/extraClasses/All'))
const ExtraClassesStats = lazy(() => import('./pages/SideBar/extraClasses/Statistics'))

const Contact = lazy(() => import('./pages/SideBar/contact/Contact'))
const ContactAll = lazy(() => import('./pages/SideBar/contact/All'))
const ContactStats = lazy(() => import('./pages/SideBar/contact/Statistics'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {
          useRoutes([
            {
              path: "/",
              element: <Home />,
              children: [
                {
                  path: "",
                  element: <Dashboard />,
                  children: [
                    {
                      path: "statistics",
                      element: <Statistics />,
                      children: [
                        { index: true, element: <All /> },
                        { path: "teachers", element: <TeachersTab /> },
                      ]
                    },
                    {
                      path: "users",
                      element: <Users />,
                      children: [
                        { index: true, element: <UsersAll /> },
                        { path: "users_statistics", element: <UsersStats /> },
                      ]
                    },
                    {
                      path: "books",
                      element: <Books />,
                      children: [
                        { index: true, element: <BooksAll /> },
                        { path: "statistics", element: <BooksStats /> },
                      ]
                    },
                    {
                      path: "extras",
                      element: <Extras />,
                      children: [
                        { index: true, element: <ExtrasAll /> },
                        { path: "statistics", element: <ExtrasStats /> },
                      ]
                    },
                    {
                      path: "timeTable",
                      element: <TimeTable />,
                      children: [
                        { index: true, element: <TimeTableAll /> },
                        { path: "statistics", element: <TimeTableStats /> },
                      ]
                    },
                    {
                      path: "teachers",
                      element: <Teachers />,
                      children: [
                        { index: true, element: <TeachersAll /> },
                        { path: "statistics", element: <TeachersStats /> },
                      ]
                    },
                    {
                      path: "studyQuality",
                      element: <StudyQuality />,
                      children: [
                        { index: true, element: <StudyQualityAll /> },
                        { path: "statistics", element: <StudyQualityStats /> },
                      ]
                    },
                    {
                      path: "restZones",
                      element: <RestZones />,
                      children: [
                        { index: true, element: <RestZonesAll /> },
                        { path: "statistics", element: <RestZonesStats /> },
                      ]
                    },
                    {
                      path: "extraClasses",
                      element: <ExtraClasses />,
                      children: [
                        { index: true, element: <ExtraClassesAll /> },
                        { path: "statistics", element: <ExtraClassesStats /> },
                      ]
                    },
                    {
                      path: "contact",
                      element: <Contact />,
                      children: [
                        { index: true, element: <ContactAll /> },
                        { path: "statistics", element: <ContactStats /> },
                      ]
                    }
                  ]
                }
              ]
            }
          ])
        }
      </Suspense>
    </div>
  )
}

export default App
