const TabLine = ({ content, children }) => {
  return (
    <>
      <div
        style={{
          marginTop: "4vh",
          padding: "0.75rem 1rem",
          borderBottom: "1px solid #d9d9d9",
          width: "100%",
          fontWeight: "bold",
          marginBottom: "0.75rem",
        }}
      >
        {content}
      </div>
    </>
  );
};

export default TabLine;
