import React from "react"
interface SideAdProps {
  position: "left" | "right"
  adSlot?: React.ReactNode
}

export default function SideAd({ position, adSlot }: SideAdProps) {
  return (
    <div className="sticky top-4 p-2">
      <div className="w-[160px] h-[600px] bg-[#F3F4F6] rounded-lg flex items-center justify-center">
        {adSlot || (
          <span className="text-[#666666] text-xs text-center px-2">
            広告枠<br />160x600
          </span>
        )}
      </div>
    </div>
  )
}
