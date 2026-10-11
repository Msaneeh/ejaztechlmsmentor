import { Megaphone } from "lucide-react";

const AnnouncementHeader = () => {
  return (
    <div className="shrink-0">
        <div className="flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-muted-strong" />
          <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
            Announcements
          </h1>
        </div>
        <p className="mt-1 text-sm text-muted-text">
          Broadcast updates to your mentees.
        </p>
      </div>
  )
}

export default AnnouncementHeader;