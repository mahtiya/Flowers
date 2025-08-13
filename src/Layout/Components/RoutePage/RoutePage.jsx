import { Route, Routes } from 'react-router-dom'
import { routes } from '../../../config/routes'
export default function RoutePage() {
    const routeConfig = routes()
    return (
        <Routes>
            {routeConfig.map((route) => (
                <Route key={route.id} path={route.path} element={route.element} />
            ))}
        </Routes>
    )
}
