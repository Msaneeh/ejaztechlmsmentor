import React, { useState } from "react";
import { PlusCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { menteesData } from "@/mockData/menteesData";

const PHASE_OPTIONS = [
  "Phase 1: Foundations of AI",
  "Phase 2: Supervised Machine Learning",
  "Phase 3: Unsupervised & Deep Learning",
];

const WEEK_OPTIONS = ["Week 1", "Week 2", "Week 3", "Week 4"];

const emptyForm = {
  title: "",
  description: "",
  assignee: "all", // "all" | mentee id
  phase: PHASE_OPTIONS[0],
  week: WEEK_OPTIONS[0],
  xp: 100,
  dueDate: "",
};

const CreateTaskModal = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const reset = () => {
    setForm(emptyForm);
    setErrors({});
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const validate = () => {
    const err = {};
    if (!form.title.trim()) err.title = "Title is required";
    if (!form.description.trim()) err.description = "Description is required";
    if (!form.dueDate) err.dueDate = "Due date is required";
    if (Number(form.xp) < 10 || Number(form.xp) > 1000)
      err.xp = "XP must be between 10 and 1000";
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
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="glass-panel flex max-h-[85vh] max-w-lg flex-col overflow-hidden rounded-[1.75rem] border-border-brand p-0">
        {/* Header */}
        <DialogHeader className="shrink-0 border-b border-border-brand p-5 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
              <PlusCircle className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle className="text-left text-lg font-semibold tracking-tight text-primary-text">
                Create New Task
              </DialogTitle>
              <DialogDescription className="text-left text-xs text-muted-text">
                Assign a task to your mentees.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Scrollable form */}
        <form
          id="create-task-form"
          onSubmit={handleSubmit}
          className="min-h-0 flex-1 space-y-4 overflow-y-auto p-5"
        >
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
            >
              Task Title *
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Build a Logistic Regression Classifier"
              className={`w-full rounded-xl border bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none transition-colors focus:border-border ${
                errors.title ? "border-red-500/50" : "border-border-brand"
              }`}
            />
            {errors.title && (
              <p className="mt-1 text-[11px] text-red-500">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              placeholder="Describe what the mentee should build and submit..."
              className={`w-full resize-none rounded-xl border bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none transition-colors focus:border-border ${
                errors.description ? "border-red-500/50" : "border-border-brand"
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-[11px] text-red-500">
                {errors.description}
              </p>
            )}
          </div>

          {/* Assignee */}
          <div>
            <label
              htmlFor="assignee"
              className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
            >
              Assign To
            </label>
            <select
              id="assignee"
              name="assignee"
              value={form.assignee}
              onChange={handleChange}
              className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none focus:border-border"
            >
              <option value="all">All Mentees</option>
              {menteesData.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Phase + Week */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phase"
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
              >
                Phase
              </label>
              <select
                id="phase"
                name="phase"
                value={form.phase}
                onChange={handleChange}
                className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none focus:border-border"
              >
                {PHASE_OPTIONS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="week"
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
              >
                Week
              </label>
              <select
                id="week"
                name="week"
                value={form.week}
                onChange={handleChange}
                className="w-full rounded-xl border border-border-brand bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none focus:border-border"
              >
                {WEEK_OPTIONS.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* XP + Due date */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="xp"
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
              >
                XP Reward
              </label>
              <input
                id="xp"
                name="xp"
                type="number"
                min="10"
                max="1000"
                step="10"
                value={form.xp}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none focus:border-border ${
                  errors.xp ? "border-red-500/50" : "border-border-brand"
                }`}
              />
              {errors.xp && (
                <p className="mt-1 text-[11px] text-red-500">{errors.xp}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="dueDate"
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
              >
                Due Date *
              </label>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                value={form.dueDate}
                onChange={handleChange}
                className={`w-full rounded-xl border bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none focus:border-border ${
                  errors.dueDate ? "border-red-500/50" : "border-border-brand"
                }`}
              />
              {errors.dueDate && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.dueDate}
                </p>
              )}
            </div>
          </div>
        </form>

        {/* Footer */}
        <DialogFooter className="shrink-0 flex-col gap-2 border-t border-border-brand p-5 sm:flex-row">
          <Button
            type="button"
            variant="ghost"
            onClick={handleClose}
            className="btn-glass h-10 w-full rounded-full text-xs font-medium sm:w-auto sm:flex-1"
          >
            <X className="mr-1.5 h-3.5 w-3.5" />
            Cancel
          </Button>
          <Button
            type="submit"
            form="create-task-form"
            className="btn-primary h-10 w-full rounded-full text-xs font-medium sm:w-auto sm:flex-1"
          >
            <Send className="mr-1.5 h-3.5 w-3.5" />
            Create Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskModal;