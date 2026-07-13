import { useState } from 'react'

const filters = ['All', 'Upcoming', 'Past']

function EventFilters({ onFilterChange }) {
  const [active, setActive] = useState('All')

  const handleFilter = (filter) => {
    setActive(filter)
    if (onFilterChange) onFilterChange(filter)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-14 flex flex-wrap gap-2">
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
  )
}

export default EventFilters