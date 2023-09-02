import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import UpdatesAndFAQ from './components/pages/UpdatesAndFAQ';
import { LanguageProvider } from './contexts/LanguageContext';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import BottomMenu from './components/common/BottomMenu';
import Analysis from "./components/pages/Analysis";
import Security from "./components/pages/Security";
import Ebanking from "./components/pages/Ebanking";
import Payments from "./components/pages/Payments";
import Crypto from "./components/pages/Crypto";
import NotFound from "./components/pages/NotFound";
import "./App.scss";
import Contact from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/BlogPosts/PrivacyPolicy";
import TermsAndConditions from "./components/pages/BlogPosts/TermsAndConditions";
import CookieBanner from "./components/common/CookieBanner";
import MostAskedQuestions from "./components/pages/BlogPosts/MostAskedQuestions";
import InternshipIt from "./components/pages/BlogPosts/InternshipIt";
import InternshipMarketing from "./components/pages/BlogPosts/InternshipMarketing";
import NftDrop from "./components/pages/BlogPosts/NftDrop";
import PartnershipGenify from "./components/pages/BlogPosts/PartnershipGenify";
import PartnershipVezgo from "./components/pages/BlogPosts/PartnershipVezgo";
import PodcastArman from "./components/pages/BlogPosts/PodcastArman";
import Exit from "./components/pages/Exit";

function App() {
    return (
        <LanguageProvider>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" exact element={<Exit />} />
                        <Route path="/home" exact element={<Home />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/updates-and-faq" element={<UpdatesAndFAQ />} />
                        <Route path="/safety" element={<Security />} />
                        <Route path="/e-banking" element={<Ebanking />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/analysis" element={<Analysis />} />
                        <Route path="/crypto" element={<Crypto />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                        <Route path="/most-asked-questions" element={<MostAskedQuestions />} />
                        <Route path="/internship-it" element={<InternshipIt />} />
                        <Route path="/internship-marketing" element={<InternshipMarketing />} />
                        <Route path="/nft-drop" element={<NftDrop />} />
                        <Route path="/partnership-genify" element={<PartnershipGenify />} />
                        <Route path="/partnership-vezgo" element={<PartnershipVezgo />} />
                        <Route path="/podcast-arman" element={<PodcastArman />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    {/*<CookieBanner />*/}
                </main>
                <Footer />
                <BottomMenu />
            </Router>
        </LanguageProvider>
    );
}

export default App;