import React from 'react'
import FeaturedMemberComponent from './featured-member.component'
import { featureMember } from "@/services/homePage"




const FeaturedMemberContainer = async () => {
    const memberList = await featureMember();

    return (
        <FeaturedMemberComponent featureMemberList={memberList} />
    )
}

export default FeaturedMemberContainer