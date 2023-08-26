import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/useTheme";
import { CountryProvider } from "./context/CountryContent";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <CountryProvider>
                <App />
            </CountryProvider>
        </ThemeProvider>
    </React.StrictMode>
);
