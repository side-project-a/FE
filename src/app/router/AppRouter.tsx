import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Home } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />),
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
