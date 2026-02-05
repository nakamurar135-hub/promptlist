"use client"

import React from "react"

import { MessageCircle, Lightbulb, CheckCircle } from "lucide-react"

interface PromptInfoCardProps {
  type: "response" | "usecase" | "tips"
  title: string
  children: React.ReactNode
}

export default function PromptInfoCard({
  type,
  title,
  children,
}: PromptInfoCardProps) {
  const config = {
    response: {
      icon: MessageCircle,
      bgColor: "bg-[#EBF5FF]",
      borderColor: "border-[#5B9BD5]",
      iconColor: "text-[#5B9BD5]",
      titleColor: "text-[#5B9BD5]",
    },
    usecase: {
      icon: Lightbulb,
      bgColor: "bg-[#FFF8E6]",
      borderColor: "border-[#FF9800]",
      iconColor: "text-[#FF9800]",
      titleColor: "text-[#FF9800]",
    },
    tips: {
      icon: CheckCircle,
      bgColor: "bg-[#E8F5E9]",
      borderColor: "border-[#4CAF50]",
      iconColor: "text-[#4CAF50]",
      titleColor: "text-[#4CAF50]",
    },
  }

  const { icon: Icon, bgColor, borderColor, iconColor, titleColor } = config[type]

  return (
    <div
      className={`${bgColor} border-l-4 ${borderColor} rounded-r-lg p-4 mb-4`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        <h4 className={`font-bold ${titleColor}`}>{title}</h4>
      </div>
      <div className="text-[#333333] leading-relaxed">{children}</div>
    </div>
  )
}
