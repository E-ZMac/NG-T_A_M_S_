import React, { memo, useState } from 'react';
import { 
    Box,
    Button,
    Typography,
    Modal,
} from '../lib/ui';



export const ModalTemplate = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [buttonText, setButtonText] = useState<string>('')
  const [titleText, setTitleText] = useState<string>('')
  const [descriptionText, setDescriptionText] = useState<string>('')

  const handleOpenState = () => {
      if(open === false)
      return setOpen(true)

      if(open === true)
      return setOpen(false)
    }

  return (
    <div>
      <Button
        className={'openButton'}
        onClick={handleOpenState}
        >
        {buttonText}
      </Button>
      <Modal
        open={open}
        onClose={handleOpenState}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography 
            className={'titleText'}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            >
            {titleText}
          </Typography>
          <Typography
            className={'descriptionText'}
            id="modal-modal-description"
            sx={{ mt: 2 }}
            >
            {descriptionText}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
