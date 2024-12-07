import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";

import "react-day-picker/style.css";

interface Props {
  dataValue: Date;
  setDataValue: (newData: Date) => void;
}

/**데이트 선택 컴포넌트 */
export default function DatePicker({ dataValue, setDataValue }: Props) {

  const formatYearMonthKorean = (month: Date) => {
    const year = month.getFullYear();
    const monthName = month.toLocaleDateString("ko-KR", { month: "long" });
    return `${year} ${monthName}`;
  };

  return (
    <div className="flex items-center justify-center w-full h-full px-[24px] py-[34px] bg-white rounded-[15px]">
      <DayPicker
        mode="single"
        formatters={{ formatCaption: formatYearMonthKorean }}
        selected={dataValue}
        onSelect={(date) => setDataValue(date ?? new Date())}
        required={false}
        locale={ko}
        classNames={{
          month: "text-primary-main",
          day: "text-[#202020]",
          weekdays: "text-[#A9A9A9]",
          selected: "bg-primary-main rounded-full text-[#FFFFFF]",
          button_next:
            "bg-[#F2F2F2] rounded-full py-[9px] px-[10px] [&_svg]:fill-[#A5A5A5]",
          button_previous:
            "bg-[#F2F2F2] rounded-full py-[9px] px-[10px] [&_svg]:fill-[#A5A5A5] mr-[16px]",
        }}
      />
    </div>
  );
}
