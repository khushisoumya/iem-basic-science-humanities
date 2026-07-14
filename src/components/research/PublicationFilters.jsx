import { useState } from 'react'
import { Search } from 'lucide-react'

const filters = ['All', 'Journal', 'Conference', 'Book Chapter']

function PublicationFilters({ onSearchChange, onFilterChange }) {
  const [active, setActive] = useState('All')

  const handleFilter = (filter) => {
    setActive(filter)
    if (onFilterChange) onFilterChange(filter)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14">
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" strokeWidth={2} />
        <input
          type="text"
          placeholder="Search by title, author, or keyword..."
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-shadow"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilter(filter)}
            className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
              active === filter
                ? 'bg-brand-blue text-white border-brand-blue'
                : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PublicationFilters