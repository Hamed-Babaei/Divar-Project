import routes from "./router/routes";
import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "./configs/reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({ defaultOptions });

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {router}

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
