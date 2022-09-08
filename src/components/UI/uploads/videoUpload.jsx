import React, { useState } from 'react'

import styled from 'styled-components'

const VideoUpload = ({ setSource, source }) => {
   //    const { width, height } = props
   const [localFile, setLocalFile] = useState()

   const inputRef = React.useRef()

   const handleFileChange = (event) => {
      const file = event.target.files[0]
      const url = URL.createObjectURL(file)
      setSource(url)
      setLocalFile(file)
   }

   console.log(localFile?.name)

   const localDeleteVideo = () => {
      inputRef.current.value = ''
      setLocalFile('')
      if (source) {
         setSource('')
      }
   }

   const handleChoose = () => {
      inputRef.current.click()
   }

   return (
      <UploadContainer>
         <input
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
            accept=".mov,.mp4"
         />
         <DragDropZoneVideo onClick={handleChoose}>
            <p>
               <span>📼</span> Нажмите или перетащите сюда файл
            </p>
         </DragDropZoneVideo>
         <FileNameWithAction>
            <p>
               <b>Ваш файл:</b> {localFile?.name}
            </p>
            {localFile && <button onClick={localDeleteVideo}>🗑️</button>}
         </FileNameWithAction>
      </UploadContainer>
   )
}

export default VideoUpload

const UploadContainer = styled.div`
   cursor: pointer;
   & input {
      display: none;
   }
`
const DragDropZoneVideo = styled.div`
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
