import BookingField from "@/components/BookingField";

export default function BookingBar({
  bookingData,
  location,
  setLocation,
  dropLocation,
  setDropLocation,
  notify,
}) {
  const pickupFields = [
    {
      label: "Locations",
      value: location,
      setValue: setLocation,
      options: bookingData.locations,
    },
    {
      label: "Date",
      value: bookingData.dates[0],
      options: bookingData.dates,
    },
    {
      label: "Time",
      value: bookingData.times[0],
      options: bookingData.times,
    },
  ];

  const dropOffFields = [
    {
      label: "Locations",
      value: dropLocation,
      setValue: setDropLocation,
      options: bookingData.locations,
    },
    {
      label: "Date",
      value: bookingData.dates[1],
      options: bookingData.dates,
    },
    {
      label: "Time",
      value: bookingData.times[1],
      options: bookingData.times,
    },
  ];

  return (
    <div className="absolute bottom-6 left-6 right-6 z-10 grid gap-4 rounded-[10px] bg-[#F3F3F3] p-5 shadow-[0_4px_4px_rgba(0,0,0,0.15)] sm:left-12 sm:right-12 sm:grid-cols-[1fr_1fr_auto] sm:gap-6 sm:px-6 lg:bottom-0 lg:left-[64px] lg:right-[64px] lg:min-h-[136px] lg:grid-cols-[1fr_1fr_auto] lg:items-center">
      <BookingGroup title="Pick - Up" fields={pickupFields} />
      <BookingGroup title="Drop - Off" fields={dropOffFields} />
      <button
        className="rounded bg-white px-6 py-2.5 text-sm font-semibold text-[#1A202C]"
        onClick={() =>
          notify(`Searching cars from ${location} to ${dropLocation}`)
        }
      >
        Search
      </button>
    </div>
  );
}

function BookingGroup({ title, fields }) {
  return (
    <div className="min-w-0 border-t border-[#B8B8B8] pt-4 first:border-t-0 first:pt-0 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0 first:sm:border-l-0 first:sm:pl-0">
      <h3 className="mb-3 text-sm font-semibold sm:text-base">
        <i className="mr-2 inline-block h-3.5 w-3.5 rounded-full bg-[#626262]/30 align-[-1px] shadow-[inset_0_0_0_4px_#F3F3F3]" />
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        {fields.map((field) => (
          <BookingField key={`${title}-${field.label}`} {...field} />
        ))}
      </div>
    </div>
  );
}
