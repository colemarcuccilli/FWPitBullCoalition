import Link from "next/link";
import { getDogs, getEvents } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dog, Calendar, Plus, FileText, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const dogs = getDogs();
  const events = getEvents();

  const totalDogs = dogs.length;
  const availableDogs = dogs.filter((d) => d.status === "available").length;
  const totalEvents = events.length;
  const upcomingEvents = events.filter((e) => e.status === "upcoming").length;

  const stats = [
    {
      label: "Total Dogs",
      value: totalDogs,
      icon: Dog,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-200",
    },
    {
      label: "Available for Adoption",
      value: availableDogs,
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
    },
    {
      label: "Upcoming Events",
      value: upcomingEvents,
      icon: Calendar,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
    {
      label: "Total Events",
      value: totalEvents,
      icon: Calendar,
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
    },
  ];

  const recentDogs = dogs.slice(-5).reverse();
  const recentEvents = events.slice(-5).reverse();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Page header */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-sm text-gray-500 mt-0.5">Welcome back. Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-white border border-gray-200 shadow-none">
            <CardContent className="pt-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-lg ${stat.bg} border ${stat.border}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="bg-white border border-gray-200 shadow-none">
        <CardHeader className="border-b border-gray-100 pb-4">
          <CardTitle className="text-base text-gray-800">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/dogs/new"
              className="inline-flex items-center rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4 mr-1.5" />
              Add Dog
            </Link>
            <Link
              href="/admin/events/new"
              className="inline-flex items-center rounded-lg bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4 mr-1.5" />
              Add Event
            </Link>
            <Link
              href="/admin/content"
              className="inline-flex items-center rounded-lg border border-gray-300 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <FileText className="w-4 h-4 mr-1.5" />
              Edit Content
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Dogs */}
        <Card className="bg-white border border-gray-200 shadow-none">
          <CardHeader className="border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base text-gray-800">Recent Dogs</CardTitle>
              <Link
                href="/admin/dogs"
                className="text-xs text-cyan-600 hover:text-cyan-700 font-medium"
              >
                View all →
              </Link>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            {recentDogs.length === 0 ? (
              <p className="text-sm text-gray-400 py-4 text-center">No dogs yet</p>
            ) : (
              <ul className="divide-y divide-gray-100">
                {recentDogs.map((dog) => (
                  <li key={dog.id} className="py-2.5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{dog.name}</p>
                      <p className="text-xs text-gray-400">
                        {dog.age} &middot; {dog.sex}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        dog.status === "available"
                          ? "bg-green-100 text-green-700"
                          : dog.status === "adopted"
                          ? "bg-gray-100 text-gray-600"
                          : dog.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {dog.status}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        {/* Recent Events */}
        <Card className="bg-white border border-gray-200 shadow-none">
          <CardHeader className="border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base text-gray-800">Recent Events</CardTitle>
              <Link
                href="/admin/events"
                className="text-xs text-cyan-600 hover:text-cyan-700 font-medium"
              >
                View all →
              </Link>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            {recentEvents.length === 0 ? (
              <p className="text-sm text-gray-400 py-4 text-center">No events yet</p>
            ) : (
              <ul className="divide-y divide-gray-100">
                {recentEvents.map((event) => (
                  <li key={event.id} className="py-2.5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{event.name}</p>
                      <p className="text-xs text-gray-400">
                        {event.date} &middot; {event.location}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        event.status === "upcoming"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {event.status}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
