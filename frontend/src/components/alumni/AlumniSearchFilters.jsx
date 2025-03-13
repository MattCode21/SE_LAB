
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

const AlumniSearchFilters = () => {
  return (
    <div className="bg-muted p-4 rounded-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Batch Year</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Year</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="older">2019 & Earlier</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Programme</label>
          <Select>
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
          <Select>
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
