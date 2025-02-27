import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FilterSidebarProps {
  categories: string[];
  selectedCategories: string[];
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onClearFilters: () => void;
  onClose?: () => void;
  isBestSeller: boolean;
  onChangeIsBestSeller: () => void;
}

export default function FilterSidebar({
  categories,
  selectedCategories,
  priceRange,
  onCategoryChange,
  onPriceRangeChange,
  onClearFilters,
  onClose,
  isBestSeller,
  onChangeIsBestSeller,
}: FilterSidebarProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => onCategoryChange(category)}
              />
              <Label
                htmlFor={`category-${category}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="flex items-center gap-2">
        <Checkbox
          id={"bestseller-check"}
          checked={isBestSeller}
          onCheckedChange={onChangeIsBestSeller}
        />
        <Label
          htmlFor={`bestseller-check`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Only Best Sellers
        </Label>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={priceRange}
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={(value) =>
              onPriceRangeChange(value as [number, number])
            }
            className="mb-6"
          />
          <div className="flex items-center justify-between">
            <div className="border rounded-md px-2 py-1 w-20 text-center">
              ${priceRange[0]}
            </div>
            <div className="border rounded-md px-2 py-1 w-20 text-center">
              ${priceRange[1]}
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={onClearFilters} className="w-full">
          Clear Filters
        </Button>
        {onClose && (
          <Button onClick={onClose} className="w-full md:hidden">
            Apply Filters
          </Button>
        )}
      </div>
    </div>
  );
}
