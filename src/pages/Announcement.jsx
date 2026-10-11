import React, { useState } from "react";
import AnnouncementForm from "@/components/AnnouncementForm";
import AnnouncementCard from "@/components/AnnouncementCard";
import Toast from "@/components/Toast";
import { announcementsData } from "@/mockData/announcementsData";
import AnnouncementHeader from "@/components/AnnouncementHeader";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState(announcementsData);
  const [toast, setToast] = useState({ open: false, message: "" });

  const handleSubmit = (form) => {
    const newAnnouncement = {
      id: `ann_${Date.now()}`,
      title: form.title,
      message: form.message,
      audience: form.audience,
      priority: form.priority,
      author: "Dr. Amina Hassan",
      createdAt: new Date().toISOString(),
    };

    
    console.log("New announcement:", newAnnouncement);

    setAnnouncements((prev) => [newAnnouncement, ...prev]);
    setToast({
      open: true,
      message: "Announcement posted successfully.",
    });
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      
      <AnnouncementHeader />

      
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        <AnnouncementForm onSubmit={handleSubmit} />

        
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold tracking-tight text-primary-text">
            Recent Announcements
          </h2>
          <span className="text-[11px] text-muted-text">
            {announcements.length} total
          </span>
        </div>

        
        <div className="space-y-3">
          {announcements.map((a) => (
            <AnnouncementCard key={a.id} announcement={a} />
          ))}
        </div>
      </div>

      
      <Toast
        open={toast.open}
        message={toast.message}
        variant="success"
        onClose={() => setToast((t) => ({ ...t, open: false }))}
      />
    </div>
  );
};

export default Announcement;