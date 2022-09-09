// import * as React from 'react'
// import { useEffect } from 'react'

// import Button from '@mui/material/Button'
// import Menu from '@mui/material/Menu'
// import MenuItem from '@mui/material/MenuItem'
// import { styled, alpha } from '@mui/material/styles'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router'

// import menu from '../../assets/icons/menu.svg'
// import { getCategories } from '../../store/actions/CatalogActions'
// import { catalogActions } from '../../store/slices/catalogSlice'

// const StyledButton = styled(Button)({
//    backgroundColor: ' #CB11AB',
//    '&:hover': {
//       backgroundColor: '#92107cAB',
//    },
// })

// const StyledMenu = styled((props) => (
//    <Menu
//       elevation={0}
//       anchorOrigin={{
//          vertical: 'bottom',
//          horizontal: 'left',
//       }}
//       transformOrigin={{
//          vertical: 'top',
//          horizontal: 'left',
//       }}
//       {...props}
//    />
// ))(({ theme }) => ({
//    '& .MuiPaper-root': {
//       borderRadius: 6,
//       marginTop: theme.spacing(1),
//       minWidth: '420px',
//       color:
//          theme.palette.mode === 'light'
//             ? 'rgb(55, 65, 81)'
//             : theme.palette.grey[300],
//       boxShadow:
//       '& .MuiMenu-list': {
//          padding: '4px 10px',
//       },
//       '& .MuiMenuItem-root': {
//          borderRadius: '20px',
//          display: 'flex',
//          justifyContent: 'space-between',
//          '& .MuiSvgIcon-root': {
//             fontSize: 18,
//             color: theme.palette.text.secondary,
//             marginRight: theme.spacing(1.5),
//          },
//          '&:active': {
//             backgroundColor: alpha(
//                theme.palette.primary.main,
//                theme.palette.action.selectedOpacity
//             ),
//          },
//          '&:hover': {
//             backgroundColor: '#CB11AB;',
//             color: 'white',
//          },
//       },
//    },
// }))

// const StyledMenus = styled((props) => (
//    <Menu
//       elevation={0}
//       anchorOrigin={{
//          vertical: 'top',
//          horizontal: 'right',
//       }}
//       transformOrigin={{
//          vertical: 'top',
//          horizontal: 'center',
//       }}
//       transitionDuration="auto"
//       {...props}
//    />
// ))(({ theme }) => ({
//    '& .MuiPaper-root': {
//       borderRadius: 6,
//       marginTop: theme.spacing(1),
//       minWidth: '370px',
//       color:
//          theme.palette.mode === 'light'
//             ? 'rgb(55, 65, 81)'
//             : theme.palette.grey[300],
//       boxShadow:
//       '& .MuiMenu-list': {
//          padding: '4px 10px',
//       },
//       '& .MuiMenuItem-root': {
//          borderRadius: '20px',
//          display: 'flex',
//          justifyContent: 'space-between',
//          '& .MuiSvgIcon-root': {
//             fontSize: 18,
//             color: theme.palette.text.secondary,
//             marginRight: theme.spacing(1.5),
//          },
//          '&:active': {
//             backgroundColor: alpha(
//                theme.palette.primary.main,
//                theme.palette.action.selectedOpacity
//             ),
//          },
//          '&:hover': {
//             backgroundColor: '#CB11AB;',
//             color: 'white',
//          },
//       },
//    },
// }))

// export default function CustomizedMenus() {
//    const [anchorEl, setAnchorEl] = React.useState(null)
//    const [show, setShow] = React.useState(null)
//    const [data, setDate] = React.useState()
//    const [subCategories, setSub] = React.useState()
//    const navigate = useNavigate()
//    const open = Boolean(anchorEl)
//    const subOpen = Boolean(show)
//    const dispatch = useDispatch()
//    const handleClick = (event) => {
//       setAnchorEl(event.currentTarget)
//    }
//    const handleClose = () => {
//       setAnchorEl(null)
//    }
//    const closeHandle = () => {
//       setShow(null)
//    }
//    // useEffect(() => {
//    //    dispatch(getCategories(setDate))
//    // }, [])

//    const getSubCategory = (sub) => {
//       setSub(sub)
//       dispatch(catalogActions.getSubCategories(sub))
//    }

//    return (
//       <div>
//          <StyledButton
//             id="demo-customized-button"
//             aria-controls={open ? 'demo-customized-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//             variant="contained"
//             disableElevation
//             onClick={handleClick}
//             startIcon={<img src={menu} alt="icon" />}
//          >
//             Каталог
//          </StyledButton>
//          <StyledMenu
//             id="demo-customized-menu"
//             MenuListProps={{
//                'aria-labelledby': 'demo-customized-button',
//             }}
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//          >
//             {data &&
//                data.map((el) => (
//                   <MenuItem
//                      id="menuItem"
//                      aria-controls={subOpen ? 'menuItems' : undefined}
//                      aria-haspopup="true"
//                      aria-expanded={subOpen ? 'true' : undefined}
//                      onMouseOver={(e) => {
//                         setShow(e.currentTarget)
//                         getSubCategory(el.subCategories)
//                      }}
//                      key={el.id}
//                      disableRipple
//                   >
//                      <div>{el.name}</div>
//                      <p> &rsaquo;</p>
//                   </MenuItem>
//                ))}
//          </StyledMenu>
//          {subCategories && (
//             <StyledMenus
//                id="menuItems"
//                // id="demo-customized-menu"
//                MenuListProps={{
//                   'aria-labelledby': 'menuItem',
//                }}
//                anchorEl={show}
//                open={subOpen}
//                onClose={closeHandle}
//             >
//                {subCategories.map((el) => (
//                   <MenuItem
//                      onClick={() => {
//                         console.log('Item Clicked')
//                         navigate('/')
//                      }}
//                      key={el.id}
//                   >
//                      {el.name}
//                   </MenuItem>
//                ))}
//             </StyledMenus>
//          )}
//       </div>
//    )
// }
