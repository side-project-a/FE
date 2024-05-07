import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Home, Planner } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/planner" element={<Planner />} />
    </>,
  ),
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
