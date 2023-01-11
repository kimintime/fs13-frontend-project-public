import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TextField, Typography } from "@mui/material"

import { useAppDispatch, useAppSelector } from "../hooks/reduxHook"
import { updateUser } from "../redux/reducers/userReducer"
import { User } from "../types/user"

const Profile = () => {
    const user = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

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
                <TableContainer>
                    <Table>
                        <TableHead />
                        <TableRow>
                            <TableCell>Name:</TableCell>
                            <TableCell>{user.currentUser.name}</TableCell>
                        </TableRow>
                        <TableFooter />
                    </Table>
                </TableContainer>
                

            </Paper>
        </Box>
    )
}

export default Profile