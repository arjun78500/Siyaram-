export function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-neutral-800 mb-6">Settings</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 max-w-2xl">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">Main Contact Phone</label>
            <input type="text" defaultValue="+91 9817423513" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">Secondary Contact Phone</label>
            <input type="text" defaultValue="+91 9017130046" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">WhatsApp Number</label>
            <input type="text" defaultValue="919817423513" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">Address</label>
            <textarea rows={2} defaultValue="Kharar, Punjab (Near STUC)" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">About Page Text</label>
            <textarea rows={4} defaultValue="Siyaraam Car Rental started 3 months ago with a vision to provide reliable, affordable and premium rental services in Punjab. We focus on clean cars, trust and customer comfort." className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl"></textarea>
          </div>
          <button type="button" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}
