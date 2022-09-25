import { RingLoader } from 'react-spinners'

export const Loader = () => {
   const override = {
      display: 'block',
      height: '100vh',
      margin: '150px auto 0 auto',
   }
   return (
      <RingLoader
         color="#cb11ab"
         cssOverride={override}
         speedMultiplier={1.2}
         size={120}
      />
   )
}
