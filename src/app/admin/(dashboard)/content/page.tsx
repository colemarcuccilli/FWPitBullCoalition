"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, AlertCircle, CheckCircle, Plus, Trash2 } from "lucide-react";
import { SiteContent, Stat, Partner } from "@/lib/data";

const defaultContent: SiteContent = {
  hero: { title1: "", title2: "", subtitle: "" },
  mission: { heading: "", text: "" },
  stats: [],
  partners: [],
  contact: { address: "", city: "", email: "", facebook: "", instagram: "", youtube: "" },
};

export default function ContentPage() {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await fetch("/api/admin/content");
        if (!res.ok) throw new Error("Failed to fetch content");
        const data = await res.json();
        setContent(data);
      } catch {
        setLoadError("Failed to load site content.");
      } finally {
        setLoading(false);
      }
    }
    fetchContent();
  }, []);

  function showToast(type: "success" | "error", message: string) {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (!res.ok) throw new Error("Save failed");
      showToast("success", "Content saved successfully!");
    } catch {
      showToast("error", "Failed to save content. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  // Hero
  function setHero(field: keyof SiteContent["hero"], value: string) {
    setContent((prev) => ({ ...prev, hero: { ...prev.hero, [field]: value } }));
  }

  // Mission
  function setMission(field: keyof SiteContent["mission"], value: string) {
    setContent((prev) => ({ ...prev, mission: { ...prev.mission, [field]: value } }));
  }

  // Contact
  function setContact(field: keyof SiteContent["contact"], value: string) {
    setContent((prev) => ({ ...prev, contact: { ...prev.contact, [field]: value } }));
  }

  // Stats
  function setStat(index: number, field: keyof Stat, value: string | number) {
    setContent((prev) => {
      const stats = [...prev.stats];
      stats[index] = { ...stats[index], [field]: field === "value" ? Number(value) : value };
      return { ...prev, stats };
    });
  }
  function addStat() {
    setContent((prev) => ({
      ...prev,
      stats: [...prev.stats, { value: 0, suffix: "", label: "", color: "text-cyan-400" }],
    }));
  }
  function removeStat(index: number) {
    setContent((prev) => ({ ...prev, stats: prev.stats.filter((_, i) => i !== index) }));
  }

  // Partners
  function setPartner(index: number, field: keyof Partner, value: string) {
    setContent((prev) => {
      const partners = [...prev.partners];
      partners[index] = { ...partners[index], [field]: value };
      return { ...prev, partners };
    });
  }
  function addPartner() {
    setContent((prev) => ({
      ...prev,
      partners: [...prev.partners, { icon: "🤝", name: "", description: "" }],
    }));
  }
  function removePartner(index: number) {
    setContent((prev) => ({ ...prev, partners: prev.partners.filter((_, i) => i !== index) }));
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
        <span className="ml-2 text-sm text-gray-400">Loading content…</span>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 p-6 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm">{loadError}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Site Content</h2>
          <p className="text-sm text-gray-500 mt-0.5">Edit the content that appears on the public website</p>
        </div>
        <Button
          onClick={handleSave}
          disabled={saving}
          className="bg-cyan-600 hover:bg-cyan-700 text-white"
        >
          {saving && <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />}
          {saving ? "Saving…" : "Save All Changes"}
        </Button>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm ${
            toast.type === "success"
              ? "bg-green-50 border-green-200 text-green-700"
              : "bg-red-50 border-red-200 text-red-700"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <AlertCircle className="w-4 h-4" />
          )}
          {toast.message}
        </div>
      )}

      {/* Hero Section */}
      <Card className="bg-white border border-gray-200 shadow-none">
        <CardHeader className="border-b border-gray-100 pb-4">
          <CardTitle className="text-base text-gray-800">Hero Section</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Title Line 1</label>
            <input
              value={content.hero.title1}
              onChange={(e) => setHero("title1", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="e.g. FORT WAYNE"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Title Line 2</label>
            <input
              value={content.hero.title2}
              onChange={(e) => setHero("title2", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="e.g. PIT BULL COALITION"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Subtitle</label>
            <textarea
              value={content.hero.subtitle}
              onChange={(e) => setHero("subtitle", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
              placeholder="The hero subtitle text that appears below the title…"
            />
          </div>
        </CardContent>
      </Card>

      {/* Mission Section */}
      <Card className="bg-white border border-gray-200 shadow-none">
        <CardHeader className="border-b border-gray-100 pb-4">
          <CardTitle className="text-base text-gray-800">Mission Section</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Heading</label>
            <input
              value={content.mission.heading}
              onChange={(e) => setMission("heading", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="e.g. Our Mission"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Text</label>
            <textarea
              value={content.mission.text}
              onChange={(e) => setMission("text", e.target.value)}
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
              placeholder="The mission statement text…"
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats Section */}
      <Card className="bg-white border border-gray-200 shadow-none">
        <CardHeader className="border-b border-gray-100 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base text-gray-800">Statistics</CardTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-700"
              onClick={addStat}
            >
              <Plus className="w-3.5 h-3.5 mr-1" />
              Add Stat
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          {content.stats.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-4">No stats yet. Click &quot;Add Stat&quot; to add one.</p>
          ) : (
            content.stats.map((stat, i) => (
              <div key={i} className="grid grid-cols-12 gap-3 items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Value</label>
                  <input
                    type="number"
                    value={stat.value}
                    onChange={(e) => setStat(i, "value", e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Suffix</label>
                  <input
                    value={stat.suffix}
                    onChange={(e) => setStat(i, "suffix", e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="e.g. +"
                  />
                </div>
                <div className="col-span-4">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Label</label>
                  <input
                    value={stat.label}
                    onChange={(e) => setStat(i, "label", e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="e.g. Dogs Rescued"
                  />
                </div>
                <div className="col-span-3">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Color Class</label>
                  <input
                    value={stat.color}
                    onChange={(e) => setStat(i, "color", e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="e.g. text-cyan-400"
                  />
                </div>
                <div className="col-span-1 flex items-end justify-end pb-0.5">
                  <button
                    type="button"
                    onClick={() => removeStat(i)}
                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* Partners Section */}
      <Card className="bg-white border border-gray-200 shadow-none">
        <CardHeader className="border-b border-gray-100 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base text-gray-800">Partners</CardTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-700"
              onClick={addPartner}
            >
              <Plus className="w-3.5 h-3.5 mr-1" />
              Add Partner
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          {content.partners.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-4">No partners yet. Click &quot;Add Partner&quot; to add one.</p>
          ) : (
            content.partners.map((partner, i) => (
              <div key={i} className="grid grid-cols-12 gap-3 items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="col-span-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Icon</label>
                  <input
                    value={partner.icon}
                    onChange={(e) => setPartner(i, "icon", e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="🤝"
                  />
                </div>
                <div className="col-span-4">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Name</label>
                  <input
                    value={partner.name}
                    onChange={(e) => setPartner(i, "name", e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Partner name"
                  />
                </div>
                <div className="col-span-6">
                  <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                  <input
                    value={partner.description}
                    onChange={(e) => setPartner(i, "description", e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Brief description"
                  />
                </div>
                <div className="col-span-1 flex items-end justify-end pb-0.5">
                  <button
                    type="button"
                    onClick={() => removePartner(i)}
                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card className="bg-white border border-gray-200 shadow-none">
        <CardHeader className="border-b border-gray-100 pb-4">
          <CardTitle className="text-base text-gray-800">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Street Address</label>
              <input
                value={content.contact.address}
                onChange={(e) => setContact("address", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="e.g. 123 Main St"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">City, State ZIP</label>
              <input
                value={content.contact.city}
                onChange={(e) => setContact("city", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="e.g. Fort Wayne, IN 46801"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <input
                type="email"
                value={content.contact.email}
                onChange={(e) => setContact("email", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="info@fwpbc.org"
              />
            </div>
          </div>
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Social Media Links</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Facebook URL</label>
                <input
                  value={content.contact.facebook}
                  onChange={(e) => setContact("facebook", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="https://facebook.com/…"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Instagram URL</label>
                <input
                  value={content.contact.instagram}
                  onChange={(e) => setContact("instagram", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="https://instagram.com/…"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">YouTube URL</label>
                <input
                  value={content.contact.youtube}
                  onChange={(e) => setContact("youtube", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="https://youtube.com/…"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Save */}
      <div className="flex items-center justify-end pb-8">
        <Button
          onClick={handleSave}
          disabled={saving}
          className="bg-cyan-600 hover:bg-cyan-700 text-white"
        >
          {saving && <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />}
          {saving ? "Saving…" : "Save All Changes"}
        </Button>
      </div>
    </div>
  );
}
