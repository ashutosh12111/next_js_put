import React from 'react'

import PersonalInfo from '../personal-info'
import MyBiography from '../my-biography'

const MainComponent = () => {
    return (
        <main className="pt-9 mt-61 xl:mt-75">
            <div className="py-24">
                <div className="main-container">
                    <div className="xl:w-[85%] mx-auto">
                        <div className="grid xl:grid-cols-12 gap-5 xl:gap-4">
                            <div className="xl:col-span-8 xxl:col-span-9 order-2 xl:order-1 block">
                                <MyBiography />
                            </div>
                            <div className="xl:col-span-4 xxl:col-span-3 order-1 xl:order-2 xl:pb-70">
                                <PersonalInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainComponent