import fs from "node:fs";
import path from "node:path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Dog {
  id: string;
  name: string;
  age: string;
  weight: string;
  sex: string;
  traits: string[];
  description: string;
  image: string;
  gradient: string;
  accent: string;
  featured: boolean;
  status: "available" | "adopted" | "pending" | "foster";
}

export interface SiteEvent {
  id: string;
  name: string;
  tag: string;
  date: string;
  day: string;
  time: string;
  location: string;
  description: string;
  highlights: string[];
  ticketLink: string;
  featured: boolean;
  status: "upcoming" | "past";
  year: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  color: string;
}

export interface Partner {
  icon: string;
  name: string;
  description: string;
}

export interface SiteContent {
  hero: { title1: string; title2: string; subtitle: string };
  mission: { heading: string; text: string };
  stats: Stat[];
  partners: Partner[];
  contact: {
    address: string;
    city: string;
    email: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const DATA_DIR = path.join(process.cwd(), "src", "data");

function filePath(name: string) {
  return path.join(DATA_DIR, name);
}

// ---------------------------------------------------------------------------
// Read helpers
// ---------------------------------------------------------------------------

export function getDogs(): Dog[] {
  const raw = fs.readFileSync(filePath("dogs.json"), "utf-8");
  return JSON.parse(raw) as Dog[];
}

export function getDogById(id: string): Dog | undefined {
  return getDogs().find((d) => d.id === id);
}

export function getEvents(): SiteEvent[] {
  const raw = fs.readFileSync(filePath("events.json"), "utf-8");
  return JSON.parse(raw) as SiteEvent[];
}

export function getEventById(id: string): SiteEvent | undefined {
  return getEvents().find((e) => e.id === id);
}

export function getContent(): SiteContent {
  const raw = fs.readFileSync(filePath("content.json"), "utf-8");
  return JSON.parse(raw) as SiteContent;
}

// ---------------------------------------------------------------------------
// Write helpers
// ---------------------------------------------------------------------------

export function saveDogs(dogs: Dog[]): void {
  fs.writeFileSync(filePath("dogs.json"), JSON.stringify(dogs, null, 2), "utf-8");
}

export function saveEvents(events: SiteEvent[]): void {
  fs.writeFileSync(filePath("events.json"), JSON.stringify(events, null, 2), "utf-8");
}

export function saveContent(content: SiteContent): void {
  fs.writeFileSync(filePath("content.json"), JSON.stringify(content, null, 2), "utf-8");
}

// ---------------------------------------------------------------------------
// ID generation
// ---------------------------------------------------------------------------

export function nextId(items: { id: string }[]): string {
  const maxId = items.reduce((max, item) => {
    const num = parseInt(item.id, 10);
    return isNaN(num) ? max : Math.max(max, num);
  }, 0);
  return String(maxId + 1);
}
