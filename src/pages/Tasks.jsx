import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import TasksHeader from "@/components/TasksHeader";
import TasksTab from "@/components/TasksTab";
import TasksTable from "@/components/TasksTable";
import CreateTaskModal from "@/components/CreateTaskModal";
import Toast from "@/components/Toast";
import { mentorTasksData } from "@/mockData/mentorTasksData";

const Tasks = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [showCreate, setShowCreate] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "" });

  const pendingCount = useMemo(
    () => mentorTasksData.filter((t) => t.status === "pending").length,
    []
  );

  const filtered = useMemo(() => {
    let data = mentorTasksData;

    if (filter !== "all") {
      data = data.filter((t) => t.status === filter);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        (t) =>
          t.projectName.toLowerCase().includes(q) ||
          t.menteeName.toLowerCase().includes(q) ||
          t.title.toLowerCase().includes(q)
      );
    }

    return data;
  }, [filter, query]);

  const handleCreateTask = (form) => {
    
    console.log("Creating task:", form);
    setShowCreate(false);
    setToast({
      open: true,
      message: `Task "${form.title}" created successfully.`,
    });
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      <TasksHeader
        total={mentorTasksData.length}
        pendingCount={pendingCount}
        query={query}
        onQueryChange={setQuery}
        onCreateClick={() => setShowCreate(true)}
      />

      <TasksTab
        filter={filter}
        onFilterChange={setFilter}
        pendingCount={pendingCount}
      />

      <TasksTable
        submissions={filtered}
        onView={(id) => navigate(`/mentor/tasks/${id}`)}
      />

      <CreateTaskModal
        open={showCreate}
        onClose={() => setShowCreate(false)}
        onSubmit={handleCreateTask}
      />

      <Toast
        open={toast.open}
        message={toast.message}
        variant="success"
        onClose={() => setToast((t) => ({ ...t, open: false }))}
      />
    </div>
  );
};

export default Tasks;