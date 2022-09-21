import { useEffect, useState } from 'react'

import ImageUploading from 'react-images-uploading'
import styled from 'styled-components'

import { ReactComponent as IconPlus } from '../../assets/icons/CameraPlus.svg'

const ImageUpload = ({ getPhoto, allPhotos, ...props }) => {
   const [photos, setPhotos] = useState(allPhotos)
   // const [showTextAfterInput, setShowTextAfterInput] = useState(true)
   const [closeInputFile, setCloseInputFile] = useState(true)
   const [imageSizeTextError, setImageSizeTextError] = useState(true)
   const maxPhotos = 4
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
      // setShowTextAfterInput(false)
   }
   useEffect(() => {
      setPhotos(allPhotos)
   }, [allPhotos])
   useEffect(() => {
      if (photos?.length === 4) {
         setCloseInputFile(false)
      } else {
         setCloseInputFile(true)
      }
   }, [photos])
   return (
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
                     <ButtonPhotoWrapper
                        style={props}
                        onClick={onImageUpload}
                        {...dragProps}
                     >
                        <IconAndTextContiner>
                           <IconPlus />
                           <p>
                              Нажмите на ссылку, чтобы выбрать фотографии или
                              просто перетащите их сюда
                           </p>
                        </IconAndTextContiner>
                     </ButtonPhotoWrapper>
                     <ErrorText>
                        {imageSizeTextError ||
                           'Размер вашего файла слишком велик'}
                     </ErrorText>
                  </WrapperText>
               )}
            </DivContainerPhotos>
         )}
      </ImageUploading>
   )
}
export default ImageUpload

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
   background: #fff;
   border: 1px solid #cdcdcd;
   border-radius: 4px;
   width: ${(props) => (props.width ? props.width : '398px')};
   height: ${(props) => (props.height ? props.height : '160px')};
   display: flex;
   justify-content: center;
   align-items: center;
`
const IconAndTextContiner = styled.div`
   display: flex;
   gap: 20px;
   cursor: pointer;
   & p {
      width: 400px;
      height: 39px;
      font-size: 80%;
      color: #292929;
      margin-top: -5px;
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
