import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CreateAgentPage } from '@/components/agent/CreateAgentPage';
import { MyAgentsPage } from '@/components/agent/MyAgentsPage';
import { ActionsPage } from '@/components/actions/ActionsPage';
import { ConversationsPage } from '@/components/conversations/ConversationsPage';
import { BusinessPage } from '@/components/business/BusinessPage';
import { LandingPage } from '@/components/landing/LandingPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { FAQPage } from '@/pages/FAQPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { LoginPage } from '@/pages/auth/LoginPage';
import { SignupPage } from '@/pages/auth/SignupPage';
import { PricingPage } from '@/pages/pricing/PricingPage';
import { OnboardingLayout } from '@/pages/onboarding/OnboardingLayout';
import { WelcomePage } from '@/pages/onboarding/WelcomePage';
import { BusinessNamePage } from '@/pages/onboarding/BusinessNamePage';
import { CallVolumePage } from '@/pages/onboarding/CallVolumePage';
import { UseCasePage } from '@/pages/onboarding/UseCasePage';
import { PhoneVerificationPage } from '@/pages/onboarding/PhoneVerificationPage';
import { TutorialPage } from '@/pages/onboarding/TutorialPage';
import { ReferralPage } from '@/pages/onboarding/ReferralPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Signup starts the onboarding flow */}
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Protected onboarding routes */}
        <Route path="/onboarding" element={<OnboardingLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="business" element={<BusinessNamePage />} />
          <Route path="volume" element={<CallVolumePage />} />
          <Route path="agent" element={<UseCasePage />} />
          <Route path="phone" element={<PhoneVerificationPage />} />
          <Route path="tutorial" element={<TutorialPage />} />
          <Route path="referral" element={<ReferralPage />} />
        </Route>

        {/* Dashboard routes */}
        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<MyAgentsPage />} />
          <Route path="create" element={<CreateAgentPage />} />
          <Route path="actions" element={<ActionsPage />} />
          <Route path="conversations" element={<ConversationsPage />} />
          <Route path="business" element={<BusinessPage />} />
        </Route>

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}