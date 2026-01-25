import {
  ChevronLeft,
  Search,
  Clock,
  MapPin,
  Share2,
  Mail,
  Phone,
} from "lucide-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:block relative w-[680px] h-[520px]">
      <div className="phone-frame absolute left-0 top-6 w-[260px]">
        <div className="phone-bar">
          <ChevronLeft className="h-4 w-4" />
          <span>Accommodations</span>
          <div className="h-7 w-7 rounded-full border border-white/50" />
        </div>
        <div className="phone-content">
          <div className="phone-input flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            Search
          </div>
          <div className="phone-card">
            <div className="h-24 rounded-xl bg-muted" />
            <div className="flex items-center justify-between">
              <span className="phone-pill">Townhouse</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                3 Hours Ago
              </span>
            </div>
            <div className="text-sm font-semibold">
              Room in 4 Bedroom Apartment
            </div>
            <div className="text-lg font-bold">$230 per week</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 text-primary" />
              789 Swanston St, Melbourne
            </div>
          </div>
          <div className="phone-card">
            <div className="h-20 rounded-xl bg-muted" />
            <div className="flex items-center justify-between">
              <span className="phone-pill">Share House</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                3 Hours Ago
              </span>
            </div>
            <div className="text-sm font-semibold">Room in 4 Bedroom Apartment</div>
            <div className="text-lg font-bold">$230 per week</div>
          </div>
        </div>
      </div>

      <div className="phone-frame absolute right-0 bottom-0 w-[310px]">
        <div className="phone-bar">
          <ChevronLeft className="h-4 w-4" />
          <div className="text-center leading-tight">
            <div>Supply Chain Manager</div>
            <div className="text-xs font-normal opacity-90">CustomerFirst</div>
          </div>
          <Share2 className="h-4 w-4" />
        </div>
        <div className="phone-content">
          <div className="space-y-1">
            <div className="text-lg font-semibold">Supply Chain Manager</div>
            <div className="text-sm text-muted-foreground">SupplyLine</div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Full Time
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Melbourne, VIC
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              $33 - $40 per hour + Overtime
            </div>
          </div>
          <div className="phone-card grid grid-cols-[1fr,auto] items-center">
            <div>
              <div className="text-xs text-muted-foreground">Contact Email</div>
              <div className="text-sm font-medium">contact@techcorp.com</div>
            </div>
            <Mail className="h-4 w-4 text-primary" />
          </div>
          <div className="phone-card grid grid-cols-[1fr,auto] items-center">
            <div>
              <div className="text-xs text-muted-foreground">Contact Phone</div>
              <div className="text-sm font-medium">430492732</div>
            </div>
            <Phone className="h-4 w-4 text-primary" />
          </div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            For thousands of years, maps have provided humans with the knowledge
            they need to make decisions.
          </div>
          <div className="grid gap-2">
            <div className="w-full rounded-full border border-border py-2 text-center text-sm font-medium">
              Save
            </div>
            <div className="phone-button">Apply</div>
          </div>
        </div>
      </div>
    </div>
  );
};
