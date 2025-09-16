import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import your page components
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage"; // <-- Add this import
import TermsOfServicePage from "@/pages/TermsOfServicePage"; // <-- Add this import

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* --- ADD YOUR NEW ROUTES HERE --- */}
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms-of-service" component={TermsOfServicePage} />
      
      {/* The NotFound route should always be the last one */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;