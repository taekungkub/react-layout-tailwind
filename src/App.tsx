import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import HomePage from "./pages/HomePage";

function Root() {
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contracts" element={<HomePage />}></Route>
          <Route path="/analytics" element={<HomePage />}></Route>

          <Route path="/market-news/overview" element={<HomePage />}></Route>
          <Route path="/market-news/forecasts" element={<HomePage />}></Route>
          <Route path="/market-news/outlook" element={<HomePage />}></Route>
          <Route path="/market-news/real-time" element={<HomePage />}></Route>

          <Route path="/release/upcomming" element={<HomePage />}></Route>
          <Route path="/release/previous" element={<HomePage />}></Route>
          <Route path="/release/schedule" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
