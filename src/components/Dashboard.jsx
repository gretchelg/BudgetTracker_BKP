import { useContext, useState, useEffect } from "react";
import { useJwt } from "react-jwt";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";
import { AuthContext } from "../context/AuthContext";
import "./style/Dashboard.css"

import { BorderStyle, ConstructionOutlined, FunctionsOutlined,} from "@mui/icons-material";
import { MenuItem, InputLabel, FormControl, Select } from "@mui/material";
import { Container, Box, Typography, LinearProgress } from "@mui/material";


export default function Dashboard() {
    return (
        <Container
        sx={{
            paddingTop: "100px",
            maxWidth: "sm",
            minHeight: "100vh",
        }}
        style={{
            background: "white",
            paddingBottom: "90px",
        }}
        >
            <Grid container className="dash-container">
            </Grid>
        </Container>
    )
}