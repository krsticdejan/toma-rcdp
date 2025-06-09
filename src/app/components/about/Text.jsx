const OrdinationText = ({ text }) => (
  <div className="container">
    <div
      className="ordination__description"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </div>
);

export default OrdinationText;
