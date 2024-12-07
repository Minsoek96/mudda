import { useState } from "react";

import Accordion from "@/components/Accordion/BaseAccordion";
import DatePicker from "@/components/Accordion/DatePicker";

export default function PickerAccordion() {
  const [selected, setSelected] = useState<Date>(new Date());
  const isSelectedPicker = selected ? `${selected?.toLocaleDateString()}` : "";

  return (
    <Accordion defaultSection="date">
      <Accordion.Section
        id="date"
        label="날짜"
        formatValue={isSelectedPicker}
      >
        <DatePicker setDataValue={setSelected} dataValue={selected ?? ""} />
      </Accordion.Section>
      <Accordion.Section
        id="time"
        label="시간"
        formatValue={'12:00:00'}
      >
        <DatePicker setDataValue={setSelected} dataValue={selected ?? ""} />
      </Accordion.Section>
    </Accordion>
  );
}
