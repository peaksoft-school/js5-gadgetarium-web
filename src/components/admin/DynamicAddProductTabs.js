import { useState } from 'react'

import { Button } from '@mui/material'
import useDynTabs from 'react-dyn-tabs'
import 'react-dyn-tabs/style/react-dyn-tabs.css'
import 'react-dyn-tabs/themes/react-dyn-tabs-basic.min.css'
import styled from 'styled-components'

const PanelComponent = (children) => {
   return children
}

const BasicPanel = (children) => {
   return children
}

const DynamicAddProductTabs = ({ children }) => {
   const [count, setCount] = useState(2)
   const options = {
      tabs: [
         {
            id: '1',
            title: 'Продукт 1',
            panelComponent: BasicPanel(children),
            closable: false,
         },
      ],
      selectedTabID: '1',
      onInit() {
         // don't use setState inside the onInit callback because it leads to an infinite loop.
         console.log('[onInit]')
      },
      onChange() {
         console.log('[onChange]')
      },
      //   onOpen() {
      //      console.log('[onOpen]')
      //   },
      beforeSelect() {
         console.log('[beforeSelect]')
         return true
      },
      onClose() {
         console.log('[onClose]')
      },
   }

   const [Tablist, Panellist, ready] = useDynTabs(options)

   // eslint-disable-next-line no-underscore-dangle
   let _instance

   ready((instance) => {
      _instance = instance
   })

   const actions = {
      openNewTab: () => {
         _instance
            .open({
               title: `Продукт ${count}`,
               lazy: true,
               panelComponent: PanelComponent(children),
            })
            .then(() => {
               setCount((prev) => prev + 1)
               console.log('(new tab is open)')
            })
      },
   }

   return (
      <div id="actions">
         <div>
            <Button type="outlined" onClick={actions.openNewTab}>
               + Добавить продукт
            </Button>
         </div>
         <StyledTablist>
            <Tablist />
            <Panellist />
         </StyledTablist>
      </div>
   )
}

export default DynamicAddProductTabs

const StyledTablist = styled.div`
   margin-top: 20px;

   .rc-dyn-tabs-tablist {
      border: none;
      background-color: transparent;
   }

   .rc-dyn-tabs-tablist.rc-dyn-tabs-ltr
      > .rc-dyn-tabs-tab
      > .rc-dyn-tabs-title {
      direction: rtl;
      border: 1px solid #91969e;
      padding: 12px 8px;
      font-size: 16px;
      color: #91969e;
      margin-right: 8px;
      min-width: 120px;
      border-radius: 6px;
      background: transparent;
      &:hover {
         border: 1px solid #cb11ab;
         color: #cb11ab;
      }
   }

   .rc-dyn-tabs-tablist
      > .rc-dyn-tabs-tab.rc-dyn-tabs-selected
      > .rc-dyn-tabs-title {
      border: 1px solid #cb11ab;
      color: #cb11ab;
   }

   .rc-dyn-tabs-selected {
      &
         .csbdix
         .rc-dyn-tabs-tablist.rc-dyn-tabs-ltr
         > .rc-dyn-tabs-tab
         > .rc-dyn-tabs-close {
         right: 13px;
         color: #cb11ab;
      }
   }

   .rc-dyn-tabs-tablist.rc-dyn-tabs-ltr
      > .rc-dyn-tabs-tab
      > .rc-dyn-tabs-close {
      right: 13px;
   }

   .rc-dyn-tabs-panellist {
      padding: 40px 0;
      position: relative;
   }
`
