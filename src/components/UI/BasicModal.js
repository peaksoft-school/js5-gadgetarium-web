import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import closeIcon from '../../assets/icons/Group.svg'

function BasicModal({ children, open, onClose }) {
   return (
      <Modal open={open} onClose={onClose}>
         <ModalBox>
            <img
               className="close"
               src={closeIcon}
               alt="close-img"
               onClick={onClose}
            />
            <div>{children}</div>
         </ModalBox>
      </Modal>
   )
}

export default BasicModal

const ModalBox = styled(Box)({
   position: 'absolute',
   float: 'left',
   left: '50%',
   top: '50%',
   transform: 'translate(-50%, -50%)',
   padding: '60px',
   background: '#FFFFFF',
   boxShadow: '0px 10px 30px rgba(133, 143, 164, 0.1)',
   borderRadius: '4px',
   '& .close': {
      width: '16px',
      position: 'absolute',
      top: '20px',
      right: '20px',
      cursor: 'pointer',
   },
})
