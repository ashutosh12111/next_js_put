import React from 'react'
import ShareTwiiterComponent from './share-twiter.component'
import { makeProfileShareUrl } from '@/helpers/utils';
import { useAuthContext } from '@/context/auth-context';
import { useParams } from 'next/navigation';
import { shareProfile } from '@/services/share';
import getTokenClientSide from '@/utils/getTokenClientSide';

const ShareTwitterContainer = ({ text }: any) => {

  const {user} = useAuthContext();
  const {slug} = useParams()

  const handleClick = () => {

    const url = makeProfileShareUrl(user);


    
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text.substring(0, 1000)}`)

    if(slug){
      shareProfile(getTokenClientSide(), {
        from_user: user?.id || null,
        to_user: slug
     })
    }


  }
  return (
    <ShareTwiiterComponent handleClick={handleClick} />
  )
}

export default ShareTwitterContainer