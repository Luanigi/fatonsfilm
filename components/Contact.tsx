export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm">Name</label>
              <input type="text" id="name" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm">Email</label>
              <input type="email" id="email" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm">Message</label>
              <textarea id="message" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 h-32"></textarea>
            </div>
            <button type="submit" className="w-full py-2 bg-blue-600 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  