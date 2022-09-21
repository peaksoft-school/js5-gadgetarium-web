import { forwardRef, useMemo } from 'react'

import JoditEditor from 'jodit-react'

const TextEditor = forwardRef(({ onChange, value }, ref) => {
   const config = useMemo(
      () => ({
         buttons: ['bold', 'italic', 'underline', 'ul', 'ol'],
         placeholder: 'Введите описание о товаре',
         height: '348px',
         toolbarAdaptive: false,
      }),
      []
   )
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
