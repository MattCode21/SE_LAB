import React from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const AlumniSearchFilters = ({ onSearch, onBatchChange, onProgrammeChange, onDepartmentChange }) => {
  const years = Array.from({ length: 2025 - 1975 + 1 }, (_, i) => (1975 + i).toString());

  return (
    <div className="bg-muted p-4 rounded-lg mb-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search alumni by name..."
          className="w-full px-4 py-2 border rounded"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Batch Year</label>
          <Select onValueChange={onBatchChange}>
            <SelectTrigger>
              <SelectValue placeholder="Any Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Year</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Programme</label>
          <Select onValueChange={onProgrammeChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Programmes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Programmes</SelectItem>
              <SelectItem value="btech">B.Tech</SelectItem>
              <SelectItem value="mtech">M.Tech</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
              <SelectItem value="mca">MCA</SelectItem>
              <SelectItem value="msc">M.Sc</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Department</label>
          <Select onValueChange={onDepartmentChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cse">Computer Science</SelectItem>
              <SelectItem value="ece">Electronics & Communication</SelectItem>
              <SelectItem value="eee">Electrical & Electronics</SelectItem>
              <SelectItem value="mech">Mechanical</SelectItem>
              <SelectItem value="civil">Civil</SelectItem>
              <SelectItem value="chemical">Chemical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="mt-4 gap-2">
        <Search className="h-4 w-4" />
        Search Alumni
      </Button>
    </div>
  );
};

export default AlumniSearchFilters;
