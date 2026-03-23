"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const GRADIENT_PRESETS = [
  { label: "Cyan to Blue", value: "from-cyan-400 to-blue-500" },
  { label: "Purple to Pink", value: "from-purple-400 to-pink-500" },
  { label: "Teal to Emerald", value: "from-teal-400 to-emerald-500" },
  { label: "Orange to Red", value: "from-orange-400 to-red-500" },
  { label: "Blue to Violet", value: "from-blue-400 to-violet-500" },
  { label: "Pink to Rose", value: "from-pink-400 to-rose-500" },
  { label: "Amber to Orange", value: "from-amber-400 to-orange-500" },
  { label: "Green to Teal", value: "from-green-400 to-teal-500" },
];

const ACCENT_OPTIONS = [
  "cyan", "blue", "purple", "pink", "teal", "emerald", "orange", "red", "violet", "rose", "amber", "green",
];

const defaultForm = {
  name: "",
  age: "",
  weight: "",
  sex: "Male",
  traits: "",
  description: "",
  image: "",
  gradient: GRADIENT_PRESETS[0].value,
  accent: "cyan",
  featured: false,
  status: "available" as "available" | "adopted" | "pending" | "foster",
};

export default function NewDogPage() {
  const router = useRouter();
  const [form, setForm] = useState(defaultForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setForm((prev) => ({ ...prev, image: data.url }));
      setImagePreview(data.url);
    } catch {
      setError("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const payload = {
        ...form,
        traits: form.traits.split(",").map((t) => t.trim()).filter(Boolean),
      };
      const res = await fetch("/api/admin/dogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to save");
      router.push("/admin/dogs");
    } catch {
      setError("Failed to save dog. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/admin/dogs"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "border-gray-300 text-gray-600")}
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </Link>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Add New Dog</h2>
          <p className="text-sm text-gray-500">Fill in the details below to add a dog to the roster</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <Card className="bg-white border border-gray-200 shadow-none">
          <CardHeader className="border-b border-gray-100 pb-4">
            <CardTitle className="text-base text-gray-800">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="e.g. Buddy"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Sex *</label>
                <select
                  name="sex"
                  value={form.sex}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Age *</label>
                <input
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="e.g. 2 years"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Weight *</label>
                <input
                  name="weight"
                  value={form.weight}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="e.g. 55 lbs"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Traits <span className="text-gray-400 font-normal">(comma-separated)</span>
              </label>
              <input
                name="traits"
                value={form.traits}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="e.g. Playful, Gentle, Good with kids"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
                placeholder="Describe the dog's personality, history, and needs…"
              />
            </div>
          </CardContent>
        </Card>

        {/* Status & Display */}
        <Card className="bg-white border border-gray-200 shadow-none">
          <CardHeader className="border-b border-gray-100 pb-4">
            <CardTitle className="text-base text-gray-800">Status & Display</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Status *</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                >
                  <option value="available">Available</option>
                  <option value="pending">Pending</option>
                  <option value="foster">Foster</option>
                  <option value="adopted">Adopted</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Card Gradient</label>
                <select
                  name="gradient"
                  value={form.gradient}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                >
                  {GRADIENT_PRESETS.map((g) => (
                    <option key={g.value} value={g.value}>{g.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Accent Color</label>
                <select
                  name="accent"
                  value={form.accent}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                >
                  {ACCENT_OPTIONS.map((a) => (
                    <option key={a} value={a}>{a.charAt(0).toUpperCase() + a.slice(1)}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={form.featured}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-700">Featured dog</span>
                    <p className="text-xs text-gray-400">Shows on homepage</p>
                  </div>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Image Upload */}
        <Card className="bg-white border border-gray-200 shadow-none">
          <CardHeader className="border-b border-gray-100 pb-4">
            <CardTitle className="text-base text-gray-800">Photo</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload Image</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-gray-50 transition">
                  <Upload className="w-4 h-4" />
                  {uploading ? "Uploading…" : "Choose file"}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {uploading && <Loader2 className="w-4 h-4 animate-spin text-gray-400" />}
                {imagePreview && (
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Or enter image URL
              </label>
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="https://…"
              />
            </div>
          </CardContent>
        </Card>

        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/admin/dogs"
            className={cn(buttonVariants({ variant: "outline" }), "border-gray-300 text-gray-700")}
          >
            Cancel
          </Link>
          <Button
            type="submit"
            disabled={saving}
            className="bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            {saving && <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />}
            {saving ? "Saving…" : "Add Dog"}
          </Button>
        </div>
      </form>
    </div>
  );
}
