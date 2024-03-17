import React, { useContext, useEffect } from 'react'
import NavbarComponent from './NavbarComponent'
// import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { MyContext } from './ContextProvider'
import Loading from './Loading';
import Sidebar from './Sidebar';
// import { useAuthState } from 'react-firebase-hooks/auth';

// import { onAuthStateChanged } from 'firebase/auth';
// import { app, auth } from '../Firebase/firebase';

export default function Layout() {
  // let { profilePhotoURL, setprofilePhotoURL } = useContext(MyContext)
  const { pending, setPending } = useContext(MyContext);
  const { currentDevice, setCurrentDevice } = useContext(MyContext);
  useEffect(() => {
    console.log("Layout component Updated");
  }, []);

  return (
    <>
      {pending ? (
        <Loading />
      ) : (
        // className={`${currentDevice =='Other' ? 'myPaddingTop' : ''}`}
        <>
          <div className={` bg-body-secondary flex-grow-1 w-100 ${currentDevice =='Other' ? 'myPaddingTop' : ''}`}>
          <NavbarComponent />
            <Outlet />
          </div>
          <Sidebar />

        </>
      )}
    </>
  )
}
