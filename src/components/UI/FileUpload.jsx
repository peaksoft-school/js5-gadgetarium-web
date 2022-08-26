import { useRef, useState } from 'react'

// import axios from 'axios'
import styled from 'styled-components'

import { ReactComponent as IconPlus } from '../../assets/icons/imagePicker.svg'
// import store from '../../store'
// import { fileUpload } from '../../services/productServices'

const FileUpload = ({ onChange }) => {
   const filesRef = useRef()
   const [icon, setIcon] = useState()

   // const iconHandleChange = () => {
   //    if (!filesRef.current.files[0]) {
   //       return
   //    }
   //    const name = URL.createObjectURL(filesRef.current.files[0])
   //    setIcon(name)
   //    onChange(filesRef.current.files[0])
   // }

   console.log(icon)
   const iconHandleChange = () => {
      if (!filesRef.current.files[0]) {
         return
      }
      const name = URL.createObjectURL(filesRef.current.files[0])
      setIcon(name)
      onChange(filesRef.current.files[0])
      //    if (!event.current?.files[0]) {
      //       return
      //    }
      //    // const name = URL.createObjectURL(event.current.files[0])
      //    setFiles([...files], event.current.files[0])
      // }
      // const uploadHandler = (event) => {
      //    const file = event.target.files
      //    file.isUploading = true
      //    setFiles([...files], file)

      // const formData = new FormData()

      // formData.append('file', file)

      // const {
      //    user: { jwt },
      // } = store.getState().auth

      // // fetch(
      // //    'http://gadgetarium-env.eba-edpzzr3j.eu-
      /// central-1.elasticbeanstalk.com/api/file/upload',
      // //    {
      // //       method: 'POST',
      // //       body: formData,
      // //       headers: {
      // //          Authorization: `Bearer ${jwt}`,
      // //       },
      // //    }
      // // )
      // //    .then((response) => response.json())
      // //    .then((result) => {
      // //       console.log('Success:', result)
      // //    })
      // //    .catch((error) => {
      // //       console.error('Error:', error)
      // //    })

      // axios
      //    .post(
      //       'http://gadgetarium-env.eba-edpzzr3j.eu-cent
      // ral-1.elasticbeanstalk.com/api/file/upload',
      //       formData,
      //       {
      //          'Content-Type': 'multipart/form-data',
      //          headers: {
      //             authorization: `Bearer ${jwt}`,
      //          },
      //       }
      //    )
      //    .then((res) => {
      //       console.log(res)
      //    })
      //    .catch((err) => {
      //       console.error(err)
      //       // removeFile(file.name)
      //    })
   }
   return (
      <FileCard>
         <FileInput>
            <input
               type="file"
               onChange={iconHandleChange}
               ref={filesRef}
               accept="image/jpeg,image/png,image/gif"
            />
            <button>
               <IconPlus />
            </button>
         </FileInput>
         <p>Нажмите или перетащите сюда файл</p>
         <ul>
            <li>Минимальное разрешение - 450x600</li>
            <li>максимальное количество - 10 фото</li>
         </ul>
      </FileCard>
   )
}

export default FileUpload

const FileCard = styled.div`
   background: rgba(210, 212, 216, 0.5);
   border: 1px dashed #292929;
   border-radius: 4px;
   padding: 25px 75px;
   max-width: 396px;
   max-height: 168px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   & p {
      font-size: 12px;
      color: #292929;
   }

   & ul {
      font-size: 12px;
      margin-top: 10px;
      color: #292929;
   }
`

const FileInput = styled.div`
   position: relative;
   margin-bottom: 1rem;

   & input {
      position: relative;
      max-width: 200px;
      height: 46px;
      z-index: 2;
      cursor: pointer;
      opacity: 0;
   }

   & button {
      border: none;
      z-index: 1;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: transparent;
      height: 100%;
   }
`
