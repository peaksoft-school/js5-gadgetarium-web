import DatePicker from '../../../UI/DatePicker'

const TwiceDatePickers = ({ start, finish, onStartChange, onFinishChange }) => {
   const onFirstChange = (newValue) => {
      onStartChange(newValue)
   }

   const onSecondChange = (newValue) => {
      onFinishChange(newValue)
   }
   return (
      <>
         <DatePicker
            value={start}
            onChange={onFirstChange}
            width="139px"
            height="35px"
            placeholder="От"
         />
         <DatePicker
            value={finish}
            onChange={onSecondChange}
            width="139px"
            height="35px"
            placeholder="До"
         />
      </>
   )
}

export default TwiceDatePickers
