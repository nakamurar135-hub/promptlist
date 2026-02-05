"use client"

interface Heading {
  id: string
  text: string
  level: 2 | 3
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="bg-[#F5F9FC] rounded-lg p-6 my-8">
      <h2 className="font-bold text-lg text-[#333333] mb-4">目次</h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={index} className={heading.level === 3 ? "ml-4" : ""}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className="text-[#5B9BD5] hover:text-[#4A8BC4] text-left transition-colors text-sm md:text-base"
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
