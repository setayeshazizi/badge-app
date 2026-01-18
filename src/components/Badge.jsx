function Badge({ label, value }) {
    return (
      <div
        style={{
          backgroundColor: "#f5f7fa",
          border: "1px solid #ddd",
          padding: "12px 16px",
          marginBottom: "10px",
          borderRadius: "8px",
          width: "260px",
        }}
      >
        <span style={{ fontWeight: "600", color: "#333" }}>
          {label}:
        </span>
        <span style={{ marginLeft: "6px", color: "#555" }}>
          {value}
        </span>
      </div>
    );
  }
  
  export default Badge;