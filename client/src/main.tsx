import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { bootstrapTheme } from "@/lib/theme";

bootstrapTheme();

createRoot(document.getElementById("root")!).render(<App />);
