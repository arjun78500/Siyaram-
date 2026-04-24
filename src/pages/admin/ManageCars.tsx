import { CARS } from '../../lib/constants';

export function ManageCars() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-800">Manage Cars</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Add New Car
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-50 text-neutral-500 text-sm border-b border-neutral-100">
              <th className="p-4 font-medium">Image</th>
              <th className="p-4 font-medium">Car Name</th>
              <th className="p-4 font-medium">Pricing</th>
              <th className="p-4 font-medium">Type</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {CARS.map((car) => (
              <tr key={car.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition">
                <td className="p-4">
                  <div className="w-16 h-12 rounded-lg overflow-hidden bg-neutral-200">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="p-4 font-medium text-neutral-900">{car.name}</td>
                <td className="p-4">
                  <div className="font-bold text-neutral-900">₹{car.price}/day</div>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-neutral-100 rounded-lg text-xs font-medium text-neutral-600">
                    {car.type}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-blue-600 hover:underline mr-4 text-sm font-medium">Edit</button>
                  <button className="text-red-600 hover:underline text-sm font-medium">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
