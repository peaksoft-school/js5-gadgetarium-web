import { forwardRef } from 'react'

import JoditEditor from 'jodit-react'

const TextEditor = forwardRef(({ onChange, value }, ref) => {
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
})

export default TextEditor
