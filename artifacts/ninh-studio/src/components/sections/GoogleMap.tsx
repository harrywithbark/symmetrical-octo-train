import { STUDIO_COORDINATES } from '@/lib/constants'

export function GoogleMap() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.026543984584!2d${STUDIO_COORDINATES.lng}!3d${STUDIO_COORDINATES.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5483a39c3e3e3e3d%3A0x3e3e3e3e3e3e3e3e!2sEast%20Vancouver!5e0!3m2!1sen!2sca!4v1234567890`

  return (
    <section className="w-full h-96 bg-gray-200">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ninh Studio Location"
      />
    </section>
  )
}
