import { StrictMode, render } from "common";

import "./index.css";
import { App } from "App";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
