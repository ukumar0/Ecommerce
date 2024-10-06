import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function CommonForm({formControls, formData, setFormData, onSubmit, buttonText, isBtnDisabled,
}) {
  function renderInputsByComponentType(ControlItem) {
    let element = null;
    const value = formData[ControlItem.name] || "";

    switch (ControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={ControlItem.name}
            placeholder={ControlItem.placeholder}
            id={ControlItem.name}
            type={ControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [ControlItem.name]: event.target.value,
              })
            }
          />
        );

        break;
      case "select":
        element = (
          <Select onValueChange={(value) => setFormData({
                ...formData,
                [ControlItem.name]: value,
              })}
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={ControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {ControlItem.options && ControlItem.options.length > 0
                ? ControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

        break;
      case "textarea":
        element = (
          <Textarea
            name={ControlItem.name}
            placeholder={ControlItem.placeholder}
            id={ControlItem.id}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [ControlItem.name]: event.target.value,
              })
            }
          />
        );

        break;

      default:
        element = (
          <Input
            name={ControlItem.name}
            placeholder={ControlItem.placeholder}
            id={ControlItem.name}
            type={ControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [ControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;