function FacultyHeader({ shown, total }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 flex items-start sm:items-end justify-between flex-wrap gap-2">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-navy">Our Faculty Members</h2>
        <div className="w-12 h-1 bg-brand-blue rounded-full mt-2" />
      </div>
      {/* <span className="text-gray-500 text-sm">
        Showing {shown} of {total} faculty members
      </span> */}
    </div>
  )
}

export default FacultyHeader