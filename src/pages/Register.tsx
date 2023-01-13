import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material"

import { useAppDispatch } from "../hooks/reduxHook"
import { createUser } from "../redux/reducers/userReducer"
import { userPic } from "../types/images"

const Register = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const createNewUser = () => {
        if (password.length < 5) {
            alert("Please enter a valid password")

        } else {
            dispatch(createUser({
                name: name,
                email: email,
                password: password,
                avatar: new URL(userPic)
            }))
            navigate("/login")
        }
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
            <Paper 
                sx={{ marginTop: 5, p: 2 }} 
                component="form"
            >
                <Typography variant="h5" sx={{ marginTop: 3 }} textAlign={"center"}>
                    Create new account
                </Typography>
                <Divider variant="middle" />
                <Box
                    sx={{ display: "flex", flexDirection: "column", marginTop: 2 }}
                >
                    <Typography variant="subtitle2">
                        Name:
                    </Typography>
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        type="name"
                        value={name}
                        placeholder="Enter your name here"
                        variant="outlined"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <Typography
                        variant="subtitle2"
                        sx={{ marginTop: 2 }}
                    >
                        Enter your email address:
                    </Typography>
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        variant="outlined"
                        type="email"
                        value={email}
                        placeholder="Enter a valid email address"
                        autoComplete="on"
                        onChange={(event) => setEmail(event.target.value)} 
                    />
                    <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
                        Enter your password:
                    </Typography>
                    <TextField
                        sx={{ marginTop: 1, minWidth: 300 }}
                        required
                        variant="filled"
                        label="Password"
                        type="password"
                        value={password}
                        autoComplete="new-password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Box>
                <Box
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 5,
                        marginBottom: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        onClick={() => createNewUser()}
                    >
                        Create New Account
                    </Button>
                </Box>
                <Divider variant="middle" />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 2
                }}>
                    <Typography variant="caption">
                        Already have an account?
                    </Typography>
                    <Button
                        sx={{ marginTop: 1 }}
                        variant="contained"
                        onClick={() => navigate("/login")}
                    >
                        Sign in
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default Register