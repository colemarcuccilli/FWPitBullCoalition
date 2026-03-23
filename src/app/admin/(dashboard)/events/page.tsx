"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiteEvent } from "@/lib/data";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Pencil, Trash2, Star, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type StatusFilter = "all" | "upcoming" | "past";

export default function EventsPage() {
  const [events, setEvents] = useState<SiteEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [deleting, setDeleting] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const res = await fetch("/api/admin/events");
      if (!res.ok) throw new Error("Failed to fetch events");
      const data = await res.json();
      setEvents(data);
    } catch {
      setError("Failed to load events. Please refresh.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/events/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setEvents((prev) => prev.filter((e) => e.id !== id));
      setConfirmDelete(null);
    } catch {
      alert("Failed to delete event. Please try again.");
    } finally {
      setDeleting(null);
    }
  }

  const filtered = filter === "all" ? events : events.filter((e) => e.status === filter);
  const counts = {
    all: events.length,
    upcoming: events.filter((e) => e.status === "upcoming").length,
    past: events.filter((e) => e.status === "past").length,
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Events</h2>
          <p className="text-sm text-gray-500 mt-0.5">{events.length} total events</p>
        </div>
        <Link
          href="/admin/events/new"
          className={cn(buttonVariants({ variant: "default" }), "bg-cyan-600 hover:bg-cyan-700 text-white")}
        >
          <Plus className="w-4 h-4 mr-1.5" />
          Add New Event
        </Link>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 p-1 bg-gray-100 rounded-lg w-fit">
        {(["all", "upcoming", "past"] as StatusFilter[]).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition ${
              filter === status
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {status} ({counts[status]})
          </button>
        ))}
      </div>

      {/* Table */}
      <Card className="bg-white border border-gray-200 shadow-none">
        <CardHeader className="border-b border-gray-100 pb-4">
          <CardTitle className="text-base text-gray-800">
            {filter === "all" ? "All Events" : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Events`}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
              <span className="ml-2 text-sm text-gray-400">Loading events…</span>
            </div>
          ) : error ? (
            <div className="flex items-center gap-2 p-6 text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{error}</span>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-sm">No events found</p>
              <Link
                href="/admin/events/new"
                className={cn(buttonVariants({ variant: "outline" }), "mt-4 border-gray-300")}
              >
                Add first event
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Location</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Tag</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Featured</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3">
                        <p className="font-medium text-gray-900 text-sm">{event.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{event.day} · {event.time}</p>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{event.date}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 max-w-[160px] truncate">{event.location}</td>
                      <td className="px-4 py-3">
                        <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {event.tag}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${
                            event.status === "upcoming"
                              ? "bg-green-100 text-green-700 border-green-200"
                              : "bg-gray-100 text-gray-600 border-gray-200"
                          }`}
                        >
                          {event.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {event.featured ? (
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                        ) : (
                          <Star className="w-4 h-4 text-gray-200" />
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/events/${event.id}/edit`}
                            className={cn(
                              buttonVariants({ variant: "outline", size: "sm" }),
                              "border-gray-300 text-gray-700 h-7 px-2.5"
                            )}
                          >
                            <Pencil className="w-3.5 h-3.5 mr-1" />
                            Edit
                          </Link>
                          {confirmDelete === event.id ? (
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs text-red-600">Confirm?</span>
                              <button
                                onClick={() => handleDelete(event.id)}
                                disabled={deleting === event.id}
                                className="text-xs px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
                              >
                                {deleting === event.id ? "…" : "Yes"}
                              </button>
                              <button
                                onClick={() => setConfirmDelete(null)}
                                className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                              >
                                No
                              </button>
                            </div>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-red-200 text-red-600 hover:bg-red-50 h-7 px-2.5"
                              onClick={() => setConfirmDelete(event.id)}
                            >
                              <Trash2 className="w-3.5 h-3.5 mr-1" />
                              Delete
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
