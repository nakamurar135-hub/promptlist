import { Check } from "lucide-react"

interface AffiliateBoxProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  features?: string[]
}

export default function AffiliateBox({
  title,
  description,
  buttonText,
  buttonHref,
  features = [],
}: AffiliateBoxProps) {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-[#FF9800]/10 to-[#FF9800]/5 border-2 border-[#FF9800] rounded-lg">
      <h3 className="text-xl font-bold text-[#333333] mb-3">{title}</h3>
      <p className="text-[#666666] mb-4">{description}</p>

      {features.length > 0 && (
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-[#333333]">
              <Check className="text-[#FF9800] flex-shrink-0" size={16} />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <a
        href={buttonHref}
        className="inline-block px-6 py-3 rounded-lg font-bold transition-colors text-center bg-[#FF9800] text-[#FFFFFF] hover:bg-[#E68900]"
      >
        {buttonText}
      </a>
    </div>
  )
}
