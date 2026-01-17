import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Outreach from "./pages/Outreach";
import Sponsorship from "./pages/Sponsorship";
import MeetTheTeam from "./pages/MeetTheTeam";
import PastSeasons from "./pages/PastSeasons";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/past-seasons" element={<PastSeasons />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
