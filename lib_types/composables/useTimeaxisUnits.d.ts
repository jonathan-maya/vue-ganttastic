import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/de';
import 'dayjs/locale/nl';
export default function useTimeaxisUnits(): {
    timeaxisUnits: import("vue").ComputedRef<{
        upperUnits: {
            label: string;
            value?: string | undefined;
            date: Date;
            width?: string | undefined;
        }[];
        lowerUnits: {
            label: string;
            value?: string | undefined;
            date: Date;
            width?: string | undefined;
        }[];
    }>;
};
