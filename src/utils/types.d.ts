type Tool = {
    name: string
    partNumber: string
    serialNumber: string
    servicable: boolean
}

type Modal = {
    text: string
    button: SubmitEvent
    status: boolean
}

type ModalState = (selectedmodal: Modal) => void

type ServicableState = (selectedTool: Tool) => void

type AddTool = (addToolForm: Tool) => void