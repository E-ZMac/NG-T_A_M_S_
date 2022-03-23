import React, { useState } from 'react'
import { AddTool } from './AddTool'


const toolsArray: Array<Tool> = [
    { name: 'init', partNumber: '1', serialNumber: '1', servicable: true }
]

export const ToolManager: React.FC = () => {
    const [tools, setTools] = useState(toolsArray)
    const [inputName, setInputName] = useState('')
    const [inputPN, setInputPN] = useState('')
    const [inputSN, setInputSN] = useState('')

    const newTool: AddTool= input => {
        setTools([...tools, { 
            name: inputName,
            partNumber: inputPN,
            serialNumber: inputSN,
            servicable: true }
        ])
    }

    const isServicable: ServicableState = (selectedTool) => {
        const newTools = tools.map(tool => {
            if (tool === selectedTool) {
                return {...tool, servicable: !tool.servicable}
            }
            return tool
        })
        setTools(newTools)
    }

    return (
        <>
            <AddTool toolList={tools} isServicable={isServicable} />
        </>
    )
}