import "./CategoryColorPicker.css";
import { categoryColors } from "../model/category-colors";
type CategoryColorPickerProps = {
  selectedColor: string;
  onChangeColor: (color: string) => void;
};


export function CategoryColorPicker({
  selectedColor,
  onChangeColor,
}: CategoryColorPickerProps) {



  return (
    <section className="category-color-picker">
      <header className="category-color-picker__header">
        <span>Color</span>
        <p>Select a visual identity for this category.</p>
      </header>

      <div className="category-color-picker__current">
        <span
          className="category-color-picker__preview"
          style={{ backgroundColor: selectedColor || ""}}
        />

        <div>
          <strong>{selectedColor?"Current color":"Random Color"}</strong>
          <small>{selectedColor || ""}</small>
        </div>
      </div>

      <div className="category-color-picker__options">
        {categoryColors.map((color) => {
          const isSelected = selectedColor === color.value;

          return (
            <button
            name="color"
              key={color.value}
              className={`category-color-picker__option ${
                isSelected
                  ? "category-color-picker__option--selected"
                  : ""
              }`}
              type="button"
              onClick={() => onChangeColor(color.value)}
              aria-pressed={isSelected}
              title={color.label}
            >
              <span
                className="category-color-picker__swatch"
                style={{ backgroundColor: color.value }}
              />

              <span>{color.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}