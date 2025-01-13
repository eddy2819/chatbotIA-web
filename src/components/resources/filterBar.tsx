import React from "react"
import { Button } from "@/components/ui/button"
import { ListFilter, SortAsc, FileWarning, FileEdit, Filter } from 'lucide-react'

const FilterBar = () => {
    return (
        <div className="flex gap-28 mb-4">
            <Button variant="outline" size="sm" className=" hover:bg-violet-50" >
                <ListFilter className="w-4 h-4 mr-2 " />
                Mostrar todos
            </Button>
            <Button variant="outline" size="sm" className=" hover:bg-violet-50">
                <SortAsc className="w-4 h-4 mr-2" />
                Orden alfabético
            </Button>
            <Button variant="outline" size="sm" className=" hover:bg-violet-50">
                <FileWarning className="w-4 h-4 mr-2" />
                Incompletos
            </Button>
            <Button variant="outline" size="sm" className=" hover:bg-violet-50">
                <FileEdit className="w-4 h-4 mr-2" />
                Borradores
            </Button>
            <Button variant="outline" size="sm" className=" hover:bg-violet-50">
                <Filter className="w-4 h-4 mr-2" />
                Filtrar avanzado
            </Button>
        </div>
    )
}

export default FilterBar

