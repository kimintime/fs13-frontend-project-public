import { useState } from "react"
import {
    Avatar,
    Box,
    Button,
    IconButton,
    InputAdornment,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material"

import EditIcon from "@mui/icons-material/Edit"

import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { logoutUser, updateUser } from "../redux/reducers/userReducer"
import { User } from "../types/user"
import { Visibility, VisibilityOff } from "@mui/icons-material"

const Profile = () => {
    const user = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [change, setChange] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleChange = () => {
        setChange(!change)
        setName(user.currentUser.name)
        setEmail(user.currentUser.email)
        setPassword(user.currentUser.password)
    }

    const editUser = () => {

        const newUser: User = {
            ...user.currentUser
        }

        newUser.name = name
        newUser.email = email
        newUser.password = password

        dispatch(updateUser(newUser))

        setChange(false)
    }

    const userLogout = () => {
        dispatch(logoutUser())
    }
    
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 1,
            }}
        >
            <Avatar
                alt={user.currentUser.name}
                src={user.currentUser.avatar}
                sx={{ width: 75, height: 75 }}
            />
            <Typography variant="subtitle2">{user.currentUser.name}</Typography>
            <Typography variant="subtitle1">{user.currentUser.role}</Typography>

            <Paper
                sx={{ marginTop: 5, p: 2 }}
                component="form"
                onSubmit={editUser}
            >
                <TableContainer>
                    <Table>
                        <TableHead />
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Name:</Typography>
                                </TableCell>
                                <TableCell>
                                    {change ?
                                        <TextField
                                            variant="standard"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        /> : user.currentUser.name}
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        color={change ? "secondary" : "primary"}
                                        onClick={handleChange}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Email:</Typography>
                                </TableCell>
                                <TableCell>
                                    {change ?
                                        <TextField
                                            variant="standard"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        /> : user.currentUser.email}
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        color={change ? "secondary" : "primary"}
                                        onClick={handleChange}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle2">Password:</Typography>
                                </TableCell>
                                <TableCell>
                                    {change ?
                                        <TextField
                                            variant="standard"
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            InputProps={{ endAdornment:
                                                <InputAdornment position="end">
                                                  <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                  >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                  </IconButton>
                                                </InputAdornment>
                                              }}
                                            
                                        /> : "************"}
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        color={change ? "secondary" : "primary"}
                                        onClick={handleChange}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </Paper>
            <Button onClick={editUser}>Update Profile</Button>
            <Button
                variant="contained"
                color="error"
                sx={{ marginTop: 5 }}
                onClick={userLogout}
            >
                Logout
            </Button>
        </Box>
    )
}

export default Profile