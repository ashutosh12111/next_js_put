import React from 'react'

const StructureDataComponent = ({ data, key }: any) => {
    return (
        <script
            key={key || "structure-data"}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}

export default StructureDataComponent