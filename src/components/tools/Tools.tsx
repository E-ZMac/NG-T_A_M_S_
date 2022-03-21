import { ToolList } from './ToolList'
import React, { useState } from 'react'
import { 
    Button,
 } from '@mui/material'

const toolsArray: Array<Tool> = [
    { name: 'init', partNumber: '1', serialNumber: '1', servicable: true }
]

export const Tools: React.FC = () => {
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
            <ToolList toolList={tools} isServicable={isServicable}/>
            <Button variant="contained">New Tool</Button>
        </>
    )
}