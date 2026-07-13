import { useState } from 'react'

const semesters = ['Semester I', 'Semester II', 'Semester III', 'Semester IV', 'Semester V', 'Semester VI']

function SemesterSelector({ onChange }) {
  const [active, setActive] = useState(semesters[0])

  const handleSelect = (sem) => {
    setActive(sem)
    if (onChange) onChange(sem)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-14">
      <div className="flex flex-wrap gap-2 bg-gray-50 rounded-xl p-2 border border-gray-100">
        {semesters.map((sem) => (
          <button
            key={sem}
            onClick={() => handleSelect(sem)}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              active === sem
                ? 'bg-brand-blue text-white shadow-sm'
                : 'text-gray-600 hover:bg-white hover:text-navy'
            }`}
          >
            {sem}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SemesterSelector