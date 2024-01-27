import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'
import SettingsLayout from '@/app/settings/elements/settings-box'
import React from 'react'

const Layout = ({children}:any) => {
  return (
    <>
     <Header/>
     <main className="main-container pt-52 pb-33">
     {children}
    </main>
    <Footer />
</>
  )
}

export default Layout