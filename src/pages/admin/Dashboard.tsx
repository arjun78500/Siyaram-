import { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Car, CalendarCheck, Users, TrendingUp } from 'lucide-react';
import { CARS } from '../../lib/constants'; // using fallback for total cars if db empty

export function Dashboard() {
  const [stats, setStats] = useState({
    cars: CARS.length,
    bookings: 0,
    enquiries: 0,
    revenue: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const bookingsSnap = await getDocs(query(collection(db, 'bookings')));
        setStats(s => ({ ...s, bookings: bookingsSnap.size }));
      } catch (error) {
        console.error("Error fetching stats", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-neutral-800 mb-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex items-center">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-blue-50 text-blue-600">
            <Car size={24} />
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-500 mb-1">Total Cars</h4>
            <h2 className="text-3xl font-bold text-neutral-900">{stats.cars}</h2>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex items-center">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-emerald-50 text-emerald-600">
            <CalendarCheck size={24} />
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-500 mb-1">Active Bookings</h4>
            <h2 className="text-3xl font-bold text-neutral-900">{stats.bookings}</h2>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex items-center">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-purple-50 text-purple-600">
            <Users size={24} />
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-500 mb-1">Enquiries</h4>
            <h2 className="text-3xl font-bold text-neutral-900">{stats.enquiries}</h2>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex items-center">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-amber-50 text-amber-600">
            <TrendingUp size={24} />
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-500 mb-1">Est. Revenue</h4>
            <h2 className="text-3xl font-bold text-neutral-900">₹{stats.revenue}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
