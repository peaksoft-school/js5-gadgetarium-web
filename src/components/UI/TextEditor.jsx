import JoditEditor from 'jodit-react'

const TextEditor = ({ onChange, value, ref }) => {
   const config = {
      toolbar: true,
      buttons: ['bold', 'italic', 'underline', 'ul', 'ol'],
      placeholder: '',
   }
   return (
      <JoditEditor
         ref={ref}
         config={config}
         value={value}
         onChange={onChange}
      />
   )
}

export default TextEditor
