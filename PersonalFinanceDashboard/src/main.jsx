import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { DashboardDataProvider } from './contexts/DashboardDataContext.jsx';
import { AuthProvider } from './components/auth/AuthContext.jsx';
import { GlobalProvider } from './contexts/GlobalMappingContext.jsx';
import { ComponentWidthProvider } from './contexts/ComponentWidthContext.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DashboardDataProvider>
        <ComponentWidthProvider>
          <GlobalProvider>
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
          </GlobalProvider>
        </ComponentWidthProvider>
      </DashboardDataProvider>
    </AuthProvider>

  </StrictMode>
)