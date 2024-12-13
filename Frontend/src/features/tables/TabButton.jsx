export default function TabButton({ status }) {
  const buttonStyles = {
    width: "85px",
    height: "30px",
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const statusStyles = {
    Approved: { backgroundColor: "#55a052", borderColor: "#85e085" },
    Pending: { backgroundColor: "#3765c5", borderColor: "#808abdfe" },
    Suspended: { backgroundColor: "#f99308", borderColor: "#f2f258fe" },
    Blocked: { backgroundColor: "#be362f", borderColor: "#ec7c72fe" },
  };

  const buttonVariant = {
    Approved: "success",
    Pending: "primary",
    Suspended: "warning",
    Blocked: " #be362f",
  };

  return (
    <button
      type="button"
      className={`btn btn-${buttonVariant[status]}`}
      style={{
        ...buttonStyles,
        ...statusStyles[status],
        color: "white",
      }}
    >
      {status}
    </button>
  );
}
