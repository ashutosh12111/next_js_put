import { TOASTR_TYPES } from "@/types";

export function convertToMinutesAndSeconds(seconds: number): string {
    if (isNaN(seconds)) {
        return `"00", "00"`
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


export function formatMillisecondsToMinutesSeconds(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();

    return `${formattedMinutes}:${formattedSeconds}`;
}

export const showToast = (toast: any,
    type: keyof typeof TOASTR_TYPES,
    message: string,
    title?: string) => {
    console.log('called')
    toast(
        <div className="flex items-start">

            <div className="mr-3 flex-shrink-0">
            </div>
            <div>
                <p className="text-16 font-semibold leading-24 tracking-0.016 mb-2">
                    {title ? title : type === TOASTR_TYPES.SUCCESS ? "Success!" : "Failed!"}
                </p>
                <p className="text-14 font-normal leading-20 tracking-0.014">{message}</p>
            </div>
        </div>,
        {
            style: {
                backgroundColor: type === TOASTR_TYPES.SUCCESS ? "#039855" : "#D92037",
                border: type === TOASTR_TYPES.SUCCESS ? "none" : "none",
                borderRadius: "4px",
                color: "white",
                padding: "14px 16px",
            },
        }
    );

}


export const getDate = (date: any) => {
    const dateTime = new Date(date);
    
    // Get hours and minutes with leading zero if needed
    const hours = String(dateTime.getUTCHours()).padStart(2, '0');
    const minutes = String(dateTime.getUTCMinutes()).padStart(2, '0');

    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = dateTime.toLocaleDateString("en-US", options);

    return {
        date: formattedDate,
        time: `${hours}:${minutes}`
    };
};
