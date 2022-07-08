import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import close from '../../assets/icons/Group.svg'

const style = {
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
}

function BasicModal({ children, closeModal, showModal }) {
   return (
      <Modal open={showModal}>
         <Box sx={style}>
            <img
               className="close"
               src={close}
               alt="close-img"
               onClick={closeModal}
            />
            {children}
         </Box>
      </Modal>
   )
}

export default BasicModal
