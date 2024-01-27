"use client";
import React from 'react'
import PersonalDetailModal from '../personal-detail-modal'
import { Icon } from '@/components/atoms/icons'
import { useSearchParams } from 'next/navigation';
import { IEditDetail } from './types';

const EditDetailComponent = ({isOpen, toggle}: IEditDetail) => {


    const search = useSearchParams();
    

    return (
        <>
          {search.get("type") !== "preview" &&  <button className="" onClick={toggle}>
                <Icon.IcPencil />
            </button> }
            <PersonalDetailModal isOpen={isOpen} toggle={toggle} />
        </>
    )
}

export default EditDetailComponent