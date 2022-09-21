import { useEffect, useState } from 'react'

import ImageUploading from 'react-images-uploading'
import styled from 'styled-components'

import { ReactComponent as IconPlus } from '../../../assets/icons/Photo.svg'

const ImageUpload = ({ getPhoto, allPhotos, ...props }) => {
   const [photos, setPhotos] = useState(allPhotos)
   const [showTextAfterInput, setShowTextAfterInput] = useState(true)
   const [closeInputFile, setCloseInputFile] = useState(true)
   const [imageSizeTextError, setImageSizeTextError] = useState(true)
   const maxPhotos = 10

   const getAllPhotoAndSend = (getphotofile) => getPhoto(getphotofile)

   const onChange = (imageList) => {
      // eslint-disable-next-line array-callback-return, consistent-return
      const errorImageText = imageList?.find((item) => {
         if (item.file.size > 1000000) {
            setImageSizeTextError(false)
            return item
         }
      })
      if (errorImageText) return
      setPhotos(imageList)
      getAllPhotoAndSend(imageList)
      setImageSizeTextError(true)
      setShowTextAfterInput(false)
   }
   useEffect(() => {
      setPhotos(allPhotos)
   }, [allPhotos])
   useEffect(() => {
      if (photos.length === 0) {
         setShowTextAfterInput(true)
      }
      if (photos.length === 10) {
         setCloseInputFile(false)
      } else {
         setCloseInputFile(true)
      }
   }, [photos])

   return (
      <>
         <ImageUploading
            multiple
            value={photos}
            onChange={onChange}
            maxNumber={maxPhotos}
            dataURLKey="data_url"
         >
            {({
               imageList,
               onImageUpload,
               onImageUpdate,
               onImageRemove,
               dragProps,
            }) => (
               // write your building UI
               <DivContainerPhotos>
                  {imageList.map((image, index) => (
                     // eslint-disable-next-line react/no-array-index-key
                     <DivImgButton key={index}>
                        <ImgPhoto src={image.data_url} alt="#" />
                        <HelperButtons>
                           <RepeatButton onClick={() => onImageUpdate(index)}>
                              ✏️
                           </RepeatButton>
                           <DeleteButton onClick={() => onImageRemove(index)}>
                              🗑️
                           </DeleteButton>
                        </HelperButtons>
                     </DivImgButton>
                  ))}
                  {closeInputFile && (
                     <WrapperText>
                        <ButtonPhotoWrapper style={props}>
                           <IconAndTextContiner>
                              <IconPlus />
                              <p>Нажмите или перетащите сюда файл</p>
                              <ul>
                                 <li>Минимальное разрешение - 450x600</li>
                                 <li>Максимальное количество - 10 фото</li>
                              </ul>
                           </IconAndTextContiner>
                           <ButtonPhoto
                              onClick={onImageUpload}
                              {...dragProps}
                           />
                        </ButtonPhotoWrapper>
                        <ErrorText>
                           {imageSizeTextError ||
                              '⚠️ Размер вашего файла слишком велик'}
                        </ErrorText>
                     </WrapperText>
                  )}
               </DivContainerPhotos>
            )}
         </ImageUploading>
         {showTextAfterInput && (
            <DivTextAfterInput>
               <P3>💡 Нажмите на поле выше</P3>
               <P4>Вы можете добавить не больше 10 фото</P4>
            </DivTextAfterInput>
         )}
      </>
   )
}

export default ImageUpload

const DivTextAfterInput = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
`

const P3 = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   color: #cb11ab;
   margin: 4px;
`
const P4 = styled.p`
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #828282;
   margin: 4px;
`
const DivContainerPhotos = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 0fr);
   grid-template-rows: 1fr;
   grid-column-gap: 15px;
`
const DivImgButton = styled.div`
   max-width: 200px;
`
const ButtonPhotoWrapper = styled.div`
   background: #d2d4d8;
   border: 1px dashed #292929;
   border-radius: 4px;
   width: ${(props) => (props.width ? props.width : '398px')};
   height: ${(props) => (props.height ? props.height : '160px')};
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
`

const IconAndTextContiner = styled.div`
   position: absolute;
   & svg {
      margin-left: 41%;
   }
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

const ErrorText = styled.p`
   margin-top: 20px;
   color: red;
   display: flex;
   justify-content: center;
`
const WrapperText = styled.div`
   display: flex;
   flex-direction: column;
`
const ButtonPhoto = styled.label`
   display: block;
   background-position: center;
   width: 100%;
   height: 100%;
   z-index: 0;
   background-repeat: no-repeat;
   cursor: pointer;
`
const ImgPhoto = styled.img`
   height: 160px;
   object-fit: contain;
   margin-right: 10px;
   width: 200px;
`
const HelperButtons = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: center;
   z-index: 1;
   margin-right: 10px;
   bottom: 0;
`
const DeleteButton = styled.button`
   width: 30px;
   height: 30px;
   border: none;
   fill: white;
   background-color: transparent;
   background-repeat: no-repeat;
   background-position: 50% 50%;
   cursor: pointer;
`
const RepeatButton = styled.button`
   background-position: 50% 50%;
   background-repeat: no-repeat;
   background-color: transparent;
   width: 30px;
   border: none;
   height: 30px;
   cursor: pointer;
`
