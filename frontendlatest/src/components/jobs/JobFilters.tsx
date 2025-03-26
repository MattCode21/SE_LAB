import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface JobFiltersProps {
  onFilterChange: (filters: { type: string; location: string; industry: string }) => void;
}

const JobFilters = ({ onFilterChange }: JobFiltersProps) => {
  const [filters, setFilters] = useState({ type: "all", location: "all", industry: "all" });

  const handleFilterChange = (key: string, value: string) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // Pass the entire filter object
  };

  return (
    <div className="bg-muted p-4 rounded-lg mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-muted-foreground" />
        <h2 className="font-semibold">Filter Opportunities</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <Select value={filters.type} onValueChange={(value) => handleFilterChange('type', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Opportunity Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={filters.location} onValueChange={(value) => handleFilterChange('location', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={filters.industry} onValueChange={(value) => handleFilterChange('industry', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;
