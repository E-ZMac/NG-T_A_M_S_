import React from 'react'

interface ToolProps {
    toolList: Tool[]
    isServicable: ServicableState
}

export const ToolList: React.FC<ToolProps> = ({ toolList, isServicable }) => {

    return (
        <>
            <h1>Welcome</h1>
        </>
    )
}