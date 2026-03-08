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
import ChatgptIdeationPrompt from "./pages/articles/ChatgptIdeationPrompt";
import ChatgptMenuPlanningPrompt from "./pages/articles/ChatgptMenuPlanningPrompt";
import ChatgptSnsPostPrompt from "./pages/articles/ChatgptSnsPostPrompt";
import ChatgptSummarizePrompt from "./pages/articles/ChatgptSummarizePrompt";
import ChatgptTranslationPrompt from "./pages/articles/ChatgptTranslationPrompt";
import AiAgentCourseModule1 from "./pages/articles/AiAgentCourseModule1";
import AiAgentCourseModule2 from "./pages/articles/AiAgentCourseModule2";
import AiAgentCourseModule3 from "./pages/articles/AiAgentCourseModule3";
import AiAgentCourseModule4 from "./pages/articles/AiAgentCourseModule4";
import SkillsList from "./pages/skills/SkillsList";
import AiAgentBasics from "./pages/skills/AiAgentBasics";
import PromptEngineering from "./pages/skills/PromptEngineering";
import TaskAutomation from "./pages/skills/TaskAutomation";
import MultiAgentSystems from "./pages/skills/MultiAgentSystems";
import RagImplementation from "./pages/skills/RagImplementation";
import Upgrade from "./pages/account/Upgrade";
import Account from "./pages/account/Account";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import BeginnerPrompts from "./pages/BeginnerPrompts";
import SearchResults from "./pages/SearchResults";
import PremiumGuide from "./pages/PremiumGuide";

function Router() {
  return (
    <Switch>
      {/* トップページ */}
      <Route path="/" component={Home} />

      {/* 初心者向けプロンプト一覧 */}
      <Route path="/articles" component={BeginnerPrompts} />

      {/* 初心者向け記事 */}
      <Route path="/articles/chatgpt-meeting-minutes" component={ChatgptMeetingMinutes} />
      <Route path="/articles/chatgpt-question-template" component={ChatgptQuestionTemplate} />
      <Route path="/articles/chatgpt-business-email" component={ChatgptBusinessEmail} />
      <Route path="/articles/chatgpt-job-motivation" component={ChatgptJobMotivation} />
      <Route path="/articles/chatgpt-blog-writing" component={ChatgptBlogWriting} />
      <Route path="/articles/chatgpt-line-reply" component={ChatgptLineReply} />
      <Route path="/articles/chatgpt-ideation-prompt" component={ChatgptIdeationPrompt} />
      <Route path="/articles/chatgpt-menu-planning-prompt" component={ChatgptMenuPlanningPrompt} />
      <Route path="/articles/chatgpt-sns-post-prompt" component={ChatgptSnsPostPrompt} />
      <Route path="/articles/chatgpt-summarize-prompt" component={ChatgptSummarizePrompt} />
      <Route path="/articles/chatgpt-translation-prompt" component={ChatgptTranslationPrompt} />

      {/* 中級者向けコース */}
      <Route path="/articles/ai-agent-course-module-1" component={AiAgentCourseModule1} />
      <Route path="/articles/ai-agent-course-module-2" component={AiAgentCourseModule2} />
      <Route path="/articles/ai-agent-course-module-3" component={AiAgentCourseModule3} />
      <Route path="/articles/ai-agent-course-module-4" component={AiAgentCourseModule4} />

      {/* 検索結果 */}
      <Route path="/search" component={SearchResults} />

      {/* プレミアムガイド */}
      <Route path="/premium" component={PremiumGuide} />

      {/* スキルガイド一覧 */}

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

      {/* 法務 */}
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
