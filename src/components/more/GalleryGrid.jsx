const photos = [
  { caption: 'National Science Day', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=500' },
  { caption: 'Graduation Ceremony', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500' },
  { caption: 'Lab Sessions', url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=500' },
  { caption: 'Cultural Fest', url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=500' },
  { caption: 'Guest Lecture', url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=500' },
  { caption: 'Campus Life', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=500' },
  { caption: 'Workshop Session', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500' },
  { caption: 'Sports Meet', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=500' },
]

function GalleryGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.caption} className="relative rounded-xl overflow-hidden aspect-square group">
            <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">{photo.caption}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
export default GalleryGrid