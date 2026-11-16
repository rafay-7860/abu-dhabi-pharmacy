import {
  ClipboardPlus,
  Flower2,
  HandHeart,
  HeartPulse,
  Leaf,
  MapPin,
  MessageCircleQuestion,
  Phone,
  Pill,
  Smile,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ClipboardPlus,
  Pill,
  HeartPulse,
  Leaf,
  Sparkles,
  Flower2,
  MapPin,
  HandHeart,
  MessageCircleQuestion,
  Users,
  Phone,
  Smile,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? HeartPulse;
}
