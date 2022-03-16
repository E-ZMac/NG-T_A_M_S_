type Tool = {
    id: number
    name: string
    partNumber: string
    serialNumber: string
    servicable: boolean
}

type AddTool = (addToolForm: Tool) => void