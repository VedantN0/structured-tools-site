import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { DownloadPage } from "./pages/DownloadPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "products", Component: ProductsPage },
      { path: "product/:id", Component: ProductPage },
      { path: "checkout/:id", Component: CheckoutPage },
      { path: "/thank-you/:productId/:orderId", Component: ThankYouPage },
      { path: "/download/:productId/:orderId", Component: DownloadPage },
    ],
  },
]);
