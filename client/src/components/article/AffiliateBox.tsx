import { CheckCircle, ExternalLink } from "lucide-react";

interface AffiliateBoxProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  features?: string[];
}

export default function AffiliateBox({
  title,
  description,
  buttonText,
  buttonHref,
  features = [],
}: AffiliateBoxProps) {
  return (
    <div className="my-10 bg-[#FFF8E6] border-2 border-[#FF9800] rounded-xl p-6">
      <h3 className="text-lg font-bold text-[#E68900] mb-2">{title}</h3>
      <p className="text-sm text-[#333333] leading-relaxed mb-4">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-1.5 mb-5">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-[#333333]">
              <CheckCircle className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}
      <a
        href={buttonHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#FF9800] hover:bg-[#E68900] text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
      >
        {buttonText}
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}
