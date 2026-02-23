import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ChatgptMeetingMinutes from "./pages/articles/ChatgptMeetingMinutes";
import SkillsList from "./pages/skills/SkillsList";
import AiAgentBasics from "./pages/skills/AiAgentBasics";
import PromptEngineering from "./pages/skills/PromptEngineering";
import Upgrade from "./pages/account/Upgrade";
import Account from "./pages/account/Account";

function Router() {
  return (
    <Switch>
      {/* トップページ */}
      <Route path="/" component={Home} />

      {/* 初心者向け記事 */}
      <Route path="/articles/chatgpt-meeting-minutes" component={ChatgptMeetingMinutes} />

      {/* 中級者向けスキルガイド */}
      <Route path="/skills" component={SkillsList} />
      <Route path="/skills/ai-agent-basics" component={AiAgentBasics} />
      <Route path="/skills/prompt-engineering" component={PromptEngineering} />

      {/* アカウント */}
      <Route path="/account" component={Account} />
      <Route path="/account/upgrade" component={Upgrade} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
