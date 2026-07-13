function FacultyHeader({ shown, total }) {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-14 pb-6 flex items-end justify-between flex-wrap gap-2">
      <div>
        <h2 className="text-2xl font-bold text-navy">Our Faculty Members</h2>
        <div className="w-12 h-1 bg-brand-blue rounded-full mt-2" />
      </div>
      <span className="text-gray-500 text-sm">
        Showing {shown} of {total} faculty members
      </span>
    </div>
  )
}

export default FacultyHeader