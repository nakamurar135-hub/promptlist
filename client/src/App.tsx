import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ChatgptMeetingMinutes from "./pages/articles/ChatgptMeetingMinutes";
import ChatgptQuestionTemplate from "./pages/articles/ChatgptQuestionTemplate";
import ChatgptBusinessEmail from "./pages/articles/ChatgptBusinessEmail";
import ChatgptJobMotivation from "./pages/articles/ChatgptJobMotivation";
import ChatgptBlogWriting from "./pages/articles/ChatgptBlogWriting";
import ChatgptLineReply from "./pages/articles/ChatgptLineReply";
import SkillsList from "./pages/skills/SkillsList";
import AiAgentBasics from "./pages/skills/AiAgentBasics";
import PromptEngineering from "./pages/skills/PromptEngineering";
import TaskAutomation from "./pages/skills/TaskAutomation";
import MultiAgentSystems from "./pages/skills/MultiAgentSystems";
import RagImplementation from "./pages/skills/RagImplementation";
import Upgrade from "./pages/account/Upgrade";
import Account from "./pages/account/Account";

function Router() {
  return (
    <Switch>
      {/* トップページ */}
      <Route path="/" component={Home} />

      {/* 初心者向け記事 */}
      <Route path="/articles/chatgpt-meeting-minutes" component={ChatgptMeetingMinutes} />
      <Route path="/articles/chatgpt-question-template" component={ChatgptQuestionTemplate} />
      <Route path="/articles/chatgpt-business-email" component={ChatgptBusinessEmail} />
      <Route path="/articles/chatgpt-job-motivation" component={ChatgptJobMotivation} />
      <Route path="/articles/chatgpt-blog-writing" component={ChatgptBlogWriting} />
      <Route path="/articles/chatgpt-line-reply" component={ChatgptLineReply} />

      {/* 中級者向けスキルガイド */}
      <Route path="/skills" component={SkillsList} />
      <Route path="/skills/ai-agent-basics" component={AiAgentBasics} />
      <Route path="/skills/prompt-engineering" component={PromptEngineering} />
      <Route path="/skills/task-automation" component={TaskAutomation} />
      <Route path="/skills/multi-agent-systems" component={MultiAgentSystems} />
      <Route path="/skills/rag-implementation" component={RagImplementation} />

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
