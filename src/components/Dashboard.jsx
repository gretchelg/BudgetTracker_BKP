import { useState, useEffect } from "react";
import { Container, Box, Typography, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import "./style/dashboard.css";

export default function Dashboard() {
    const [filter, setFilter] = useState("month");
    const [filteredData, setFilteredData] = useState([]);
    const [startDate, setStartDate] = useState(Date);
    const [endDate, setEndDate] = useState(Date);

    useEffect(() => {
    const now = new Date();

    const today = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
        ).getTime();
        setEndDate(today);
        const last5Years = new Date(
            now.getFullYear() - 5,
            now.getMonth(),
            now.getDate()
        ).getTime();
        setStartDate(last5Years);
    }, [])

    useEffect(() => {
        const now = new Date();

        if (filter === "week") {
            const lastWeek = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() - 7
            ).getTime();
            setStartDate(lastWeek);
        }
        if (filter === "month") {
            const lastMonth = new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            now.getDate()
            ).getTime();
            setStartDate(lastMonth);
        }
        if (filter === "3months") {
            const last3Months = new Date(
            now.getFullYear(),
            now.getMonth() - 3,
            now.getDate()
            ).getTime();
            setStartDate(last3Months);
        }
        if (filter === "6months") {
            const last6Months = new Date(
                now.getFullYear(),
                now.getMonth() - 6,
                now.getDate()
            ).getTime();
            setStartDate(last6Months);
        }
        if (filter === "year") {
            const lastYear = new Date(
            now.getFullYear() - 1,
            now.getMonth(),
            now.getDate()
            ).getTime();
            setStartDate(lastYear);
        }
        if (filter === "all") {
            const last5Years = new Date(
            now.getFullYear() - 5,
            now.getMonth(),
            now.getDate()
            ).getTime();
            setStartDate(last5Years);
        }
    }, [filter]);

    return (
        <Container
        sx={{
            paddingTop: "100px",
            maxWidth: "sm",
            minHeight: "100vh",
        }}
        // style={{
        //     background: styling.backgroundColor,
        //     paddingBottom: styling.paddingBottom,
        // }}
        >
            <h1>Dashboard</h1>

            <Grid container className="dash-container">
                <Grid item xs={12}>
                    <Box component="div" className="transaction-filter">
                        <FormControl fullWidth>
                            
                            <InputLabel
                                sx={{ fontSize: " 20px" }}
                                id="demo-simple-select-label"
                            >
                                Filter
                            </InputLabel>

                            <Select
                                style={{
                                    // backgroundColor: styling.backgroundBoard,
                                    backgroundColor: "white",
                                    borderRadius: "15px",
                                }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filter}
                                label="Filter"
                                onChange={(e) => setFilter(e.target.value)}
                                sx={{
                                    textAlign: "left",
                                    "& fieldset": {
                                    borderRadius: "15px",
                                    },
                                    fontSize: "15px",
                                }}
                            >
                                <MenuItem value={"all"} sx={{ fontSize: "14px" }}>
                                    All
                                </MenuItem>

                                <MenuItem value={"week"} sx={{ fontSize: "14px" }}>
                                    Last Week
                                </MenuItem>

                                <MenuItem value={"month"} sx={{ fontSize: "14px" }}>
                                    Last Month
                                </MenuItem>

                                <MenuItem value={"3months"} sx={{ fontSize: "14px" }}>
                                    Last 3 Months
                                </MenuItem>

                                <MenuItem value={"6months"} sx={{ fontSize: "14px" }}>
                                    Last 6 Months
                                </MenuItem>

                                <MenuItem value={"year"} sx={{ fontSize: "14px" }}>
                                    Last Year
                                </MenuItem>

                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}