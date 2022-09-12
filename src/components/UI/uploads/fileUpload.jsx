import { useState, useRef } from 'react'

import styled from 'styled-components'

export const FileUpload = ({ setPdfFile, pdfFile }) => {
   const [localFile, setLocalFile] = useState()
   const [errorMessage, setErrorMessage] = useState('')
   const inputRef = useRef()
   const fileType = ['application/pdf']
   const handlePdfFileChange = (event) => {
      const file = event.target.files[0]
      if (file.size < 1000000) {
         setPdfFile(file)
         setLocalFile(file)
         setErrorMessage('')
      } else {
         setErrorMessage('Ваш файл превышает 1МБ, выберите другой')
      }
   }

   const localDeleteVideo = () => {
      inputRef.current.value = ''
      setLocalFile('')
      if (pdfFile) {
         setPdfFile('')
      }
   }

   const handleChoose = () => {
      inputRef.current.click()
   }

   return (
      <UploadContainer>
         <input
            type="file"
            ref={inputRef}
            className="form-control"
            required
            accept={fileType}
            onChange={handlePdfFileChange}
         />
         <DragDropZoneFile onClick={handleChoose}>
            <p>
               <span>📄</span> Нажмите или перетащите сюда файл
            </p>
         </DragDropZoneFile>
         <FileNameWithAction>
            <p>
               <b>Ваш файл:</b> {localFile?.name}
            </p>
            {localFile && <button onClick={localDeleteVideo}>🗑️</button>}
         </FileNameWithAction>
         {errorMessage && <ErrorMessage>❌{errorMessage}</ErrorMessage>}
      </UploadContainer>
   )
}

export default FileUpload

const UploadContainer = styled.div`
   cursor: pointer;
   & input {
      display: none;
   }
`
const DragDropZoneFile = styled.div`
   width: 396px;
   height: 60px;
   border: 1px dashed #292929;
   border-radius: 4px;
   background: #d2d4d880;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 14px;
   color: #292929;
   & span {
      font-size: 18px;
   }
`

const FileNameWithAction = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 10px;
   & button {
      border: none;
      cursor: pointer;
   }
`
const ErrorMessage = styled.p`
   color: red;
   font-size: 18px;
   font-weight: 500;
   margin-top: 10px;
   white-space: nowrap;
`
