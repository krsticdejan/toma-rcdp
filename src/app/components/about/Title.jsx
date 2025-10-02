const OrdinationTitle = ({ title, text }) => (
  <div className="ordination__text">
    <h1 style={{ whiteSpace: "pre-line" }}>{title}</h1>
    <p>{text}</p>
  </div>
);

export default OrdinationTitle;
