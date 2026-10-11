import React, { useState } from "react";
import { Megaphone, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  audienceOptions,
  priorityOptions,
} from "@/mockData/announcementsData";

const emptyForm = {
  title: "",
  message: "",
  audience: audienceOptions[0],
  priority: "normal",
};

const AnnouncementForm = ({ onSubmit, onCancel }) => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const err = {};
    if (!form.title.trim()) err.title = "Title is required";
    if (!form.message.trim()) err.message = "Message is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    onSubmit(form);
    setForm(emptyForm);
    setErrors({});
  };

  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
            <Megaphone className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-tight text-primary-text">
              Post an Announcement
            </h2>
            <p className="text-[11px] text-muted-text">
              Share updates with your mentees.
            </p>
          </div>
        </div>

        
        <div>
          <label
            htmlFor="title"
            className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
          >
            Title *
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Week 3 Evaluation Rescheduled"
            className={`w-full rounded-xl border bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none transition-colors focus:border-border ${
              errors.title ? "border-red-500/50" : "border-border-brand"
            }`}
          />
          {errors.title && (
            <p className="mt-1 text-[11px] text-red-500">{errors.title}</p>
          )}
        </div>

        
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Write the announcement details..."
            className={`w-full resize-none rounded-xl border bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none transition-colors focus:border-border ${
              errors.message ? "border-red-500/50" : "border-border-brand"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>
          )}
        </div>

        
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label
              htmlFor="audience"
              className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
            >
              Audience
            </label>
            <select
              id="audience"
              name="audience"
              value={form.audience}
              onChange={handleChange}
              className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none focus:border-border"
            >
              {audienceOptions.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="priority"
              className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
            >
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none focus:border-border"
            >
              {priorityOptions.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        
        <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setForm(emptyForm);
              setErrors({});
              onCancel?.();
            }}
            className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
          >
            <X className="mr-1.5 h-3.5 w-3.5" />
            Cancel
          </Button>

          <Button
            type="submit"
            className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
          >
            <Send className="mr-1.5 h-3.5 w-3.5" />
            Post Announcement
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AnnouncementForm;