
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import PitchEvaluator from "./pages/dashboard/PitchEvaluator";
import MentorMatching from "./pages/dashboard/MentorMatching";
import BusinessValidator from "./pages/dashboard/BusinessValidator";
import KnowledgeHub from "./pages/dashboard/KnowledgeHub";
import Collaboration from "./pages/dashboard/Collaboration";
import Profile from "./pages/dashboard/Profile";
import Messages from "./pages/dashboard/Messages";
import ValuationCalculator from "./pages/dashboard/ValuationCalculator";
import CompetitorAnalysis from "./pages/dashboard/CompetitorAnalysis";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
          
          {/* Protected Dashboard Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/matching" element={<MentorMatching />} />
            <Route path="/knowledge-hub" element={<KnowledgeHub />} />
            <Route path="/business-validator" element={<BusinessValidator />} />
            <Route path="/pitch-evaluator" element={<PitchEvaluator />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/competitor-benchmarking" element={<CompetitorAnalysis />} />
            <Route path="/valuation-calculator" element={<ValuationCalculator />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
