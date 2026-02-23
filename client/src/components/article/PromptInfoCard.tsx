import { MessageCircle, Lightbulb, CheckCircle } from "lucide-react";

type CardType = "response" | "usecase" | "tips";

interface PromptInfoCardProps {
  type: CardType;
  title: string;
  children: React.ReactNode;
}

const typeConfig: Record<CardType, {
  bg: string;
  border: string;
  iconColor: string;
  Icon: React.ElementType;
}> = {
  response: {
    bg: "#EBF5FF",
    border: "#5B9BD5",
    iconColor: "#5B9BD5",
    Icon: MessageCircle,
  },
  usecase: {
    bg: "#FFF8E6",
    border: "#FF9800",
    iconColor: "#FF9800",
    Icon: Lightbulb,
  },
  tips: {
    bg: "#E8F5E9",
    border: "#4CAF50",
    iconColor: "#4CAF50",
    Icon: CheckCircle,
  },
};

export default function PromptInfoCard({ type, title, children }: PromptInfoCardProps) {
  const config = typeConfig[type];
  const { Icon } = config;

  return (
    <div
      className="my-4 rounded-lg p-4 border-l-4"
      style={{ backgroundColor: config.bg, borderLeftColor: config.border }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 flex-shrink-0" style={{ color: config.iconColor }} />
        <span className="text-sm font-bold text-[#333333]">{title}</span>
      </div>
      <div className="text-sm text-[#333333] leading-relaxed">{children}</div>
    </div>
  );
}
