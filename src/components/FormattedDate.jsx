const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

export function FormattedDate({ date, ...props }) {

  return (
    <span {...props}>
        {date}
      </span>
  )
}
