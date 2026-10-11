import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Search } from "lucide-react";
import MenteeCard from "@/components/MenteeCard";
import MenteeDetailModal from "@/components/MenteeDetailModal";
import { menteesData } from "@/mockData/menteesData";

const Mentees = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedMentee, setSelectedMentee] = useState(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return menteesData;
    const q = query.toLowerCase();
    return menteesData.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSendMessage = (mentee) => {
   
    window.location.href = `mailto:${mentee.email}`;
  };

  const handleReviewSubmissions = (mentee) => {
    navigate(`/mentor/submissions?mentee=${mentee.id}`);
  };

  const searchHandler = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      
      <div className="shrink-0">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-strong" />
              <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
                Mentees
              </h1>
            </div>
            <p className="mt-1 text-sm text-muted-text">
              {menteesData.length} students under your mentorship.
            </p>
          </div>

         
          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-text" />
            <input
              type="text"
              value={query}
              onChange={searchHandler}
              placeholder="Search by name or email..."
              className="w-full rounded-full border border-border-brand bg-surface2 py-2 pl-9 pr-4 text-xs text-primary-text outline-none transition-colors focus:border-border"
            />
          </div>
        </div>
      </div>

      
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto pr-1">
        {filtered.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface2">
              <Users className="h-7 w-7 text-muted-text" />
            </div>
            <p className="text-sm font-semibold text-primary-text">
              No mentees found
            </p>
            <p className="text-xs text-muted-text">
              Try a different search term.
            </p>
          </div>
        ) : (
          filtered.map((mentee) => (
            <MenteeCard
              key={mentee.id}
              mentee={mentee}
              onClick={setSelectedMentee}
            />
          ))
        )}
      </div>

      
      <MenteeDetailModal
        open={!!selectedMentee}
        mentee={selectedMentee}
        onClose={() => setSelectedMentee(null)}
        onSendMessage={handleSendMessage}
        onReviewSubmissions={handleReviewSubmissions}
      />
    </div>
  );
};

export default Mentees;